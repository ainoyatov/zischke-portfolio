'use client'

import Link from 'next/link'

interface Props {
  close: () => void
}

const menuItems = [
  { label: 'Sculpture', href: '/sculpture' },
  { label: 'Design', href: '/design' },
  { label: 'Paintings', href: '/paintings' },
  { label: 'Exhibitions', href: '/exhibitions' },
  { label: 'About Jeff', href: '/about-jeff' },
  { label: 'Commissions', href: '/commissions' },
  { label: 'Contact', href: '/contact' }
]

export default function MenuOverlay({ close }: Props) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black text-white">
      <button
        onClick={close}
        aria-label="Close menu"
        className="absolute right-8 top-8 text-3xl opacity-80 transition hover:opacity-100"
      >
        ✕
      </button>

      <nav className="flex flex-col items-center gap-8 text-xl tracking-[0.3em] md:text-2xl">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            className="transition-opacity duration-300 hover:opacity-60"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}