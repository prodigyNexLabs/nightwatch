import type { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={cn(
      'h-11 w-full rounded-md border border-crz-outline/80 bg-crz-surface px-4 text-sm text-crz-text shadow-sm transition-[border-color,box-shadow] duration-fast ease-standard placeholder:text-crz-mutedText focus:border-crz-primary focus:outline-none focus:ring-2 focus:ring-crz-primary/20',
      className,
    )}
    {...props}
  />
)

export default Input
