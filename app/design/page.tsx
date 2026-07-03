import Image from 'next/image'
import Link from 'next/link'

const designWorks = [
  {
    title: 'Signal Chair',
    material: 'Steel · Leather · 2024',
    size: '32 × 24 × 28 in',
    image: '/images/design/design-1.png',
  },
  {
    title: 'Arc Table',
    material: 'Walnut · Bronze · 2023',
    size: '72 × 34 × 30 in',
    image: '/images/design/design-2.png',
  },
  {
    title: 'Low Vessel',
    material: 'Cast Resin · 2022',
    size: '18 × 18 × 10 in',
    image: '/images/design/design-3.png',
  },
  {
    title: 'Frame Study',
    material: 'Oak · Steel · 2024',
    size: '48 × 30 × 16 in',
    image: '/images/design/design-5.png',
  },
]

export default function DesignPage() {
  
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#DED8CF]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/design/design-hero.png"
          alt="Design object detail"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B0B0B]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-[#B49A75]">
            Gallery II
          </p>

          <h1 className="text-6xl font-light uppercase tracking-[0.18em] md:text-8xl lg:text-9xl">
            Design
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#DED8CF]/75 md:text-xl">
            Objects shaped by function, proportion, and the quiet discipline of form.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div className="border-r border-[#B49A75]/40 pr-8 md:text-right">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#B49A75]">
            Featured Work
          </p>

          <h2 className="text-4xl font-light uppercase tracking-[0.12em] md:text-6xl">
            Meridian
          </h2>

          <p className="mt-6 text-[#DED8CF]/60">
            Walnut · Bronze · 2024 · 72 × 34 × 30 in
          </p>

          <p className="mt-8 text-lg leading-8 text-[#DED8CF]/75 md:ml-auto md:max-w-md">
            A functional object reduced to gesture, balance, and line. The piece
            moves between furniture and sculpture, holding utility without losing
            its sense of presence.
          </p>
        </div>

        <div className="relative min-h-[620px] overflow-hidden">
          <Image
            src="/images/design/design-featured.jpg"
            alt="Featured design work"
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="relative min-h-[420px] overflow-hidden md:col-span-2">
            <Image
              src="/images/design/design-detail.png"
              alt="Design material detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="md:col-span-2 md:pt-24">
            <h2 className="text-5xl font-light uppercase tracking-[0.14em]">
              Function
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#DED8CF]/70">
              Each design begins with restraint. Line, weight, surface, and use
              are brought into balance until the object feels inevitable rather
              than decorated.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="mb-12 text-sm uppercase tracking-[0.5em] text-[#B49A75]">
          Selected Works
        </p>

        <div className="grid gap-10 md:grid-cols-12">
          {designWorks.map((work, index) => (
            <article
              key={work.title}
              className={`group ${
                index === 0
                  ? 'md:col-span-5 md:pt-20'
                  : index === 1
                    ? 'md:col-span-7'
                    : index === 2
                      ? 'md:col-span-8'
                      : 'md:col-span-4 md:pt-28'
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
          “An object is finished when nothing more needs to speak.”
        </blockquote>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.5em] text-[#DED8CF]/50">
            Continue the exhibition
          </p>

          <Link
            href="/paintings"
            className="group text-5xl font-light uppercase tracking-[0.14em] text-[#DED8CF] transition hover:text-[#B49A75] md:text-7xl"
          >
            Paintings
            <span className="ml-6 inline-block transition group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}