import { characters } from "./character"

export function Character() {
  return (
    <div className="w-full px-6 sm:px-12 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-12 bg-beige text-gray-900">
      <h2 className="text-3xl mb-8">キャラクター紹介</h2>
      <div className="space-y-6">
        {Object.entries(characters).map(([key, value]) => (
          <div key={key}>
            <h3 className="text-xl md:text-2xl font-medium mb-4">{key}</h3>
            <p className="text-lg md:text-xl leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
