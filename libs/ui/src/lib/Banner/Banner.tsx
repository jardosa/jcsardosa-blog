import { VariantProps, cva } from "class-variance-authority";
import React, { FC } from "react";
import { cn } from "../../utils/tailwindCn";
import Button from "../Button/Button";

const banner = cva(['py-6 pl-6 pr-12 flex gap-6 relative '], {
  variants: {
    variant: {
      intro: 'bg-blue-300',
      promo: 'bg-white'
    },
  }
})

/* eslint-disable-next-line */
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof banner> {
  imgSrc?: string
}

const Banner: FC<BannerProps> = ({ variant, className, imgSrc, ...props }) => {
  return (
    <div className={cn(banner({ variant, className }))} {...props}>
      {!!imgSrc && <img className="max-w-[144px] max-h-[144px] object-fit" src={imgSrc} />}
      <Button className="absolute top-2 right-2">a</Button>
    </div>
  );
}

export default Banner;
