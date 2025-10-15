import { Image } from "minista"

export function Hero() {
  return (
    <div className="w-full h-[90svh] isolate bg-beni">
      <div className="relative h-full grid place-items-center mx-6 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64">
        <div className="absolute left-0 top-12 sm:top-20 md:top-24">
          <h1 className="text-5xl tracking-widest text-balance text-gray-50 drop-shadow-lg vertical-rl">
            かんちこんち
          </h1>
        </div>
        <Image src="/src/assets/images/ayakasahoko.png" className="absolute right-0 w-full object-contain object-top-right h-full -mr-6 sm:-mr-12 md:-mr-16 lg:-mr-32 xl:-mr-48 2xl:-mr-64" aspect="1.414:1" width="800" height="1120" />
      </div>
    </div>
  )
}
