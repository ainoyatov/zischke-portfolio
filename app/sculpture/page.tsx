import Image from 'next/image'
import Link from 'next/link'

const sculptureWorks = [
  {
    title: 'Silent Form',
    material: 'Bronze · 2024',
    size: '42 × 28 × 18 in',
    image: '/images/sculpture/sculpture-1.jpg',
  },
  {
    title: 'Weight of Air',
    material: 'Stone · 2023',
    size: '36 × 20 × 14 in',
    image: '/images/sculpture/sculpture-2.jpg',
  },
  {
    title: 'Fragment Study',
    material: 'Mixed Media · 2022',
    size: '24 × 18 × 12 in',
    image: '/images/sculpture/sculpture-3.jpg',
  },
  {
    title: 'After the Cut',
    material: 'Bronze · 2024',
    size: '30 × 22 × 16 in',
    image: '/images/sculpture/sculpture-4.jpg',
  },
]

export default function SculpturePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#DED8CF]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/sculpture/sculpture-hero.jpg"
          alt="Sculpture detail"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B0B0B]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-[#B49A75]">
            Gallery I
          </p>

          <h1 className="text-6xl font-light uppercase tracking-[0.18em] md:text-8xl lg:text-9xl">
            Sculpture
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#DED8CF]/75 md:text-xl">
            Matter shaped by pressure, silence, and the memory of the hand.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="relative min-h-[620px] overflow-hidden">
          <Image
            src="/images/sculpture/sculpture-featured.jpg"
            alt="Featured sculpture"
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
            Monument
          </h2>

          <p className="mt-6 text-[#DED8CF]/60">Bronze · 2024 · 42 × 28 × 18 in</p>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#DED8CF]/75">
            A study in mass, restraint, and surface. The work holds tension
            between permanence and movement, as though the material is still
            deciding what it wants to become.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 md:pt-24">
            <h2 className="text-5xl font-light uppercase tracking-[0.14em]">
              Material
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#DED8CF]/70">
              Bronze, stone, pigment, and shadow become part of the same
              language. Each surface carries evidence of process: pressure,
              abrasion, polish, resistance.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden md:col-span-2">
            <Image
              src="/images/sculpture/sculpture-detail.jpg"
              alt="Sculpture material detail"
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

        <div className="grid gap-10 md:grid-cols-12">
          {sculptureWorks.map((work, index) => (
            <article
              key={work.title}
              className={`group ${
                index === 0
                  ? 'md:col-span-7'
                  : index === 1
                    ? 'md:col-span-5 md:pt-28'
                    : index === 2
                      ? 'md:col-span-4'
                      : 'md:col-span-8 md:pt-20'
              }`}
            >
              <div className="relative min-h-[420px] overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-black/25 transition duration-700 group-hover:bg-black/5" />
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
          “Stone does not resist. It reveals.”
        </blockquote>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.5em] text-[#DED8CF]/50">
            Continue the exhibition
          </p>

          <Link
            href="/design"
            className="group text-5xl font-light uppercase tracking-[0.14em] text-[#DED8CF] transition hover:text-[#B49A75] md:text-7xl"
          >
            Design
            <span className="ml-6 inline-block transition group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}