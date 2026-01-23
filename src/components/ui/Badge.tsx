import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

const Badge = ({ className, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full bg-mint/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800',
      className,
    )}
    {...props}
  />
)

export default Badge
