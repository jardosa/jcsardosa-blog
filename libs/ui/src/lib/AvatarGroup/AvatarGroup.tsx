'use client'

import { useState } from "react"
import Avatar from "../Avatar/Avatar"

export interface AvatarGroupProps {
  avatars: {
    src?: string,
    primaryText?: string,
    secondaryText?: string
  }[],
  limit?: number
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, limit = 5 }) => {
  const [expanded, setExpanded] = useState(false)
  if (avatars?.length === 1) {
    const { src, primaryText, secondaryText } = avatars[0]
    return <div className="flex items-center gap-2">
      <Avatar src={src} variant='user' size="sm" />
      <div className="flex gap-1">
        <div className="text-sm font-bold leading-4 group-hover:underline">{primaryText}</div>
        <div className="text-sm leading-4 group-hover:underline">{secondaryText}</div>
      </div>
    </div>
  }

  const mappedAvatars = avatars.slice(0, !expanded ? limit : -1).map(({ src }) => {
    return <Avatar variant="user" size="sm" src={src} />
  })

  return (
    <div className="w-max space-y-2">
      <div className="grid grid-cols-5 gap-2">
        {mappedAvatars}
      </div>
      {avatars.length > limit && !expanded && <button className="text-sm text-neutral-700 leading-4 " onClick={() => setExpanded(true)}>+ {avatars.length - limit} more</button>}
      {expanded && <button className="text-sm text-neutral-700 leading-4 " onClick={() => setExpanded(false)}>- show less</button>}
    </div>

  );
}

export default AvatarGroup;
