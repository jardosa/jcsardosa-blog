/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextInput, Radio, Group, Switch } from '@mantine/core';
import { Category, useCreatePostMutation, PostFieldsFragmentDoc } from '@nx-nextjs-tailwind-storybook/data-access';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { startCase } from 'lodash';
import { notifications } from '@mantine/notifications';

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import rehypeRaw from 'rehype-raw';

import AceEditor from "react-ace";
import * as a from "ace-builds/src-noconflict/mode-markdown";
import * as b from "ace-builds/src-noconflict/theme-github";
import * as c from "ace-builds/src-noconflict/ext-language_tools";
import dayjs from 'dayjs';


export const Route = createFileRoute('/admin/posts/new')({
  component: () => <NewBlogPage />
})


const NewBlogSchema = z.object({
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

type NewBlog = z.infer<typeof NewBlogSchema>;

const NewBlogPage = () => {

  const navigate = useNavigate()
  const defaultValues = {
    category: Category.Automotive,
    content: '',
    title: '',
    tagline: '',
    coverPhotoURL: '',
    isPublished: false,
  }

  const [createPost] = useCreatePostMutation({
    onCompleted: (data) => {
      notifications.show({ color: 'green', title: 'Success', message: 'Blog post has been created' });
      reset(defaultValues)
      navigate({ to: '/admin/posts/$postId', params: { postId: data.createPost._id } })
    },
    onError: () => {
      notifications.show({ color: 'red', title: 'Failed', message: 'Error occurred while creating blog post' });
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          posts(existingPosts = []) {
            const newPostRef = cache.writeFragment({
              data: data?.createPost,
              fragment: PostFieldsFragmentDoc,
              fragmentName: 'postFields'
            });
            return [...existingPosts, newPostRef];
          }
        }
      })
    }
  });
  const {
    reset,
    watch,
    control,
    handleSubmit,
    register,
    clearErrors,
    formState: { errors }
  } = useForm<NewBlog>({
    resolver: zodResolver(NewBlogSchema),
    mode: 'onSubmit',
    defaultValues,
  });

  const onSubmit: SubmitHandler<NewBlog> = (data) => {
    const slug = data.title.toLowerCase().split(' ').join('-').concat(dayjs().format('YYYY-MM-DDT-HH:mm:ss'));
    createPost({
      variables: { createPostInput: { ...data, slug, } }
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

export default NewBlogPage;
