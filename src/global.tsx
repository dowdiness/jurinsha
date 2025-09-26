import type { GlobalProps } from "minista"
import { Head } from "minista"

import "./assets/output.css"

export default function ({ title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
        {/* noindexを指定すると検索に乗らないようになる */}
        {/* サイト公開時には消す */}
        {/* https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=ja */}
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>
      {children}
    </>
  )
}
