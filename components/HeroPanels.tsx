import HeroPanel from "./HeroPanel"
import { panels } from "@/data/panel"

export default function HeroPanels() {
  return (
    <main className="h-screen flex flex-col md:flex-row">

      {panels.map(panel => (
        <div key={panel.title} className="flex-1">
          <HeroPanel {...panel} />
        </div>
      ))}

    </main>
  )
}