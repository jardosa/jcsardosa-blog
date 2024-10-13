import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/tailwindCn";
import { FC } from "react";
import Button, { ButtonProps } from "../../Button/Button";

const basePrefix = cva([
  'outline outline-1 px-3 py-2 w-max',
  'rounded-[4px_0px_0px_4px]',
  'outline-neutral-400',
  'bg-neutral-10',
  'disabled:outline-neutral-100 text-neutral-500'
], {
  variants: {
    type: {
      text: 'text-neutral-900',
      'text-danger': ['outline-ui-red-400'],
      default: [],
      swatch: ['bg-ui-purple-500 px-0 py-0 w-8 h-8']
    },
  },
  defaultVariants: {
    type: 'default'
  }
})


/* eslint-disable-next-line */
export type BasePrefixProps = VariantProps<typeof basePrefix>
  & Pick<ButtonProps, 'onClick' | 'label' | 'disabled'>
{

}

const BasePrefix: FC<BasePrefixProps> = ({ type, label, disabled }) => {
  return (
    <Button
      disabled={disabled}
      category={'secondary'}
      className={cn(basePrefix({ type }))}
      {...type !== 'swatch' && { label }}
    />
  );
}

export default BasePrefix;
