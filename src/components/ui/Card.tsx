import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLDivElement>

const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-3xl border border-white/50 bg-white/80 p-6 shadow-soft backdrop-blur',
      className,
    )}
    {...props}
  />
)

export default Card
