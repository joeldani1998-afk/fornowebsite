import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap nav-label text-[11px] tracking-[0.15em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gold: 'bg-primary text-primary-foreground hover:shadow-[0_0_24px_rgba(201,151,62,0.4)] hover:brightness-110',
        outline:
          'border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_rgba(201,151,62,0.3)]',
        ghost:
          'border border-foreground/40 text-foreground bg-transparent hover:border-foreground hover:bg-foreground/5',
      },
      size: {
        default: 'h-11 px-8 py-3',
        sm: 'h-9 px-5 py-2',
        lg: 'h-14 px-10 py-4',
      },
    },
    defaultVariants: {
      variant: 'gold',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
