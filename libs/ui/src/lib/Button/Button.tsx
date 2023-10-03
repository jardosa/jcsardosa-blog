'use client'

import { VariantProps, cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react"
import { cn } from "../../utils/tailwindCn";

const loadingButton = cva([
  "flex items-start flex-start gap-1 rounded-[4px] transition-all text-sm text-neutral-500 outline ",
], {
  variants: {
    size: {
      MD: ['p-2'],
      SM: ['p-1'],
    },
    loading: {
      true: ['bg-white'],
    },
    category: {
      primary: ['outline-1 outline-neutral-100 bg-neutral-10'],
      secondary: ['outline-1 outline-neutral-100 bg-neutral-10'],
      tertiary: ['outline-none', "bg-white", "text-neutral-400"],
    }
  },
  defaultVariants: {
    category: 'primary',
    loading: true,
    size: 'MD'
  }
})

const button = cva([
  "flex items-start rounded-[4px] transition-all text-sm",
  "outline outline-1",
  "focus:ring-offset-[3px] focus:ring-2 focus:ring-ui-blue-500",
  "active:ring-offset-[3px] active:ring-2 active:ring-ui-blue-500",
  "disabled:hover:outline-1 disabled:bg-neutral-10 disabled:text-neutral-500 disabled:outline-neutral-100"
], {
  variants: {
    intent: {
      default: ['bg-white'],
      confirm: [],
      danger: [],
    },
    category: {
      primary: ["text-white"],
      secondary: ['bg-white'],
      tertiary: ['!outline-none', "bg-white"],
    },
    size: {
      MD: ['p-2'],
      SM: ['p-1'],
    },
    outlineType: {
      normal: 'hover:outline-2 focus:outline-2 active:outline-2',
      dashed: 'outline-dashed outline-neutral-400 active:outline-neutral-600'
    },
    disabled: {
      true: [],
      false: [],
    }
  },
  compoundVariants: [
    {
      intent: 'default',
      category: 'primary',
      className: [
        "text-neutral-900 outline-neutral-200",
        "hover:outline-neutral-400 hover:bg-neutral-50",
        "focus:outline-neutral-400 focus:bg-neutral-50",
        "active:outline-neutral-600 active:bg-neutral-100"
      ],
    },
    {
      intent: 'default',
      category: 'tertiary',
      className: [
        "text-neutral-900 hover:bg-neutral-50",
        "focus:ring-offset-[2px] focus:bg-neutral-50",
        "active:ring-offset-[2px] active:bg-neutral-100"
      ],
    },
    {
      intent: "confirm",
      category: "primary",
      className: [
        "bg-ui-blue-500 outline-ui-blue-600",
        "hover:outline-ui-blue-800 hover:bg-ui-blue-600",
        "focus:outline-ui-blue-800 focus:bg-ui-blue-600",
        "active:outline-ui-blue-900 active:bg-ui-blue-700",
      ]
    },
    {
      intent: "confirm",
      category: "secondary",
      className: [
        "outline-ui-blue-500 text-ui-blue-500",
        "hover:outline-ui-blue-700 hover:bg-ui-blue-50 hover:text-ui-blue-700",
        "focus:outline-ui-blue-700 focus:bg-ui-blue-50 focus:text-ui-blue-700",
        "active:outline-ui-blue-900 active:bg-ui-blue-100 active:text-ui-blue-900",
      ]
    },
    {
      intent: "confirm",
      category: "tertiary",
      className: [
        "text-ui-blue-500",
        "hover:bg-ui-blue-50 hover:text-ui-blue-700",
        "focus:ring-offset-[2px] focus:bg-ui-blue-50 focus:text-ui-blue-700",
        "active:ring-offset-[2px] active:bg-ui-blue-100 active:text-ui-blue-900",
      ]
    },
    {
      intent: "danger",
      category: "primary",
      className: [
        "bg-ui-red-500  outline-ui-red-600",
        "hover:outline-ui-red-800 hover:bg-ui-red-600",
        "focus:outline-ui-red-800 focus:bg-ui-red-600",
        "active:outline-ui-red-900 active:bg-ui-red-700",
      ]
    },
    {
      intent: "danger",
      category: "secondary",
      className: [
        "outline-ui-red-500 text-ui-red-500",
        "hover:outline-ui-red-700 hover:bg-ui-red-50 hover:text-ui-red-700",
        "focus:outline-ui-red-700 focus:bg-ui-red-50 focus:text-ui-red-700",
        "active:outline-ui-red-900 active:bg-ui-red-100 active:text-ui-red-900",
      ]
    },
    {
      intent: "danger",
      category: "tertiary",
      className: [
        "text-ui-red-500",
        "hover:bg-ui-red-50 hover:text-ui-red-700",
        "focus:ring-offset-[2px] focus:bg-ui-red-50 focus:text-ui-red-700",
        "active:ring-offset-[2px] active:bg-ui-red-100 active:text-ui-red-900",
      ]
    },
    {
      intent: 'default',
      category: 'primary',
      outlineType: 'dashed',
      className: 'outline-neutral-400'
    },
    {
      disabled: true,
      intent: 'default',
      category: 'tertiary',
      className: 'disabled:bg-white outline-offset-0'
    },
  ],
  defaultVariants: {
    intent: "default",
    size: 'MD',
    category: 'primary'
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {
  disabled?: boolean
  loading?: boolean
}



const BaseButton = forwardRef<ElementRef<'button'>, ButtonProps>(({ intent, category, size, outlineType, className, children, loading, ...props }, ref) => {

  if (loading) {
    return <button disabled className={cn(loadingButton({ size, category, loading, className }))}>
      {loading && <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#DCDCDE" />
        <path d="M16 8C16 3.58172 12.4183 0 8 0V2C11.3137 2 14 4.68629 14 8H16Z" fill="#535158" />
      </svg>}
      <div>{loading ? "Loading" : children}</div>
    </button>
  }

  return (
    <button
      ref={ref}
      className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))}
      {...props}>
      {children}
    </button>
  )
})

export default BaseButton