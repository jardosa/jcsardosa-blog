import Link from "next/link";
import { FC, useMemo, useState } from "react";
import { IconType } from "react-icons/lib";
import { FaEllipsisH } from 'react-icons/fa'

export type Breadcrumb = {
  avatar?: IconType;
  label?: string;
  src?: string;
  onClick?: () => void
};

const Breadcrumb: FC<Breadcrumb> = ({ avatar: Avatar, label, src, onClick }) => {
  return <div className="flex items-center gap-1 group last:font-bold text-neutral-700">
    {Avatar && <Avatar
      {...onClick && { role: 'button', onClick: () => onClick() }}
      className="w-4 h-4 rounded-[4px] border" />}
    {!!src && <Link href={src}>{label}</Link>}
    <div className="group-last:hidden">/</div>
  </div>
}

export type BreadcrumbsProps = {
  items: Breadcrumb[]
}


const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const [expandItems, setExpandItems] = useState(false)

  const splicedItems = useMemo(() => {
    if (items.length > 3 && !expandItems) {
      return [...items.slice(0, 1),
      {
        avatar: FaEllipsisH,
        onClick: () => {
          setExpandItems(true)
        }
      },
      ...items.slice(-2),]
    }
    return items
  }, [items, expandItems])

  return (
    <div className="flex items-center gap-2">
      {!!splicedItems?.length && splicedItems?.map((value) => <Breadcrumb
        key={JSON.stringify(value)}
        avatar={value.avatar}
        label={value.label}
        src={value.src}
        onClick={value.onClick}
      />)}
    </div>
  );
}

export default Breadcrumbs;
