import Avatar from "../Avatar/Avatar";

export interface AvatarDetailsProps {
  src?: string
  primaryText?: string
  secondaryText?: string
}

const AvatarDetails: React.FC<AvatarDetailsProps> = ({ primaryText, secondaryText, src }: AvatarDetailsProps) => {
  return (
    <div className="flex gap-2 cursor-pointer group">
      <Avatar variant={src ? 'user' : 'identicon'} size="md" src={src} initial={primaryText?.charAt(0).toUpperCase()} />
      {(!!primaryText || !!secondaryText) && <div className="my-auto">
        {!!primaryText && <div className="text-sm font-bold leading-4 group-hover:underline">{primaryText}</div>}
        {!!secondaryText && <div className="text-sm leading-4 group-hover:underline">{secondaryText}</div>}
      </div>}
    </div>

  );
}

export default AvatarDetails;
