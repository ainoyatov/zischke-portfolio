interface Props {
  close: () => void
}

export default function MenuOverlay({ close }: Props) {
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center">

      <button
        onClick={close}
        className="absolute top-8 right-8 text-3xl"
      >
        ✕
      </button>

      <nav className="text-center space-y-6 text-2xl tracking-widest">

        <a href="#">Sculpture</a>
        <a href="#">Design</a>
        <a href="#">Paintings</a>
        <a href="#">Exhibitions</a>
        <a href="#">About Jeff</a>
        <a href="#">Commissions</a>
        <a href="#">Contact</a>

      </nav>

    </div>
  )
}