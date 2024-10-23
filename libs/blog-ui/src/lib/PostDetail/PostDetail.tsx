import { Category } from "@nx-nextjs-tailwind-storybook/data-access";
import { PostProps } from "../Post/Post";
import { kebabCase, startCase } from "lodash";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import { cn } from "../utils/tailwindCn";
import dayjs from 'dayjs'

/* eslint-disable-next-line */
export interface PostDetailProps extends PostProps {
  author: string;
  category: Category;
  content: string;
  coverPhoto: string;
}

export function PostDetail(props: PostDetailProps) {
  const { category, date, author, coverPhoto, content, tags = [], title } = props

  const publishedDate = date ? dayjs(date).format('MMMM DD.YY') : 'Unknown Publish Date'

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="text-xs leading-[14px] text-[#777777]">{startCase(kebabCase(category))}</div>
        <h1 className={cn('text-2xl', 'leading-9', 'text-[#474747]')}>{title}</h1>
        <div className="flex gap-2">
          <div className="text-[#777777] text-xs">{publishedDate}</div>
          <div className="text-xs text-[#DFDFDF]">{' '}|{' '}</div>
          <div className="text-[#777777] text-xs">{author}</div>
        </div>
      </div>
      <div className="rounded-[7px] overflow-hidden">
        <img src={coverPhoto} className="h-[352px] w-full object-cover" />
      </div>
      <Markdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm, remarkToc]}>{content}</Markdown>
      <div className="flex flex-wrap gap-1">{tags.map((tag) =>
        <div className="rounded-[3px] bg-[#F4F4F4] leading-[14px] text-xs px-4 py-2">
          #{tag.label}
        </div>)}
      </div>
    </div>
  );
}

export default PostDetail;
