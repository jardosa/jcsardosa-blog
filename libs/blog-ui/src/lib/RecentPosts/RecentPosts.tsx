import { Tabs } from "@mantine/core";
import { Category } from "@nx-nextjs-tailwind-storybook/data-access";
import { startCase } from "lodash";
import PostList from "../PostList/PostList";
import { ComponentProps } from "react";

/* eslint-disable-next-line */
export interface RecentPostsProps {
  posts: ComponentProps<typeof PostList>['posts']
}

export function RecentPosts(props: RecentPostsProps) {

  const { posts = [] } = props
  const categories: { label: string, value: string }[] =
    [{ label: 'All', value: 'ALL' }].concat(Object.entries(Category).map(([key, val]) => ({
      label: startCase(key),
      value: val as string
    })))

  console.log({ posts })

  return (
    <div>
      <h1 className="text-2xl text-[#474747] leading-9 mb-6">Recent Posts</h1>
      <Tabs classNames={{
        tab: 'data-[active=true]:border-b-[#777777]',
        list: 'mb-10'
      }} defaultValue={'ALL'}>
        <Tabs.List>
          {categories.map((cat) => <Tabs.Tab value={cat.value}>{cat.label}</Tabs.Tab>)}
        </Tabs.List>
        <Tabs.Panel value={'ALL'}>
          <PostList posts={posts} />
        </Tabs.Panel>
      </Tabs>

    </div>
  );
}

export default RecentPosts;
