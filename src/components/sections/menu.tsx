import { useRef, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { GoldUnderlineHeading } from '@/components/ui/gold-underline-heading'
import { menu } from '@/data/menu'
import { cn } from '@/lib/utils'

function MenuGrid({ categoryId }: { categoryId: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const category = menu.find((c) => c.id === categoryId)!

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border"
    >
      {category.items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 border-b border-border hover:-translate-y-0.5 transition-transform duration-300 cursor-default bg-background"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-serif text-[20px] text-foreground">
                {item.name}
              </h3>
              <p className="mt-2 text-[14px] text-muted-foreground font-light">
                {item.description}
              </p>
            </div>
            <span className="font-serif italic text-primary text-lg whitespace-nowrap">
              {item.price}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function Menu() {
  const [tab, setTab] = useState(menu[0].id)

  return (
    <section id="menu" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <GoldUnderlineHeading>The Menu</GoldUnderlineHeading>
        </div>

        <Tabs.Root value={tab} onValueChange={setTab}>
          <Tabs.List className="flex gap-8 overflow-x-auto mb-12 border-b border-border pb-4 -mx-1 px-1">
            {menu.map((category) => (
              <Tabs.Trigger
                key={category.id}
                value={category.id}
                className={cn(
                  'nav-label text-[11px] whitespace-nowrap pb-1 border-b transition-colors duration-200',
                  tab === category.id
                    ? 'text-primary border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground',
                )}
              >
                {category.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Tabs.Content value={tab} forceMount>
                <MenuGrid categoryId={tab} />
              </Tabs.Content>
            </motion.div>
          </AnimatePresence>
        </Tabs.Root>
      </div>
    </section>
  )
}
