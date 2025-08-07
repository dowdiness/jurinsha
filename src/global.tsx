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
      <div className="flex flex-col justify-between items-center h-full max-w-none p-2">
        <article className="flex flex-col justify-between items-center p-4 space-y-4 md:space-y-4 lg:space-y-6 max-w-3xl">
          <h1 className="text-3xl font-bold my-8">
            {title}
          </h1>
          <div className="prose md:prose-lg lg:prose-xl">
            {children}
          </div>
        </article>
      </div>
    </>
  )
}
