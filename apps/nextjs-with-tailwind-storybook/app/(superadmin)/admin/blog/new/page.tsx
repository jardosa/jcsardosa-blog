'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, TextInput, Textarea, Radio, Group } from '@mantine/core';
import { Category, useCreatePostMutation } from '@nx-nextjs-tailwind-storybook/data-access';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { startCase } from 'lodash';
import { notifications } from '@mantine/notifications';


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
  ])
});

type NewBlog = z.infer<typeof NewBlogSchema>;

const NewBlogPage = () => {

  const [createPost] = useCreatePostMutation();
  const {
    control,
    handleSubmit,
    register,
    clearErrors,
    formState: { errors }
  } = useForm<NewBlog>({
    resolver: zodResolver(NewBlogSchema),
    mode: 'onSubmit'
  });

  const onSubmit: SubmitHandler<NewBlog> = (data) => {
    const slug = data.title.toLowerCase().split(' ').join('-');
    createPost({
      variables: {
        createPostInput: {
          ...data,
          slug
        }
      }, onCompleted: () => {
        notifications.show({ color: 'green', title: 'Success', message: 'Blog post has been created' });
      }, onError:  () => {
        notifications.show({  color: 'red', title: 'Failed', message: 'Error occurred while creating blog post' });

      }
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
        >

        </Controller>

        <Textarea
          label="Content"
          description="Body of the blog post"
          placeholder="A quick brown fox jumps over the lazy dog"
          error={errors.content?.message}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          {...register('content')}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>

  );
};

export default NewBlogPage;
