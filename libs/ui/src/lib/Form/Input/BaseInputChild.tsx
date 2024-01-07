import { VariantProps, cva } from "class-variance-authority";
import { cn } from "libs/ui/src/utils/tailwindCn";
import { ElementRef, forwardRef } from "react";
import BasePrefix, { BasePrefixProps } from "./BasePrefix";
import BaseSuffix, { BaseSuffixProps } from "./BaseSuffix";
import { Bars2Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Button from "../../Button/Button";
import { HiBarsArrowDown } from "react-icons/hi2";


const baseInputChild = cva(['py-2 px-3',
  'transition-all',
  'outline outline-1 outline-neutral-400',
  'rounded-[4px]',
  'text-sm',
  'placeholder:neutral-400',
  'focus:ring-[3px] focus:ring-ui-blue-500',
  'focus:ring-offset-2',
  'disabled:outline-neutral-100',
  'disabled:bg-neutral-10'
], {
  variants: {
    isSearch: {
      true: ['pl-8'],
      false: []
    },
    hasAddon: {
      true: ['pr-8'],
      false: []
    },
    error: {
      true: ['outline-red-500'],
      false: []
    },
    size: {
      xs: ['max-w-[80px]'],
      sm: ['max-w-[160px]'],
      md: ['max-w-[240px]'],
      lg: ['max-w-[320px]'],
      xl: ['max-w-[560px]'],
      full: ['max-w-none'],
    }
  },
  defaultVariants: {
    size: 'md',
    error: false,
    isSearch: false,
  }
})

/* eslint-disable-next-line */
export type BaseInputChildProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>
  & Omit<VariantProps<typeof baseInputChild>, 'error'>
  & {
  label: string;
  prefix?: BasePrefixProps;
  suffix?: BaseSuffixProps;
  error?: string;
  success?: string;
  validationText?: string;
  addon?: {
    icon: typeof Bars2Icon | typeof HiBarsArrowDown,
    onClick: () => void
  };
  }

const BaseInputChild = forwardRef<ElementRef<'input'>, BaseInputChildProps>(({ className,
  name,
  label,
  prefix,
  suffix,
  isSearch,
  error,
  size,
  validationText,
  value,
  addon,
  success, ...props }, ref) => {

  return (
    <div>
      <label className="mb-1 text-sm font-bold leading-4" htmlFor={name}>{label}</label>
      <div className="flex">
        {prefix && <BasePrefix type={prefix.type} label={prefix.label} onClick={prefix.onClick} />}

        <div className="relative flex items-center flex-1">
          <input
            ref={ref}
            value={value}
            className={cn(baseInputChild({ className, isSearch, size, hasAddon: !!addon }),
              prefix && 'rounded-l-none',
              suffix && 'rounded-r-none',
              'w-full'
            )} {...props}>
          </input>
          {isSearch && <MagnifyingGlassIcon className="absolute w-5 h-5 left-2 text-neutral-500" />}
          {addon && <Button
            category={'tertiary'}
            onClick={() => addon.onClick()}
            buttonType="icon"
            iconLeft={addon?.icon}
            role="button"
            className="absolute right-0 text-neutral-500" />}
        </div>

        {suffix && <BaseSuffix type={suffix.type} label={suffix.label} onClick={suffix.onClick} />}
      </div>
      <div className={cn(
        'mt-2',
        'leading-4',
        'text-neutral-500',
        error && 'text-ui-red-500',
        success && 'text-ui-green-500',
      )}>
        {validationText}
      </div>
    </div>
  )
})

export default BaseInputChild;
