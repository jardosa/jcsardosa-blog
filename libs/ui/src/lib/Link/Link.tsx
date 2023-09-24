import { cva, VariantProps } from 'class-variance-authority';
import NextLink from 'next/link'
import { ElementRef, forwardRef } from 'react';
import { cn } from '../Button/Button';

const link = cva([
  'transition-all ring-offset-1',
  'text-ui-blue-500 text-sm leading-4 hover:text-ui-blue-700 focus:text-ui-blue-500',
  'focus:px-1 focus:ring-[3px] focus:ring-ui-blue-500',
  'active:px-1 active:ring-[3px] active:ring-ui-blue-500 active:text-ui-blue-700',
])

export type LinkProps = React.ComponentProps<typeof NextLink>

const Link = forwardRef<ElementRef<'a'>, LinkProps>(({ className, children, ...props }, ref) => {
  return (
    <NextLink className={cn(link({ className }))} ref={ref} {...props}>
      {children}
    </NextLink>
  )
});


export default Link;
