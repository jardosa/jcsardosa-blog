/* eslint-disable-next-line */
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { useMemo } from "react";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon, LightBulbIcon
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

const alertstyle = cva(["py-4 pr-4 pl-12 flex items-start gap-4 relative"], {
  variants: {
    variant: {
      success: [
        "bg-ui-green-50",
      ],
      info: [
        "bg-ui-blue-50",
      ],
      warning: [
        "bg-ui-orange-50"
      ],
      danger: [
        "bg-ui-red-50",
      ],
      tip: [
        "bg-neutral-50"
      ]
    },
  },
  defaultVariants: {
    variant: "success",
  },
});


export type AlertProps = VariantProps<typeof alertstyle> & {
  title?: string
  text?: string
  isDismissible?: boolean
  variant: "success" | "info" | "warning" | "danger" | "tip"
  onDismiss: () => void
  primaryAction?: () => void
  secondaryAction?: () => void
}



const Alert: React.FC<AlertProps> = ({ variant, title, text, isDismissible, onDismiss, primaryAction, secondaryAction }) => {

  const icon = useMemo(() => {
    switch (variant) {
      case "success": return <CheckCircleIcon className="absolute w-5 h-5 text-ui-green-600 top-5 left-4 " />
      case "info": return <InformationCircleIcon className="absolute w-5 h-5 text-ui-blue-600 top-5 left-4 " />
      case "warning": return <ExclamationTriangleIcon className="absolute w-5 h-5 text-ui-orange-600 top-5 left-4 " />
      case "danger": return <ExclamationCircleIcon className="absolute w-5 h-5 text-ui-red-600 top-5 left-4 " />
      case "tip": return <LightBulbIcon className="absolute w-5 h-5 text-neutral-600 top-5 left-4 " />
    }

  }, [variant])
  return (
    <div className={alertstyle({ variant })}>
      {icon}
      <div className="flex flex-col flex-auto gap-2 flex-start">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm">{text}</div>
        <div>
          {primaryAction && <button></button>}
          {secondaryAction && <button></button>}
        </div>
      </div>
      {isDismissible && <XMarkIcon onClick={onDismiss} role="button" className="w-5 h-5 text-neutral-500" />}
    </div>
  );
}

export default Alert;
