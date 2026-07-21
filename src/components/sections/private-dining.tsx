import { Wine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { Reveal } from '@/components/ui/reveal'

export function PrivateDining() {
  return (
    <section
      id="private-dining"
      className="relative min-h-[80vh] flex items-center overflow-hidden border-y border-border"
    >
      <div className="absolute inset-0">
        <ImagePlaceholder
          icon={Wine}
          caption="Private dining room, candlelit long table, crystal glassware"
          className="w-full h-full"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,9,5,0.92) 0%, rgba(13,9,5,0.75) 45%, transparent 100%)',
        }}
      />
      <div className="relative z-10 w-full px-6 md:px-16">
        <Reveal className="max-w-xl">
          <p className="nav-label text-[11px] text-primary mb-4">
            Private Dining at Ember &amp; Stone
          </p>
          <h2 className="font-serif font-light text-foreground text-4xl md:text-6xl mb-6">
            An Evening All Your Own
          </h2>
          <p className="text-muted-foreground text-[15px] font-light leading-[1.7] mb-8">
            Our private dining room accommodates up to 22 guests, with a dedicated
            sommelier, custom menu development, and a team committed to making
            your event unforgettable. Available for corporate dinners,
            celebrations, and intimate gatherings.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="#reservations">Inquire About Private Dining</a>
          </Button>
          <p className="nav-label text-[10px] text-muted-foreground mt-6">
            Capacity: 8–22 guests · Full AV available · Custom menus from $95pp
          </p>
        </Reveal>
      </div>
    </section>
  )
}
