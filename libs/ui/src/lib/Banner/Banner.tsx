import { VariantProps, cva } from "class-variance-authority";
import React, { FC } from "react";
import { cn } from "../../utils/tailwindCn";
import Button from "../Button/Button";
import { XMarkIcon } from "@heroicons/react/20/solid";

const banner = cva(['py-6 pl-6 pr-12 flex gap-6 relative rounded'], {
  variants: {
    variant: {
      intro: 'bg-blue-50 border border-ui-blue-300',
      promo: 'bg-white border border-neutral-100'
    },
  }
})

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof banner> {
  imgSrc?: string
  header?: string
  text?: string
  actionLabel: string
}

const Banner: FC<BannerProps> = ({ variant, className, imgSrc, header, text, actionLabel, ...props }) => {
  return (
    <div className={cn(banner({ variant, className }))} {...props}>
      {!!imgSrc && <img className="w-[144px] h-[144px] object-fit" src={imgSrc} />}
      <div className="space-y-2">
        <div className="text-xl font-semibold leading-[125%] tracking-[-0.2px]">{header}</div>
        <div className="text-sm leading-5">{text}</div>
        <Button className="mt-2" size={'MD'} category={'primary'} label={actionLabel} buttonType="default" intent={'confirm'} />
      </div>
      <Button size={'SM'} category={'tertiary'} buttonType="icon" iconLeft={XMarkIcon} className="absolute top-2 right-2" />
    </div>
  );
}

export default Banner;
