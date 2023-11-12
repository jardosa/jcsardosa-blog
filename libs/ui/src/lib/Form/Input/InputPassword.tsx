import { ElementRef, forwardRef, useState } from "react";
import BaseInputChild, { BaseInputChildProps } from "./BaseInputChild";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

export type InputPasswordProps = BaseInputChildProps & {}

const InputPasswordText = forwardRef<ElementRef<'input'>, InputPasswordProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  const addon: InputPasswordProps['addon'] = {
    icon: showPassword ? EyeIcon : EyeSlashIcon,
    onClick() {
      setShowPassword(prevVal => !prevVal)
    }
  }

  return (
    <BaseInputChild type={showPassword ? 'text' : 'password'} addon={addon} {...props} ref={ref} />
  );
})

export default InputPasswordText;
