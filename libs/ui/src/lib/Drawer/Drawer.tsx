import { ElementRef, FC, ReactNode, useEffect, useRef } from "react";
import { cn } from "../../utils/tailwindCn";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Button from "../Button/Button";


type HeaderProps = {
  title: string
  onClose: () => void
  primaryAction?: {
    onClick: () => void
    label: string
  }
  secondaryAction?: {
    onClick: () => void
    label: string
  }
}

/* eslint-disable-next-line */
export type DrawerProps = HeaderProps & {
  open: boolean
  content?: ReactNode
}

const Drawer: FC<DrawerProps> = ({ open, title, onClose, primaryAction, secondaryAction, content }) => {
  const ref = useRef<ElementRef<'div'>>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  },)

  return (
    <div ref={ref} tabIndex={0} onKeyDown={(event) => {
      if (event.code === 'Escape') {
        onClose()
      }
    }} className={cn('top-0 right-0 h-screen bg-white shadow-lg fixed',
      'ease-in',
      'duration-200',
      'w-full',
      open && 'max-w-[400px]',
      !open && 'max-w-0'
    )}>
      {/* header */}
      <div className="p-4 pr-2 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h2>{title}</h2>
          <XMarkIcon onClick={onClose} role="button" className="w-5 h-5" />
        </div>
        {(primaryAction || secondaryAction) && <div className="flex gap-2">
          {!!primaryAction && <Button intent='confirm' category='primary' label={primaryAction.label} onClick={() => primaryAction.onClick()} />}
          {!!secondaryAction && <Button intent='confirm' category='secondary' label={secondaryAction.label} onClick={() => secondaryAction.onClick()} />}
        </div>}
      </div>

      {/* container */}
      <div className="p-4 border-t">
        {content}
      </div>

    </div>
  );
}

export default Drawer;
