import { cva } from "class-variance-authority";
import Avatar from "../Avatar/Avatar";
import Badge from "../Badge/Badge";

const avatarStacked = cva(['border-[12px] '], {
  variants: {
    size: {
      'sm': [],
      'md': []
    }
  }
})

export interface AvatarStackedProps {
  size: 'sm' | 'md'
  avatars: { src: string }[]
  limit?: number
}


const AvatarStacked: React.FC<AvatarStackedProps> = ({ avatars, size = 'sm', limit = 2 }) => {

  const mappedAvatars = avatars.slice(0, limit).map(({ src }) => {
    return <Avatar className="border-[1px] shadow-[0px 0px 0px 2px #FFF] border-neutral-950/[0.08] first:ml-0 ml-[-5px] relative" size={size} variant={'user'} src={src} />
  })
  return (
    <div className="flex">
      {mappedAvatars}
      {avatars.length > limit && <Badge className="ml-[-5px] pr-[-5px] relative rounded-full" intent='neutral' size={size?.toUpperCase() as 'SM' | 'MD'} label={`+${avatars.length - limit}`} />}
    </div>
  );
}

export default AvatarStacked;
