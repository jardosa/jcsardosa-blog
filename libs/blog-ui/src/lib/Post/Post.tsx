/* eslint-disable-next-line */
export interface PostProps {
  date: string;
  tags?: { label: string, value: string }[];
  title: string
}

export const Post = (props: PostProps) => {
  const { date, title, tags = [] } = props
  return (
    <div className="w-full space-y-6">
      <div className="text-[#777777] text-xs leading-[14px]">
        {date}
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        <h2>{title}</h2>
        <div className="flex flex-wrap gap-1">{tags.map((tag) =>
          <div className="rounded-[3px] bg-[#F4F4F4] leading-[14px] text-xs px-4 py-2">
            #{tag.label}
          </div>)}</div>
      </div>
    </div>
  );
}

export default Post;
