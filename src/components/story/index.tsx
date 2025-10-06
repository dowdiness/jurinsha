import { synopsis } from "./synopsis"
import "./story.css"

export function Story() {
  return (
    <div className="w-full">
      {/* タイトル部分 */}
      <div className="text-center mb-12">
        <h2 className="font-rounded font-medium text-4xl md:text-5xl text-gray-900 mb-6">
          あらすじ
        </h2>
        <div className="decorative-border w-32 mx-auto mt-8"></div>
      </div>

      {/* あらすじコンテンツ */}
      <div className="space-y-8 md:space-y-12">
        {Object.entries(synopsis).map(([key, value], index) => (
          <div
            key={key}
            className="relative rounded-2xl p-6 md:p-8 border border-gray-200 overflow-hidden bg-gray-200"
          >

            {/* セクション番号 */}
            <div className="absolute top-4 left-4 w-12 h-12 text-white bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg z-10">
              {index + 1}
            </div>

            {/* セクションタイトル */}
            <div className="mb-6 pt-8 pl-4">
              <h3 className="text-3xl md:text-4xl font-rounded font-medium text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                  {key}
                </span>
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full ml-4"></div>
            </div>

            {/* 本文 */}
            <div className="relative z-10 pl-4">
              <p className="synopsis-text text-lg md:text-xl font-serif text-gray-800 tracking-wide">
                {value}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
