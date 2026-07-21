import { cn } from '@/lib/utils'

export function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor?: string
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="nav-label text-[10px] text-primary block mb-2"
    >
      {children}
    </label>
  )
}

export function TextInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'flex h-11 w-full border-b border-primary/40 bg-white/[0.04] px-3 text-[15px] text-foreground font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors',
        className,
      )}
      {...props}
    />
  )
}
