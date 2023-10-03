import { cva, VariantProps } from "class-variance-authority";
import { Image } from "next/dist/client/image-component";
import { cn } from "../../utils/tailwindCn";
import { WrenchIcon } from "@heroicons/react/20/solid";

const icon = cva(['text-neutral-500'], {
  variants: {
    size: {
      'xs': ['w-2 h-2 text-xs'],
      'sm': ['w-4 h-4 text-xs'],
      'md': ['w-6 h-6 text-sm'],
      'lg': ['w-8 h-8 text-[19px]'],
      'xl': ['w-10 h-10 text-[28px]'],
      'xxl': ['w-16 h-16 text-[45px]'],
    },
  }
})

const avatar = cva(['relative overflow-hidden'], {
  variants: {
    size: {
      'xs': ['w-4 h-4 text-xs'],
      'sm': ['w-6 h-6 text-xs'],
      'md': ['w-8 h-8 text-sm'],
      'lg': ['w-12 h-12 text-[19px]'],
      'xl': ['w-16 h-16 text-[28px]'],
      'xxl': ['w-24 h-24 text-[45px]'],
    },
    variant: {
      user: ['rounded-full'],
      project: ['rounded-[4px]'],
      group: ['rounded-[4px]'],
      identicon: ['rounded-[4px] grid place-items-center bg-ui-blue-50'],
      admin: ['rounded-full grid place-items-center border border-[#1F1E240F]'],
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'user'
  }
})

export interface AvatarProps extends VariantProps<typeof avatar> {
  variant: 'user' | 'project' | 'group' | 'identicon' | 'admin'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  initial?: string
  src?: string
}

const Avatar: React.FC<AvatarProps> = ({ variant, size, src, initial }) => {

  const componentToRender = () => {
    if (variant === 'admin') {
      return <WrenchIcon className={icon({ size })} />
    } else if (variant === 'identicon' && initial) {
      return <div>
        {initial}
      </div>
    } else if (src) {
      return <img className='' src={src} alt='avatar' />
    } else {
      return null
    }
  }

  return (
    <div className={cn(avatar({ size, variant }))} >
      {componentToRender()}
    </div>
  );
}

export default Avatar;
