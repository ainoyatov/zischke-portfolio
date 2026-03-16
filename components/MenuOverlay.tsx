interface Props {
  close: () => void
}

export default function MenuOverlay({ close }: Props) {
  const menuItems = [
    "Sculpture",
    "Design",
    "Paintings",
    "Exhibitions",
    "About Jeff",
    "Commissions",
    "Contact"
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">

      {/* Close button */}
      <button
        onClick={close}
        className="absolute right-8 top-8 text-3xl opacity-80 hover:opacity-100"
      >
        ✕
      </button>

      {/* Menu */}
      <nav className="flex flex-col items-center gap-8 text-xl tracking-[0.3em] md:text-2xl">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            {item}
          </a>
        ))}
      </nav>

    </div>
  )
}