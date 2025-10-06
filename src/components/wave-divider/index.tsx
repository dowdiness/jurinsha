import "./wave.css"

export function WaveDivider() {
  return (
    <div className="wave-divider relative">
      <svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbf6ef" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbf6ef" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="wave-path"
        />
        <path
          d="M0,80 C300,140 600,20 900,80 C1050,110 1150,50 1200,80 L1200,120 L0,120 Z"
          fill="#fbf6ef"
          opacity="0.1"
          className="wave-path-secondary"
        />
      </svg>
    </div>
  )
}
