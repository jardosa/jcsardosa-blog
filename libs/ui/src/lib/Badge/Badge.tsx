import { VariantProps, cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react";
import { CalendarIcon } from '@heroicons/react/24/solid'
import { cn } from "../../utils/tailwindCn";

const badge = cva([
  'transition-all duration-200 rounded-xl flex items-center gap-1 flex-start text-neutral-700 bg-neutral-100 w-max',
  'active:ring-[3px] focus:ring-[3px] ring-ui-blue-500 ring-offset-2 active:outline-none cursor-pointer',
], {
  variants: {
    intent: {
      'neutral-muted': [
        'bg-neutral-50',
        'text-neutral-600',
        'hover:outline outline-1 outline-neutral-200',
        'active:text-neutral-800 active:bg-neutral-100'
      ],
      'neutral': [
        'bg-neutral-100',
        'text-neutral-700',
        'hover:outline outline-1 outline-neutral-200 hover:text-neutral-800',
        'focus:text-neutral-800',
        'active:text-neutral-900 active:bg-neutral-200'
      ],
      'info': [
        'bg-ui-blue-100',
        'text-ui-blue-700',
        'hover:outline outline-1 outline-ui-blue-200 hover:text-ui-blue-800',
        'focus:text-ui-blue-800',
        'active:text-ui-blue-900 active:bg-ui-blue-200'
      ],
      'success': [
        'bg-ui-green-100',
        'text-ui-green-700',
        'hover:outline outline-1 outline-ui-green-200 hover:text-ui-green-800',
        'focus:text-ui-green-800',
        'active:text-ui-green-900 active:bg-ui-green-200'
      ],
      'warning': [
        'bg-ui-orange-100',
        'text-ui-orange-700',
        'hover:outline outline-1 outline-ui-orange-200 hover:text-ui-orange-800',
        'focus:text-ui-orange-800',
        'active:text-ui-orange-900 active:bg-ui-orange-200'
      ],
      'danger': [
        'bg-ui-red-100',
        'text-ui-red-700',
        'hover:outline outline-1 outline-ui-red-200 hover:text-ui-red-800',
        'focus:text-ui-red-800',
        'active:text-ui-red-900 active:bg-ui-red-200'
      ],
      'tier': [
        'bg-ui-purple-100',
        'text-ui-purple-700',
        'hover:outline outline-1 outline-ui-purple-200 hover:text-ui-purple-800',
        'focus:text-ui-purple-800',
        'active:text-ui-purple-900 active:bg-ui-purple-200'
      ],
    },
    size: {
      'SM': ['pr-2 text-xs rounded-lg'],
      'MD': ['p-1 pr-2 text-xs rounded-xl'],
      'LG': ['p-2 text-sm rounded-2xl'],
    }
  },
  defaultVariants: {
    size: 'SM',
    intent: 'neutral-muted'
  }
})

export interface BadgeProps
  extends VariantProps<typeof badge> {
  icon: typeof CalendarIcon
  label?: string | React.ReactNode
}
const Badge: React.FC<BadgeProps> = forwardRef<ElementRef<'div'>, BadgeProps>(({ intent, icon: Icon, size, label, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(badge({ intent, size }))} {...props}>
      <Icon className="w-4 h-4" />
      {label}
    </div>
  );
})

export default Badge;
