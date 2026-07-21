import { motion, type Variants } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const embers = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: Math.round((i * 137.5) % 100),
  size: 2 + ((i * 7) % 5),
  duration: 8 + (i % 6) * 2,
  delay: i * 0.6,
}))

export function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Kitchen-glow background stand-in for looping video hero footage */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 65%, rgba(201,151,62,0.22) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 80% 30%, rgba(201,151,62,0.12) 0%, transparent 70%), linear-gradient(160deg, #1a1006 0%, #0d0905 55%, #0d0905 100%)',
        }}
      />

      {embers.map((ember) => (
        <motion.span
          key={ember.id}
          className="absolute z-0 rounded-full bg-primary/70"
          style={{
            left: `${ember.left}%`,
            bottom: '-10px',
            width: ember.size,
            height: ember.size,
            boxShadow: '0 0 6px rgba(201,151,62,0.8)',
          }}
          animate={{
            y: ['0vh', '-95vh'],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Top gradient fade */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,9,5,0.6) 0%, transparent 30%, transparent 60%, rgba(13,9,5,0.95) 100%)',
        }}
      />
      {/* Left-side text gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.85) 0%, rgba(13,9,5,0.4) 50%, transparent 100%)',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-12 md:bottom-16 left-6 md:left-16 z-20 max-w-2xl"
      >
        <motion.p
          variants={itemVariants}
          className="nav-label text-[11px] md:text-xs text-primary tracking-[0.3em] mb-4"
        >
          EST. 2019 — CHICAGO, IL
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-serif font-light text-foreground text-[52px] leading-[0.95] md:text-[96px] lg:text-[120px] mb-6"
        >
          Where Fire
          <br />
          <em className="italic">Meets Finesse</em>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-base md:text-lg max-w-md mb-10 font-light"
        >
          A steakhouse built on craft, fire, and a reverence for the ingredient.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="#reservations">Reserve Your Table</a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#menu">View the Menu</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="nav-label text-[10px] text-muted-foreground">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-primary" size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
