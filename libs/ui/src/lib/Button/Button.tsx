'use client'

import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react"

const button = cva([
  "flex items-start rounded-[4px] transition-all outline text-sm",
  "focus:ring-offset-[3px] focus:ring-2 focus:ring-ui-blue-500",
  "active:ring-offset-[3px] active:ring-2 active:ring-ui-blue-500"
], {
  variants: {
    intent: {
      default: [],
      confirm: [],
      danger: [],
    },
    category: {
      primary: [],
      secondary: [],
      tertiary: [],
    },
    size: {
      MD: ['p-2'],
      SM: ['p-1'],
    }
  },
  compoundVariants: [
    {
      intent: 'default',
      category: 'primary',
      className: [
        "bg-white outline-1 outline-neutral-200 text-neutral-900",
        "hover:outline-2 hover:outline-neutral-400 hover:bg-neutral-50",
        "focus:outline-2 focus:outline-neutral-400",
        "active:outline-2 active:outline-neutral-600 active:bg-neutral-100"
      ],
    },
    {
      intent: 'default',
      category: 'tertiary',
      className: [
        "bg-white outline-none",
        "hover:bg-neutral-50",
        "focus:ring-offset-[2px] focus:bg-neutral-50",
        "active:ring-offset-[2px] active:bg-neutral-100"
      ],
    },
    {
      intent: "confirm",
      category: "primary",
      className: [
        "bg-ui-blue-500 outline-1 outline-ui-blue-600",
        "hover:outline-2 hover:outline-ui-blue-800 hover:bg-ui-blue-600",
        "focus:outline-2 focus:outline-ui-blue-800 focus:bg-ui-blue-600",
        "active:outline-2 active:outline-ui-blue-900 active:bg-ui-blue-700",
        "text-white"
      ]
    },
    {
      intent: "confirm",
      category: "secondary",
      className: [
        "bg-white outline-1 outline-ui-blue-500 text-ui-blue-500",
        "hover:outline-2 hover:outline-ui-blue-700 hover:bg-ui-blue-50 hover:text-ui-blue-700",
        "focus:outline-2 focus:outline-ui-blue-700 focus:bg-ui-blue-50 focus:text-ui-blue-700",
        "active:outline-2 active:outline-ui-blue-900 active:bg-ui-blue-100 active:text-ui-blue-900",
      ]
    },
    {
      intent: "confirm",
      category: "tertiary",
      className: [
        "bg-white outline-none text-ui-blue-500",
        "hover:bg-ui-blue-50 hover:text-ui-blue-700",
        "focus:ring-offset-[2px] focus:bg-ui-blue-50 focus:text-ui-blue-700",
        "active:ring-offset-[2px] active:bg-ui-blue-100 active:text-ui-blue-900",
      ]
    },
    {
      intent: "danger",
      category: "primary",
      className: [
        "bg-ui-red-500 outline-1 outline-ui-red-600",
        "hover:outline-2 hover:outline-ui-red-800 hover:bg-ui-red-600",
        "focus:outline-2 focus:outline-ui-red-800 focus:bg-ui-red-600",
        "active:outline-2 active:outline-ui-red-900 active:bg-ui-red-700",
        "text-white"
      ]
    },
    {
      intent: "danger",
      category: "secondary",
      className: [
        "bg-white outline-1 outline-ui-red-500 text-ui-red-500",
        "hover:outline-2 hover:outline-ui-red-700 hover:bg-ui-red-50 hover:text-ui-red-700",
        "focus:outline-2 focus:outline-ui-red-700 focus:bg-ui-red-50 focus:text-ui-red-700",
        "active:outline-2 active:outline-ui-red-900 active:bg-ui-red-100 active:text-ui-red-900",
      ]
    },
    {
      intent: "danger",
      category: "tertiary",
      className: [
        "bg-white outline-none text-ui-red-500",
        "hover:bg-ui-red-50 hover:text-ui-red-700",
        "focus:ring-offset-[2px] focus:bg-ui-red-50 focus:text-ui-red-700",
        "active:ring-offset-[2px] active:bg-ui-red-100 active:text-ui-red-900",
      ]
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
  VariantProps<typeof button> { }



const BaseButton: React.FC<PropsWithChildren<ButtonProps>> = ({ intent, category, size, ...props }) => {
  return <button className={button({ intent, category, size })} {...props}>BaseButton</button>
}

export default BaseButton