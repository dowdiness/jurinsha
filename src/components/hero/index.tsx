export function Hero() {
  return (
    <div className="w-full h-[90svh] isolate bg-beni">
      <div className="relative h-full overflow-hidden grid place-items-center mx-6 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64">
        <div className="absolute left-0 top-12 sm:top-20 md:top-24">
          <h1 className="text-5xl tracking-widest text-balance text-gray-50 drop-shadow-lg vertical-rl">
            かんちこんち
          </h1>
        </div>
        <div className="absolute right-8 bg-gray-800 w-32 md:w-64 h-[60%] md:h-[80%] text-gray-50">
          綾傘鉾
        </div>
      </div>
    </div>
  )
}
