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
            className="w-10 h-10 flex items-center justify-center bg-linear-to-r from-pink-500 to-orange-400 rounded"
          >
            ☰
          </button>

        </div>
      </header>

      {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
    </>
  )
}