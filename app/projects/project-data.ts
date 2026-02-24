export const PROJECT_DATA = {
  'j-worra': '/previews/j-worra/screenshot-1.webp',
  'l-affaire-musicale': '/previews/l-affaire-musicale/screenshot-1.webp',
  'wicked-paradise': '/previews/wicked-paradise/screenshot-1.webp',
  'qlo-agency': '/previews/qlo-agency/screenshot-1.webp',
  'sam-blacky': '/previews/sam-blacky/screenshot-1.webp',
  'kaysin': '/previews/kaysin/screenshot-1.webp',
  'star-consciousness': '/previews/star-consciousness/screenshot-1.webp',
  'clipkeep': '/previews/clipkeep/screenshot-1.webp',
  'the-void': '/previews/the-void.png', // Special case - uses existing PNG
  'sifs-utilities': '/previews/sifs-utilities/screenshot-1.webp',
  'miss-dre': '/previews/miss-dre/screenshot-1.webp',
  'cherry-tooth': '/previews/cherry-tooth/screenshot-1.webp'
}

// Function to get thumbnail for each project
export const getProjectThumbnail = (slug: string): string => {
  return PROJECT_DATA[slug as keyof typeof PROJECT_DATA] || '/previews/fallback.webp'
}