import Image from 'next/image'
import Link from 'next/link'

const paintingWorks = [
  {
    title: 'Simplon Pass',
    material: 'Oil on canvas · 1911',
    size: 'Museum collection',
    image: '/images/paintings/painting-1.png',
  },
  {
    title: 'Venetian Interior',
    material: 'Oil on canvas · c. 1880–1882',
    size: 'Museum collection',
    image: '/images/paintings/painting-2.png',
  },
  {
    title: 'The Cashmere Shawl',
    material: 'Oil on canvas · c. 1911',
    size: 'Museum collection',
    image: '/images/paintings/painting-3.png',
  },
  {
    title: 'Nonchaloir',
    material: 'Oil on canvas · 1911',
    size: 'Museum collection',
    image: '/images/paintings/painting-4.png',
  },
]

export default function PaintingsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#DED8CF]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/paintings/painting-hero.png"
          alt="El Jaleo by John Singer Sargent"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#0B0B0B]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-[#B49A75]">
            Gallery III
          </p>

          <h1 className="text-6xl font-light uppercase tracking-[0.18em] md:text-8xl lg:text-9xl">
            Paintings
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#DED8CF]/75 md:text-xl">
            A curated room of painted light, atmosphere, and movement through
            the work of John Singer Sargent.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="relative min-h-[680px] overflow-hidden">
          <Image
            src="/images/paintings/painting-featured.png"
            alt="Carnation, Lily, Lily, Rose by John Singer Sargent"
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        <div className="border-l border-[#B49A75]/40 pl-8">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#B49A75]">
            Featured Work
          </p>

          <h2 className="text-4xl font-light uppercase tracking-[0.12em] md:text-6xl">
            Carnation
          </h2>

          <p className="mt-6 text-[#DED8CF]/60">
            Oil on canvas · 1885–1886 · Tate collection
          </p>

          <p className="mt-8 text-lg leading-8 text-[#DED8CF]/75 md:max-w-md">
            A twilight scene suspended between portraiture and atmosphere.
            Lantern light, white fabric, and garden color gather into one of
            Sargent’s most luminous compositions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 md:pt-24">
            <h2 className="text-5xl font-light uppercase tracking-[0.14em]">
              Surface
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#DED8CF]/70">
              Sargent’s paintings move between precision and looseness. Up
              close, fabric, skin, shadow, and atmosphere dissolve into
              confident strokes of color.
            </p>
          </div>

          <div className="relative min-h-[460px] overflow-hidden md:col-span-2">
            <Image
              src="/images/paintings/painting-detail.png"
              alt="Painted surface detail from Lady Agnew of Lochnaw"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="mb-12 text-sm uppercase tracking-[0.5em] text-[#B49A75]">
          Selected Works
        </p>

        <div className="grid gap-16 md:grid-cols-12">
          {paintingWorks.map((work, index) => (
            <article
              key={work.title}
              className={`group ${
                index === 0
                  ? 'md:col-span-12'
                  : index === 1
                    ? 'md:col-span-5 md:pt-24'
                    : index === 2
                      ? 'md:col-span-7'
                      : 'md:col-span-10 md:col-start-2'
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#1A1A1A] ${
                  index === 0
                    ? 'min-h-[720px]'
                    : index === 3
                      ? 'min-h-[640px]'
                      : 'min-h-[520px]'
                }`}
              >
                <Image
                  src={work.image}
                  alt={`${work.title} by John Singer Sargent`}
                  fill
                  className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />

                <div className="absolute inset-0 bg-black/20 transition duration-700 group-hover:bg-black/5" />
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5">
                <h3 className="text-2xl font-light uppercase tracking-[0.12em]">
                  {work.title}
                </h3>

                <p className="text-sm text-[#DED8CF]/55">
                  {work.material} · {work.size}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex min-h-[70vh] items-center justify-center px-6 py-32">
        <blockquote className="max-w-5xl text-center text-5xl font-light leading-tight tracking-[0.08em] text-[#DED8CF] md:text-7xl">
          “Color is an inborn gift, but appreciation of value is merely training
          of the eye.”
        </blockquote>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.5em] text-[#DED8CF]/50">
            Continue the exhibition
          </p>

          <Link
            href="/about"
            className="group text-5xl font-light uppercase tracking-[0.14em] text-[#DED8CF] transition hover:text-[#B49A75] md:text-7xl"
          >
            About
            <span className="ml-6 inline-block transition group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}