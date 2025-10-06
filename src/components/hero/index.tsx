// import { Image } from "minista"

export function Hero() {
  return (
    <div className="w-full h-screen isolate">
      <div className="relative size-full overflow-hidden grid place-items-center">
        <div
          className="absolute inset-0 -z-10 size-full object-cover bg-beni"
        />
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-widest text-balance font-serif text-gray-50 drop-shadow-lg vertical-rl">
            かんちこんち
          </h1>
        </div>
      </div>
    </div>
  )
}
