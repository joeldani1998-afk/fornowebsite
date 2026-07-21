import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Private Dining', href: '#private-dining' },
  { label: 'Reserve', href: '#reservations' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 h-16 md:h-20 transition-all duration-500 ease-out',
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="#top"
            className="font-serif text-foreground text-lg tracking-[0.2em]"
          >
            EMBER &amp; STONE
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-label text-[11px] text-primary hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <a href="#reservations">Reserve a Table</a>
            </Button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-primary"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background flex flex-col md:hidden"
          >
            <div className="h-16 flex items-center justify-between px-6">
              <span className="font-serif text-foreground text-lg tracking-[0.2em]">
                EMBER &amp; STONE
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="text-primary"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="font-serif text-foreground text-[32px]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + NAV_LINKS.length * 0.08 }}
              >
                <Button variant="gold" onClick={() => setMobileOpen(false)} asChild>
                  <a href="#reservations">Reserve a Table</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
