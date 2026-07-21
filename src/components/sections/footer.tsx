import { FacebookIcon, InstagramIcon } from '@/components/ui/social-icons'

const NAV_LINKS = ['Menu', 'Philosophy', 'Private Dining', 'Gift Cards', 'Careers']

export function Footer() {
  return (
    <footer
      className="border-t border-primary"
      style={{ background: 'hsl(24, 32%, 3%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-foreground text-lg tracking-[0.2em] mb-3">
            EMBER &amp; STONE
          </p>
          <p className="font-serif italic text-muted-foreground text-sm mb-1">
            Craft. Fire. Finesse.
          </p>
          <p className="text-muted-foreground text-sm font-light">Chicago, IL</p>
        </div>

        <div>
          <p className="nav-label text-[11px] text-primary mb-4">Navigation</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="nav-label text-[11px] text-primary mb-4">Hours</p>
          <ul className="space-y-2 text-muted-foreground text-sm font-light">
            <li>Mon–Thu 5pm–10pm</li>
            <li>Fri–Sat 5pm–11pm</li>
            <li>Sun 5pm–9pm</li>
            <li>Bar opens at 4:30pm daily</li>
          </ul>
        </div>

        <div>
          <p className="nav-label text-[11px] text-primary mb-4">Visit</p>
          <address className="not-italic text-muted-foreground text-sm font-light space-y-2">
            <p>742 W Randolph Street</p>
            <p>Chicago, IL 60661</p>
            <p>+1 312 555 0182</p>
            <p>info@emberandstone.com</p>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-primary hover:text-foreground transition-colors"
            >
              <InstagramIcon width={18} height={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-primary hover:text-foreground transition-colors"
            >
              <FacebookIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between gap-2 text-muted-foreground text-xs font-light">
          <span>© 2024 Ember &amp; Stone. All rights reserved.</span>
          <span>Crafted with care in Chicago</span>
        </div>
      </div>
    </footer>
  )
}
