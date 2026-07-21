import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  icon: LucideIcon
  caption: string
  className?: string
}

/**
 * Stand-in for editorial food/portrait photography. Swap the wrapping
 * element for a real <img> once photography assets are available —
 * the caption documents the shot each placeholder represents.
 */
export function ImagePlaceholder({ icon: Icon, caption, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden bg-ember-dark flex items-center justify-center',
        className,
      )}
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,151,62,0.16) 0%, transparent 70%), linear-gradient(160deg, #171009 0%, #0d0905 60%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <Icon
        className="relative z-10 text-primary/40"
        strokeWidth={0.75}
        size={72}
      />
      <span className="absolute bottom-3 left-3 right-3 nav-label text-[9px] text-muted-foreground/70 z-10 truncate">
        {caption}
      </span>
    </div>
  )
}
