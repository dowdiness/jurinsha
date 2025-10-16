import type { PageProps, Metadata } from "minista"
import { Hero } from "../components/hero"
import { WaveDivider } from "../components/wave-divider"
import { Story } from "../components/story"
import { Character } from "../components/character"
import { Video } from "../components/video"

export const metadata: Metadata = {
  title: "かんちこんち",
}

export default function ({}: PageProps) {
  return (
    <>
      <div className="w-full">
        <Hero />
        <WaveDivider />
      </div>
      <Story />
      <Character />
      <Video />
    </>
  )
}
