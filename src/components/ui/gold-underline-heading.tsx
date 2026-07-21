import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

interface GoldUnderlineHeadingProps {
  children: React.ReactNode
  className?: string
  as?: 'h2' | 'h3'
}

export function GoldUnderlineHeading({
  children,
  className,
  as = 'h2',
}: GoldUnderlineHeadingProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const Heading = as

  return (
    <div ref={ref} className="relative inline-block">
      <Heading
        className={cn(
          'font-serif font-light tracking-wide text-4xl md:text-6xl text-foreground',
          className,
        )}
      >
        {children}
      </Heading>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="h-px bg-primary mt-2"
        style={{ originX: 0 }}
      />
    </div>
  )
}
