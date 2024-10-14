import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Radio, Group, Switch, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Category, GetPostDocument, GetPostQuery, GetPostQueryVariables, useUpdatePostMutation } from '@nx-nextjs-tailwind-storybook/data-access';
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { startCase } from 'lodash';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import z from 'zod'
import AceEditor from "react-ace";
import { queryClient } from '../../../../main';
import { queryOptions } from '@tanstack/react-query';
import request from 'graphql-request';

const postQueryOptions = (postId: string) => queryOptions({
  queryKey: ['posts', postId],
  queryFn: async () =>
    request<GetPostQuery, GetPostQueryVariables>(
      import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
      GetPostDocument,
      { _id: postId },
    ),
})

export const Route = createFileRoute('/admin/posts/$postId/edit')({
  component: () => <UpdateBlogPage />,
  loader: ({ params }) => queryClient.ensureQueryData(postQueryOptions(params.postId))

})


const UpdateBlogSchema = z.object({
  title: z.string().min(8),
  coverPhotoURL: z.string().optional().nullable(),
  content: z.string().min(10),
  tagline: z.string(),
  category: z.enum([
    Category.Automotive,
    Category.LifeUpdate,
    Category.OutdoorAndTravel,
    Category.SoftwareDevelopment,
    Category.Tech
  ]),
  isPublished: z.boolean().catch(false)
});

type UpdateBlog = z.infer<typeof UpdateBlogSchema>;

const UpdateBlogPage = () => {
  const postData = Route.useLoaderData()
  const navigate = useNavigate()

  const post = postData?.post

  const [updatePost] = useUpdatePostMutation({
    onCompleted: (data) => {
      notifications.show({ color: 'green', title: 'Success', message: 'Blog post has been updated' });
      navigate({ to: '/admin/posts/$postId', params: { postId: data.updatePost._id } })
    },
    onError: () => {
      notifications.show({ color: 'red', title: 'Failed', message: 'Error occurred while updating blog post' });
    },
    // update(cache, { data }) {
    //   cache.modify({
    //     fields: {
    //       posts(existingPosts = []) {
    //         const newPostRef = cache.writeFragment({
    //           data: data?.updatePost,
    //           fragment: PostFieldsFragmentDoc,
    //           fragmentName: 'postFields'
    //         });
    //         return [...existingPosts, newPostRef];
    //       }
    //     }
    //   })
    // },
  });
  const {
    watch,
    control,
    handleSubmit,
    register,
    clearErrors,
    formState: { errors }
  } = useForm<UpdateBlog>({
    resolver: zodResolver(UpdateBlogSchema),
    mode: 'onSubmit',
    defaultValues: {
      tagline: post?.tagline,
      title: post?.title,
      category: post?.category,
      content: post?.content,
      coverPhotoURL: post?.coverPhotoURL,
      isPublished: !!post?.isPublished,

    }
  });

  const onSubmit: SubmitHandler<UpdateBlog> = (data) => {
    updatePost({
      variables: { updatePostInput: { id: post?._id as string, ...data, } }
    });
  };

  return (
    <form
      onChange={() => clearErrors()}
      className="outline outline-1 rounded-md outline-slate-300 p-5 space-y-2"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <TextInput
          label={'Title'}
          description="Title of the blog post"
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          error={errors.title?.message}
          {...register('title')}
        />
        <TextInput
          label={'Tagline'}
          description="Tagline of the blog post"
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          error={errors.tagline?.message}
          {...register('tagline')}
        />
        <Controller
          control={control}
          name={'category'}
          render={({ field: { value, name, onChange } }) =>
            <Radio.Group
              value={value}
              name={name}
              label="Category"
              withAsterisk
              onChange={(value) => {
                onChange(value);
              }}
              defaultValue={Category.Automotive}
              description="Category of the blog post"
              inputWrapperOrder={['label', 'input', 'description', 'error']}
              error={errors.category?.message}
            >
              <Group mt="xs">
                {Object.entries(Category).map(([label, value]) =>
                  <Radio
                    value={value}
                    key={value}
                    label={startCase(label)}
                  />
                )
                }
              </Group>
            </Radio.Group>
          }
        />
        <Controller
          control={control}
          name={'isPublished'}
          render={({ field: { name, value, onChange } }) => <Switch
            name={name}
            checked={value}
            label='Is Published?'
            onChange={(e) => onChange(e.currentTarget.checked)}
          />}
        />

        <div className='flex flex-wrap gap-2'>
          <Controller
            control={control}
            name='content'
            render={({ field: { name, onChange, onBlur, value } }) => <AceEditor
              className='flex-1 border'
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              mode='markdown'
              theme='github'
              editorProps={{ $blockScrolling: true }}
            />}
          />

          <Markdown
            className='prose lg:prose-xl flex-1 border'
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkToc]}>{watch('content')}</Markdown>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>

  );
};

export default UpdateBlogPage;
