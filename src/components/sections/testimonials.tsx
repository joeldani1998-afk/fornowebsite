import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GoldUnderlineHeading } from '@/components/ui/gold-underline-heading'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = testimonials[index]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-[640px] mx-auto text-center">
        <div className="mb-12 flex justify-center">
          <GoldUnderlineHeading>What Our Guests Say</GoldUnderlineHeading>
        </div>

        <div className="min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-serif italic text-foreground text-[22px] md:text-[28px] leading-snug mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="nav-label text-[11px] text-primary">
                {current.attribution}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.attribution}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'w-2 h-2 rounded-full transition-colors duration-300',
                i === index ? 'bg-primary' : 'bg-border',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
