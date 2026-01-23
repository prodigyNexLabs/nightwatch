import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement>

const Container = ({ className, ...props }: ContainerProps) => (
  <div className={cn('mx-auto w-full max-w-6xl px-6', className)} {...props} />
)

export default Container
