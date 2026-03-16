'use client'

import Image from "next/image"
import { useState } from "react"
import MenuOverlay from "./MenuOverlay"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        
        <Image
          src="/zischke_logo_light.png"
          alt="Jeff Logo"
          width={120}
          height={60}
        />

        <div className="flex items-center gap-4">
            <button className="border border-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition">
                CONTACT JEFF
            </button>

            <button
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-black/70 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                >
                <div className="flex flex-col gap-0.75">
                    <span className="h-0.5 w-5 bg-current"></span>
                    <span className="h-0.5 w-5 bg-current"></span>
                    <span className="h-0.5 w-5 bg-current"></span>
                </div>
            </button>
        </div>
      </header>

      {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
    </>
  )
}