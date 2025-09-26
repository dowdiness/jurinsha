import { synopsis } from "./synopsis"

export function Story() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">あらすじ</h2>
      <div className="space-y-6">
        {Object.entries(synopsis).map(([key, value]) => (
          <div key={key}>
            <h3 className="text-2xl font-semibold mb-2">{key}</h3>
            <p className="text-lg leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
