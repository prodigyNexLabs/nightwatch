import type { ReactNode } from 'react'
import PageTransition from '../../components/layout/PageTransition'
import Badge from '../../components/ui/Badge'
import Section from '../../components/ui/Section'

type LegalPageShellProps = {
  badge?: string
  title: string
  effectiveDate: string
  children: ReactNode
}

/**
 * Shared wrapper for all legal document pages.
 * Provides consistent heading, badge, and article styling.
 */
const LegalPageShell = ({
  badge = 'Legal',
  title,
  effectiveDate,
  children,
}: LegalPageShellProps) => (
  <PageTransition>
    <Section
      contentClassName="mx-auto max-w-4xl"
      wide
    >
      <div className="mb-8 space-y-4">
        <Badge className="w-fit">{badge}</Badge>
        <h1 className="font-display text-3xl font-bold text-[#1B1B1B] sm:text-4xl">{title}</h1>
        <p className="text-sm text-[#6F6F6F]">
          Effective date: {effectiveDate} · Crozroad
        </p>
      </div>

      <article className="legal-article surface-panel rounded-2xl p-6 text-[15px] leading-8 text-[#6F6F6F] sm:p-10">
        {children}
      </article>
    </Section>
  </PageTransition>
)

export default LegalPageShell
