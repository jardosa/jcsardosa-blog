import { ElementRef, forwardRef } from "react";
import BaseInputChild, { BaseInputChildProps } from "./BaseInputChild";

export type InputProps = BaseInputChildProps & {}

const InputText = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  return (
    <BaseInputChild {...props} ref={ref} />
  );
})

export default InputText;
