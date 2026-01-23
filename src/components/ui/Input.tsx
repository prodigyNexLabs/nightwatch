import type { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={cn(
      'h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-mintAccent focus:ring-2 focus:ring-mint/40',
      className,
    )}
    {...props}
  />
)

export default Input
