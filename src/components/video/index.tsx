export function Video() {
  return (
  <div className="w-full px-6 sm:px-12 md:px-16 lg:px-32 xl:px-48 2xl:px-64 pb-24">
    <h2 className="text-3xl font-medium mb-8 md:mb-16">メイキング動画</h2>
    <video controls>
      <source src="/making.mp4" type="video/mp4" />
    </video>
  </div>
  )
}
