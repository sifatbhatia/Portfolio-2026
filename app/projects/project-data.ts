export const PROJECT_DATA = {
  'j-worra': { image: '/previews/j-worra/screenshot-1.webp', screenshotCount: 8, color: '#B31B1B' },
  'l-affaire-musicale': { image: '/previews/l-affaire-musicale/screenshot-1.webp', screenshotCount: 4, color: '#1e1b4b' },
  'wicked-paradise': { image: '/previews/wicked-paradise/screenshot-1.webp', screenshotCount: 4, color: '#064e3b' },
  'qlo-agency': { image: '/previews/qlo-agency/screenshot-1.webp', screenshotCount: 2, color: '#450a0a' },
  'sam-blacky': { image: '/previews/sam-blacky/screenshot-1.webp', screenshotCount: 3, color: '#0f172a' },
  'kaysin': { image: '/previews/kaysin/screenshot-1.webp', screenshotCount: 1, color: '#312e81' },
  'star-consciousness': { image: '/previews/star-consciousness/screenshot-1.webp', screenshotCount: 1, color: '#0a0a0a' },
  'clipkeep': { image: '/previews/clipkeep/screenshot-1.webp', screenshotCount: 1, color: '#1a1a1a' },
  'the-void': { image: '/previews/the-void.png', screenshotCount: 1, color: '#000000' },
  'sifs-utilities': { image: '/previews/sifs-utilities/screenshot-1.webp', screenshotCount: 1, color: '#1a1a1a' },
  'miss-dre': { image: '/previews/miss-dre/screenshot-1.webp', screenshotCount: 1, color: '#B31B1B' },
  'cherry-tooth': { image: '/previews/cherry-tooth/screenshot-1.webp', screenshotCount: 3, color: '#000000' }
}

export const getProjectThumbnail = (slug: string): string => {
  const data = PROJECT_DATA[slug as keyof typeof PROJECT_DATA]
  return data ? data.image : ''
}

export const getScreenshotCount = (slug: string): number => {
  const data = PROJECT_DATA[slug as keyof typeof PROJECT_DATA]
  return data ? data.screenshotCount : 1
}

export const getProjectColor = (slug: string): string => {
  const data = PROJECT_DATA[slug as keyof typeof PROJECT_DATA]
  return data ? data.color : '#000000'
}