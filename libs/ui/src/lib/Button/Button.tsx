'use client'

import { VariantProps, cva, cx, CxOptions } from "class-variance-authority";
import { ElementRef, forwardRef } from "react"

import { twMerge } from "tailwind-merge";

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}

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
}



const BaseButton = forwardRef<ElementRef<'button'>, ButtonProps>(({ intent, category, size, outlineType, className, children, ...props }, ref) => {
  return <button ref={ref} className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))} {...props}>{children}</button>
})

export default BaseButton