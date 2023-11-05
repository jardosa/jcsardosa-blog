import { FC } from "react";
import { LiaBullhornSolid } from 'react-icons/lia'
import { cn } from "../../utils/tailwindCn";
import { XMarkIcon } from "@heroicons/react/20/solid";

/* eslint-disable-next-line */
export interface BroadcastMessageProps {
  message: string
  onClose?: () => void
}

const BroadcastMessage: FC<BroadcastMessageProps> = ({ message, onClose }) => {
  return (
    <div className={cn(
      "flex",
      "items-start",
      "p-4",
      "text-sm",
      "leading-5",
      "text-white",
      "bg-indigo-700",
      "gap-4"
    )}>
      <LiaBullhornSolid className='flex-shrink-0 w-5 h-5' />
      {message}
      {onClose && <XMarkIcon role="button" onClick={onClose} className="w-5 h-5 text-white" />}
    </div>
  );
}

export default BroadcastMessage;
