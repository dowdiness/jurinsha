import type { PageProps, Metadata } from "minista"
import { Hero } from "../components/hero"
import { Story } from "../components/story"
import { Character } from "../components/character"

export const metadata: Metadata = {
  title: "かんちこんち",
}

export default function ({}: PageProps) {
  return (
    <>
      <Hero />
      <Story />
      <Character />
    </>
  )
}
