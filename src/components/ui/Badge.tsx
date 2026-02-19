import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

const Badge = ({ className, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-pill border border-crz-outline/75 bg-crz-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-crz-softText',
      className,
    )}
    {...props}
  />
)

export default Badge
