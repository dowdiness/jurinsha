import type { PageProps, Metadata } from "minista"
import { Image } from "minista"

export const metadata: Metadata = {
  title: "十輪車",
}

export default function ({}: PageProps) {
  return (
    <>
      <Image src="/src/assets/images/棒振りの人.jpg" alt="棒振りの人" width="300" />
    </>
  )
}
