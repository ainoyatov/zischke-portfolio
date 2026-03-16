import Link from "next/link"
import Image from "next/image"

interface Props {
  title: string
  image: string
  href: string
}

export default function HeroPanel({ title, image, href }: Props) {
  return (
    <Link
      href={href}
      className="
        group relative flex h-full items-center justify-center overflow-hidden
        transition-all duration-500 ease-out
        hover:-translate-y-6 hover:scale-[1.03] hover:shadow-2xl
        "
    >
        <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale brightness-75 transition duration-500 group-hover:grayscale-0 group-hover:brightness-100"
        />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <h2 className="relative z-10 text-3xl tracking-[0.35em] text-white md:text-5xl">
        {title}
      </h2>
    </Link>
  )
}