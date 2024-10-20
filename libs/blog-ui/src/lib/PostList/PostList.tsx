import { ComponentProps } from "react";
import Post from "../Post/Post";
import { cn } from "../utils/tailwindCn";


/* eslint-disable-next-line */
export interface PostListProps {
  posts?: ComponentProps<typeof Post>[]
}

export const PostList = (props: PostListProps) => {
  const { posts = [] } = props
  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        return <div className="group/item">
          <Post {...post} />
          <div className={
            cn("my-12 border-b border-b-[#DFDFDF]", "group-last/item:hidden")
          }></div>
        </div>
      })}
    </div>
  );
}

export default PostList;
