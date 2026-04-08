'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import MenuOverlay from './MenuOverlay'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex items-start justify-between px-4 py-4 sm:px-6 sm:py-6">
          <div className="shrink-0">
            <Image
              src="/zischke_logo_light.png"
              alt="Jeff Logo"
              width={120}
              height={60}
              className="h-auto w-24 sm:w-28 md:w-32"
              priority
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="min-h-11 border border-white/80 px-4 py-2 text-xs tracking-widest text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-sm">
              <span className="hidden sm:inline">CONTACT JEFF</span>
              <span className="sm:hidden">CONTACT</span>
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              <div className="flex flex-col gap-0.5">
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
    </>
  )
}

// 'use client'

// import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'
// import MenuOverlay from './MenuOverlay'

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     setMenuOpen(false)
//   }, [pathname])

//   return (
//     <>
//       <header className="fixed inset-x-0 top-0 z-50">
//         <div className="flex items-start justify-between px-4 py-4 sm:px-6 sm:py-6">
//           <div className="shrink-0">
//             <Image
//               src="/zischke_logo_light.png"
//               alt="Jeff Logo"
//               width={120}
//               height={60}
//               className="h-auto w-24 sm:w-28 md:w-32"
//               priority
//             />
//           </div>

//           <div className="flex items-center gap-2 sm:gap-4">
//             <button className="min-h-11 border border-white/80 px-4 py-2 text-xs tracking-widest text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-sm">
//               <span className="hidden sm:inline">CONTACT JEFF</span>
//               <span className="sm:hidden">CONTACT</span>
//             </button>

//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//               className="flex h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
//             >
//               <div className="flex flex-col gap-0.5">
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
//     </>
//   )
// }

// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import MenuOverlay from './MenuOverlay'

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       <header className="fixed inset-x-0 top-0 z-50">
//         <div className="flex items-start justify-between px-4 py-4 sm:px-6 sm:py-6">
//           <div className="shrink-0">
//             <Image
//               src="/zischke_logo_light.png"
//               alt="Jeff Logo"
//               width={120}
//               height={60}
//               className="h-auto w-24 sm:w-28 md:w-32"
//               priority
//             />
//           </div>

//           <div className="flex items-center gap-2 sm:gap-4">
//             <button className="min-h-11 border border-white/80 px-4 py-2 text-xs tracking-widest text-white transition hover:bg-white hover:text-black sm:px-6 sm:text-sm">
//               <span className="hidden sm:inline">CONTACT JEFF</span>
//               <span className="sm:hidden">CONTACT</span>
//             </button>

//             <button
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open menu"
//               className="flex h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
//             >
//               <div className="flex flex-col gap-0.5">
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//                 <span className="h-0.5 w-5 bg-current" />
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
//     </>
//   )
// }


// 'use client'

// import Image from "next/image"
// import { useState } from "react"
// import MenuOverlay from "./MenuOverlay"

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        
//         <Image
//           src="/zischke_logo_light.png"
//           alt="Jeff Logo"
//           width={120}
//           height={60}
//         />

//         <div className="flex items-center gap-4">
//             <button className="border border-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition">
//                 CONTACT JEFF
//             </button>

//             <button
//                 onClick={() => setMenuOpen(true)}
//                 className="flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-black/70 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
//                 >
//                 <div className="flex flex-col gap-0.75">
//                     <span className="h-0.5 w-5 bg-current"></span>
//                     <span className="h-0.5 w-5 bg-current"></span>
//                     <span className="h-0.5 w-5 bg-current"></span>
//                 </div>
//             </button>
//         </div>
//       </header>

//       {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
//     </>
//   )
// }