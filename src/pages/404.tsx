import type { PageProps, Metadata } from "minista"

export const metadata: Metadata = {
  title: "404 Not Found",
}

export default function ({url}: PageProps) {
  return (
    <p>
      {url} は見つかりませんでした。
    </p>
  )
}
