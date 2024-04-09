'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, TextInput, Textarea } from '@mantine/core';
import { Category, useCreatePostMutation } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod'


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
    Category.Tech,
  ])
})

type NewBlog = z.infer<typeof NewBlogSchema>;

const NewBlogPage = () => {
  const { handleSubmit,
    register,
    clearErrors,
    formState: { errors } } = useForm<NewBlog>({
      resolver: zodResolver(NewBlogSchema),
      mode: 'onChange'
    })

  const onSubmit: SubmitHandler<NewBlog> = (data) => {
    console.log({ data })

    // useCreatePostMutation({})
  }
  console.log({ errors })
  return (
    <form
      onChange={() => clearErrors()}
      className='outline outline-1 rounded-md outline-slate-300 p-5 space-y-2'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-2'>
        <TextInput
          label={'Title'}
          description='Title of the blog post'
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          error={errors.title?.message}
          {...register('title')}
        />
        <TextInput
          label={'Tagline'}
          description='Tagline of the blog post'
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          error={errors.tagline?.message}
          {...register('tagline')}
        />
        <TextInput
          label={'Category'}
          description='Category of the blog post'
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          error={errors.category?.message}
          {...register('category')}
        />
        <Textarea
          label='Content'
          description='Body of the blog post'
          placeholder='A quick brown fox jumps over the lazy dog'
          error={errors.content?.message}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          {...register('content')}
        />
      </div>

      <Button type='submit'>Submit</Button>
    </form>

  )
}

export default NewBlogPage