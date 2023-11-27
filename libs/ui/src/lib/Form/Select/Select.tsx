import { ComponentProps, ElementRef, FC, forwardRef } from "react";
import BaseInputChild, { BaseInputChildProps } from "../Input/BaseInputChild";
import AsyncSelect from 'react-select/async';
import { ControlProps, Props } from 'react-select';
import { XCircleIcon } from "@heroicons/react/20/solid";
import type { } from 'react-select/base';

declare module 'react-select/base' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > extends BaseInputChildProps {

  }
}


interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <AsyncSelect  {...props} theme={(theme) => ({ ...theme, borderRadius: 0 })} />
  );
}

const Control: FC<ControlProps> = ({ clearValue, innerProps, innerRef, children, selectProps, setValue }) => {

  const { value } = selectProps
  const addon: BaseInputChildProps['addon'] = {
    icon: XCircleIcon,
    onClick: clearValue
  }
  console.log({ value })
  return <div ref={innerRef}>
    <BaseInputChild onChange={(e) => setValue(e.target.value, 'select-option')} label={selectProps.label} addon={addon} />
    {children}
  </div>

}

const Select = forwardRef<ElementRef<'select'>, Props & ComponentProps<typeof AsyncSelect>>((props, ref) => {
  return (
    <CustomSelect {...props} components={{
      Control,
    }} />
  );
})

export default Select;
