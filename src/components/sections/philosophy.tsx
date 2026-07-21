import { Flame } from 'lucide-react'
import { GoldUnderlineHeading } from '@/components/ui/gold-underline-heading'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { Reveal } from '@/components/ui/reveal'

export function Philosophy() {
  return (
    <section id="philosophy" className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-background px-6 py-16 md:px-16 md:py-24 flex items-center">
        <Reveal className="max-w-lg">
          <GoldUnderlineHeading>Our Philosophy</GoldUnderlineHeading>
          <div className="mt-8 space-y-6 text-muted-foreground text-[15px] font-light leading-[1.7]">
            <p>
              Every dish that leaves our kitchen begins with a single question: does
              this do justice to what the land provided? We source exclusively from
              family-owned ranches, farms, and fisheries — partners we visit, not
              vendors we email.
            </p>
            <p>
              Our wood-fired hearth burns white oak and cherry, chosen for the smoke
              profile they lend to each cut. Every dish is a conversation between
              heat, time, and restraint.
            </p>
            <p>
              We don&apos;t over-garnish. We don&apos;t over-explain. We trust the
              ingredient — and we trust you.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="h-64 md:h-auto">
        <ImagePlaceholder
          icon={Flame}
          caption="Aged cast iron skillet, dry-aged ribeye searing, smoke rising"
          className="w-full h-full"
        />
      </div>
    </section>
  )
}
