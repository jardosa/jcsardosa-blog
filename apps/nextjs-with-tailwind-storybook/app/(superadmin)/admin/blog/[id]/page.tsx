'use client'

import { useGetPostQuery } from '@nx-nextjs-tailwind-storybook/data-access'
import { Loading } from '@nx-nextjs-tailwind-storybook/ui'
import formatDate from 'apps/nextjs-with-tailwind-storybook/utils/formatDate'
import { PageProps } from 'dist/apps/nextjs-with-tailwind-storybook/.next/types/app/page'
import { NextPage } from 'next'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useForm } from 'react-hook-form'

const AdminSinglePost: NextPage<PageProps> = ({ params: { id } }) => {

  const { data: postData, loading } = useGetPostQuery({ variables: { _id: id } })

  // const {} = useForm()

  const post = postData?.post

  if (loading) return <Loading />

  return (
    <div className='space-y-5'>
      <div className='text-2xl font-semibold'>
        {post?.title}
      </div>

      <div className='text-lg font-semibold'>Details</div>

      <div className='space-y-5'>
        <div className='medium'>Title: {post?.title}</div>
        <div className='medium'>Category: {post?.category}</div>
        <div className='medium'>Date Created: {formatDate(post?.createdAt as string)}</div>
        <div className='medium'>Content</div>
        <div className='flex flex-wrap'>
          <AceEditor
            className='flex-1'
            defaultValue={post?.content}
            mode='markdown'
            theme='github'
            editorProps={{ $blockScrolling: true }}
          />
          <Markdown
            className='prose lg:prose-xl flex-1'
            remarkPlugins={[remarkGfm, remarkToc]}>{postData?.post?.content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default AdminSinglePost