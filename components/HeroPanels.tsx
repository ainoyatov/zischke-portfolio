import HeroPanel from "./HeroPanel"
import { panels } from "@/data/panels"

export default function HeroPanels() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {panels.map((panel, index) => (
        <div
          key={panel.title}
          className={`relative min-h-[33.333vh] flex-1 md:min-h-screen ${
            index !== 0 ? "md:-ml-12" : ""
          }`}
        >
          <HeroPanel {...panel} />
        </div>
      ))}
    </main>
  )
}

// import HeroPanel from "./HeroPanel"
// import { panels } from "@/data/panel"

// export default function HeroPanels() {
//   return (
//     <main className="flex min-h-screen flex-col md:flex-row">
//       {panels.map((panel) => (
//         <div key={panel.title} className="relative min-h-[33.333vh] flex-1 md:min-h-screen">
//           <HeroPanel {...panel} />
//         </div>
//       ))}
//     </main>
//   )
// }