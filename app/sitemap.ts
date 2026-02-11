import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://siftion.pages.dev'

    // Static Routes
    const routes = [
        '',
        '/about',
        '/projects',
        '/void',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Projects
    const projects = [
        'j-worra', 'neon-pony', 'l-affaire-musicale', 'wicked-paradise',
        'qlo-agency', 'sam-blacky', 'miss-dre', 'cherry-tooth', 'kaysin', 'the-void'
    ].map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Void Pulses (Static Example List)
    const pulses = [
        'the-rise-of-narrative-discovery',
        'economy-of-design',
        'ghost-in-the-shell'
    ].map((slug) => ({
        url: `${baseUrl}/void/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...projects, ...pulses]
}
