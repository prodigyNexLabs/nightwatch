import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  wide?: boolean
}

const Container = ({ className, wide = false, ...props }: ContainerProps) => (
  <div
    className={cn(
      'mx-auto w-full px-4 xs:px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14',
      wide ? 'max-w-[var(--crz-layout-container-wide)]' : 'max-w-[var(--crz-layout-container-max)]',
      className,
    )}
    {...props}
  />
)

export default Container
