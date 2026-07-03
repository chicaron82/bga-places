import { BadgeCheck } from 'lucide-react'
import { clsx } from 'clsx'

// The seal. The food-world answer to DiZee's DZA — Brown Guy Approved.
// Only renders for the top verdict; everything else wears a plain word-label,
// never a number (that's the point).
export function BGAStamp({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide',
        'bg-stamp-soft text-stamp ring-1 ring-stamp/30',
        size === 'md' ? 'px-3 py-1 text-sm' : 'px-2 py-0.5 text-xs',
      )}
      title="Brown Guy Approved"
    >
      <BadgeCheck className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} strokeWidth={2.5} />
      BGA
    </span>
  )
}
