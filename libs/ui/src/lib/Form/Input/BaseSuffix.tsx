import { VariantProps, cva } from "class-variance-authority";
import { cn } from "libs/ui/src/utils/tailwindCn";
import { ComponentProps, FC } from "react";
import Button, { ButtonProps } from "../../Button/Button";

const baseSuffix = cva([
  'outline outline-1 outline-neutral-400 px-3 py-2 w-max',
  'rounded-[0px_4px_4px_0px]',

], {
  variants: {
    type: {
      text: 'text-neutral-900',
      'text-danger': ['outline-ui-red-400'],
      default: [],
      'button-confirm': [],
      'button-danger': [],
    },
  },
  defaultVariants: {
    type: 'default'
  }
})


/* eslint-disable-next-line */
export type BaseSuffixProps = VariantProps<typeof baseSuffix>
  & Pick<ButtonProps, 'onClick' | 'label' | 'disabled'>
{

}

const BaseSuffix: FC<BaseSuffixProps> = ({ type, label, disabled }) => {

  const buttonTypeMapper = (_type: typeof type): ComponentProps<typeof Button>['intent'] => {
    if (_type === 'button-danger') {
      return 'danger'
    }
    if (_type === 'button-confirm') {
      return 'confirm'
    }
  }

  return (
    <Button
      disabled={disabled}
      intent={buttonTypeMapper(type)}
      className={cn(baseSuffix({ type }))}
      label={label} />
  );
}

export default BaseSuffix;
