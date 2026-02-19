import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-semibold tracking-wide transition-[background-color,transform,box-shadow,border-color,color] duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crz-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-crz-surface disabled:pointer-events-none disabled:opacity-60'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-crz-primary text-white shadow-card hover:-translate-y-0.5 hover:bg-crz-primaryHover active:translate-y-0 active:shadow-soft',
  secondary:
    'bg-crz-secondary text-white shadow-card hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 active:shadow-soft',
  ghost: 'border border-crz-outline/70 bg-crz-surface text-crz-text hover:bg-crz-surfaceAlt',
  danger:
    'bg-crz-error text-white shadow-card hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 active:shadow-soft',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
}

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    {...props}
  />
)

export default Button
