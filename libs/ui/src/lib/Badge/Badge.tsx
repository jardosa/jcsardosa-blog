import { VariantProps, cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react";
import { cn } from "../Button/Button";

const badge = cva(['transition-all rounded-xl flex items-center gap-1 flex-start text-neutral-700 bg-neutral-100 w-max'], {
  variants: {
    size: {
      'SM': ['pr-2 text-xs rounded-lg'],
      'MD': ['p-1 pr-2 text-xs rounded-xl'],
      'LG': ['p-2 text-sm rounded-2xl'],
    }
  },
  defaultVariants: {
    size: 'SM'
  }
})

export interface BadgeProps
  extends VariantProps<typeof badge> {
  icon?: React.ReactNode
  label?: string | React.ReactNode
}
const Badge: React.FC<BadgeProps> = forwardRef<ElementRef<'div'>, BadgeProps>(({ icon, size, label, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(badge({ size }))} {...props}>
      {icon}
      {label}
    </div>
  );
})

export default Badge;
