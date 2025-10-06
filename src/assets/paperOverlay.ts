const filterId = 'paperOverlay'
const svgFilter = `
  <filter id="${filterId}">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.08"
      numOctaves="5"
      result="noise"
    />
    <feDiffuseLighting
      in="noise"
      lightingColor="#fff"
      surfaceScale="1.75"
      result="texture"
    >
      <feDistantLight azimuth="45" elevation="70" />
    </feDiffuseLighting>
    <feTurbulence
      type="turbulence"
      baseFrequency="0.5"
      numOctaves="3"
      seed="5"
      result="tornNoise"
    />
    <feDisplacementMap
      in="SourceGraphic"
      in2="tornNoise"
      scale="10"
      xChannelSelector="R"
      yChannelSelector="G"
      result="tornEdges"
    />
    <feBlend
      in="texture"
      in2="tornEdges"
      mode="multiply"
      result="combined"
    />
  </filter>
`

const initSvgFilter = () => {
  const NS = 'http://www.w3.org/2000/svg'
  const el = document.createElementNS(NS, 'svg')
  el.innerHTML = svgFilter
  document.body.appendChild(el)
}

initSvgFilter();
