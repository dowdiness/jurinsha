export function Hero() {
  return (
    <div className="w-full h-[90svh] isolate">
      <div className="relative size-full overflow-hidden grid place-items-center">
        <div
          className="absolute inset-0 -z-10 size-full object-cover bg-beni"
        />
        <div className="absolute left-8 sm:left-12 md:left-16 top-12 sm:top-20 md:top-24">
          <h1 className="text-5xl font-semibold tracking-widest text-balance font-serif text-gray-50 drop-shadow-lg vertical-rl">
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
