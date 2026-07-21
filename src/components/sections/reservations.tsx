import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FieldLabel, TextInput } from '@/components/ui/form-field'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

const TIME_OPTIONS = [
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
]

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8+']

export function Reservations() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="reservations"
      className="relative py-24 px-6 bg-background overflow-hidden"
    >
      <div
        className="grain-overlay !fixed !z-0 !opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[600px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="font-serif font-light text-foreground text-4xl md:text-6xl mb-4">
            Reserve Your Table
          </h2>
          <p className="text-muted-foreground font-light">
            We look forward to welcoming you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative p-px"
            style={{
              background:
                'linear-gradient(135deg, rgba(201,151,62,0.5), rgba(201,151,62,0.05) 50%, rgba(201,151,62,0.2))',
            }}
          >
            <div
              className="p-8 md:p-12"
              style={{
                background: 'rgba(13,9,5,0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <p className="font-serif italic text-foreground text-2xl mb-3">
                    Thank you.
                  </p>
                  <p className="text-muted-foreground font-light text-sm">
                    Your request has been received. We&apos;ll confirm via phone
                    and email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <FieldLabel htmlFor="res-date">Date</FieldLabel>
                    <TextInput id="res-date" type="date" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <FieldLabel htmlFor="res-time">Time</FieldLabel>
                      <Select required name="time">
                        <SelectTrigger id="res-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_OPTIONS.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <FieldLabel htmlFor="res-party">Party Size</FieldLabel>
                      <Select required name="party">
                        <SelectTrigger id="res-party">
                          <SelectValue placeholder="Guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {PARTY_SIZES.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <FieldLabel htmlFor="res-name">Full Name</FieldLabel>
                    <TextInput id="res-name" type="text" required placeholder="Jane Doe" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <FieldLabel htmlFor="res-phone">Phone Number</FieldLabel>
                      <TextInput
                        id="res-phone"
                        type="tel"
                        required
                        placeholder="(312) 555-0182"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="res-email">Email Address</FieldLabel>
                      <TextInput
                        id="res-email"
                        type="email"
                        required
                        placeholder="jane@email.com"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Confirm Reservation
                  </Button>

                  <p className="text-center text-muted-foreground text-xs font-light">
                    Reservations confirmed via email and phone. Walk-ins always
                    welcome at the bar.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
