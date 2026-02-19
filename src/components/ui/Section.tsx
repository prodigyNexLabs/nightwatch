import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import Container from '../layout/Container'

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  wide?: boolean
  contentClassName?: string
}

const Section = ({
  className,
  contentClassName,
  eyebrow,
  title,
  description,
  align = 'left',
  wide = false,
  children,
  ...props
}: SectionProps) => {
  const isCentered = align === 'center'

  return (
    <section className={cn('py-14 sm:py-16 lg:py-20', className)} {...props}>
      <Container wide={wide}>
        {(eyebrow || title || description) ? (
          <header className={cn('mb-8 space-y-4', isCentered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl')}>
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crz-softText">{eyebrow}</p> : null}
            {title ? <div className="text-crz-text">{title}</div> : null}
            {description ? (
              <p className={cn('text-base leading-8 text-crz-softText', isCentered ? 'mx-auto max-w-3xl' : 'max-w-3xl')}>
                {description}
              </p>
            ) : null}
          </header>
        ) : null}

        <div className={contentClassName}>{children}</div>
      </Container>
    </section>
  )
}

export default Section
