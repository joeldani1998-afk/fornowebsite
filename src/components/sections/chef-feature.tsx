import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ChefHat } from 'lucide-react'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { Reveal } from '@/components/ui/reveal'

export function ChefFeature() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[calc(100%+60px)]">
        <ImagePlaceholder
          icon={ChefHat}
          caption="Executive chef portrait, professional kitchen, amber lighting"
          className="w-full h-full"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)',
        }}
      />
      <Reveal className="absolute bottom-10 left-6 md:bottom-16 md:left-16 z-10 max-w-lg">
        <p className="nav-label text-[11px] text-primary mb-3">EXECUTIVE CHEF</p>
        <h2 className="font-serif font-light text-foreground text-4xl md:text-6xl mb-4">
          Marcus DeLeon
        </h2>
        <p className="text-muted-foreground text-[15px] font-light leading-[1.7] mb-4">
          Chef Marcus has spent two decades in Michelin-starred kitchens across
          Paris, Copenhagen, and New York before bringing his fire-forward
          philosophy to Chicago. At Ember &amp; Stone, he leads a kitchen that
          believes cooking is an act of devotion — not decoration.
        </p>
        <p className="font-serif italic text-foreground text-lg">
          &ldquo;I cook the way I want to eat — honestly, without apology.&rdquo;
        </p>
      </Reveal>
    </section>
  )
}
