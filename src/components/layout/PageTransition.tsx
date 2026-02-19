import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { themeTokens } from '../../theme/themeTokens'

type PageTransitionProps = {
  children: ReactNode
}

const toSeconds = (duration: string) => Number(duration.replace('ms', '')) / 1000

const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{
      duration: toSeconds(themeTokens.motion.normal),
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {children}
  </motion.div>
)

export default PageTransition
