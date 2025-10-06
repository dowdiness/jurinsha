// import { Image } from "minista"

export function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="size-full overflow-hidden grid place-items-center">
        <div
          className="absolute inset-0 -z-10 size-full object-cover bg-beni"
        />
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance">
            かんちこんち
          </h1>
        </div>
      </div>
    </div>
  )
}
