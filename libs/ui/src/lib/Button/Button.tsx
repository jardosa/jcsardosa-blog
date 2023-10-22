'use client'

import { VariantProps, cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react"
import { cn } from "../../utils/tailwindCn";
import { pad } from 'lodash'
import * as nodeEmoji from 'node-emoji'
import { Bars2Icon, BarsArrowDownIcon, ChevronDownIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid";
import { HiBarsArrowDown } from 'react-icons/hi2'
import Badge, { BadgeProps } from "../Badge/Badge";


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
      tertiary: ['outline-none', "bg-none", "text-neutral-400"],
    }
  },
  defaultVariants: {
    category: 'primary',
    loading: true,
    size: 'MD'
  }
})

const button = cva([
  "flex items-center gap-1 rounded-[4px] transition text-sm",
  "outline outline-1",
  "focus:ring-offset-[3px] focus:ring-2 focus:ring-ui-blue-500",
  "active:ring-offset-[3px] active:ring-2 active:ring-ui-blue-500",
  "disabled:hover:outline-1 disabled:bg-neutral-10 disabled:text-neutral-500 disabled:outline-neutral-100"
], {
  variants: {
    intent: {
      default: [],
      confirm: [],
      danger: [],
    },
    buttonType: {
      default: [],
      dropdown: [],
      'dropdown-split': ["hover:relative active:relative focus:relative"],
      'sorting': ["hover:relative active:relative focus:relative"],
      'icon': [],
      'icon-dropdown': [],
      'icon-dropdown-split': ["hover:relative active:relative focus:relative"],
      'ellipsis': []
    },
    category: {
      primary: ["text-white"],
      secondary: ['bg-white'],
      tertiary: ['!outline-none', "bg-none"],
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
    category: 'primary',
    buttonType: 'default',
    outlineType: 'normal'
  },
});

type RightInfo = {
  isSplit: true
  splitIcon: typeof Bars2Icon | typeof HiBarsArrowDown
  rightOnClick: React.MouseEventHandler<HTMLButtonElement>
} | {
  isSplit?: undefined | false
  splitIcon?: never;
  rightOnClick?: never;
}


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & RightInfo & {
    disabled?: boolean;
    loading?: boolean;
    label?: string;
    iconLeft?: typeof Bars2Icon | typeof HiBarsArrowDown;
    iconRight?: typeof Bars2Icon | typeof HiBarsArrowDown;
    badgeLabel?: string;
    emoji?: string;
  buttonType?:
    'default' |
    'dropdown' |
    'dropdown-split' |
    'sorting' |
    'icon' |
    'icon-dropdown' |
    'icon-dropdown-split' |
  'ellipsis';
  }



const Button = forwardRef<ElementRef<'button'>, ButtonProps>(({
  intent,
  category,
  size,
  outlineType,
  className,
  loading,
  label,
  iconLeft: IconLeft,
  iconRight: IconRight,
  badgeLabel,
  emoji,
  splitIcon: SplitIcon,
  rightOnClick,
  isSplit,
  buttonType,
  ...props }, ref) => {


  const badgeColor = (): BadgeProps['intent'] => {
    if (intent === 'confirm') {
      return 'info'
    } else if (intent === 'danger') {
      return 'danger'
    }
    return 'neutral-muted'
  }


  if (loading) {
    return <button disabled className={cn(loadingButton({ size, category, loading, className }))}>
      {loading && <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#DCDCDE" />
        <path d="M16 8C16 3.58172 12.4183 0 8 0V2C11.3137 2 14 4.68629 14 8H16Z" fill="#535158" />
      </svg>}
      Loading
    </button>
  }

  if (buttonType === 'ellipsis') {
    return <button
      className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))}
      {...props}>
      {<EllipsisHorizontalCircleIcon className="w-5 h-5" />}
    </button>
  }

  if (buttonType === 'icon') {
    return <button
      className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))}
      {...props}>
      {!!IconLeft && <IconLeft className="w-5 h-5" />}
      {!!IconRight && !IconLeft && <IconRight className="w-5 h-5" />}
    </button>
  }

  if (buttonType === 'dropdown') {
    return <button
      className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))}
      {...props}>
      {!!label && <div>{label}</div>}
      <ChevronDownIcon className="w-5 h-5" />
    </button>
  }

  if (buttonType === 'icon-dropdown') {
    return <button
      className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }))}
      {...props}>
      {!!IconLeft && <IconLeft className="w-5 h-5" />}
      {!!IconRight && !IconLeft && <IconRight className="w-5 h-5" />}
      <ChevronDownIcon className="w-5 h-5" />
    </button>
  }

  if (buttonType === 'icon-dropdown-split') {
    return (
      <div className={cn("flex", intent !== 'default' && 'gap-[3px]')}>
        <button
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-r-none'
          )}
          {...props}>
          {!!IconLeft && <IconLeft className="w-5 h-5" />}
        </button>

        <button
          ref={ref}
          onClick={rightOnClick}
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-l-none'
          )}>
          <ChevronDownIcon className={'w-5 h-5'} />
        </button>
      </div>)
  }

  if (buttonType === 'dropdown-split') {
    return (
      <div className={cn("flex", intent !== 'default' && 'gap-[3px]')}>
        <button
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-r-none'
          )}
          {...props}>
          {!!label && <div>{label}</div>}
        </button>

        <button
          ref={ref}
          onClick={rightOnClick}
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-l-none'
          )}>
          <ChevronDownIcon className={'w-5 h-5'} />
        </button>
      </div>)
  }

  if (buttonType === 'sorting') {
    return (
      <div className={cn("flex", intent !== 'default' && 'gap-[3px]')}>
        <button
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-r-none'
          )}
          {...props}>
          {!!label && <div>{label}</div>}
          <ChevronDownIcon className={'w-5 h-5'} />
        </button>

        <button
          ref={ref}
          onClick={rightOnClick}
          className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
            'rounded-l-none'
          )}>
          <BarsArrowDownIcon className={'w-5 h-5'} />
        </button>
      </div>)
  }


  return (
    <div className={cn("flex", intent !== 'default' && 'gap-[3px]')}>
      <button
        ref={ref}
        className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
          isSplit && 'rounded-r-none'
        )}
        {...props}>
        {!!emoji && <div>{`${nodeEmoji.get(pad(emoji, 1, ':'))}`}</div>}
        {!!IconLeft && <IconLeft className="w-5 h-5" />}
        {!!label && <div>{label}</div>}
        {!!badgeLabel && <Badge intent={badgeColor()} size={'MD'} className="text-center" label={badgeLabel} />}
        {!!IconLeft && <IconLeft className="w-5 h-5" />}
      </button>
      {!!isSplit && <button
        ref={ref}
        onClick={rightOnClick}
        className={cn(button({ className, disabled: props.disabled, intent, category, size, outlineType }),
          isSplit && 'rounded-l-none'
        )}>
        {!!SplitIcon && <SplitIcon className={'w-5 h-5'} />}
      </button>}
    </div>
  )
})

export default Button