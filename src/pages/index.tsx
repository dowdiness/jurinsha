import type { PageProps, Metadata } from "minista"
import { Image } from "minista"
import { Hero } from "../components/hero"
import { Story } from "../components/story"
import { Character } from "../components/character"

export const metadata: Metadata = {
  title: "かんちこんち",
}

export default function ({}: PageProps) {
  return (
    <div className="flex flex-col justify-between items-center h-full max-w-none p-4 space-y-4">
      <Hero />
      <Story />
      <Character />
    </div>
  )
}
