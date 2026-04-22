'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import GlobalNavbar from '../../components/GlobalNavbar'
import FooterBrand from '../../components/FooterBrand'
import AuroraTransition from '../../components/AuroraTransition'

const signalMarkdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-8 first:mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-[#fff7f7] mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 first:mt-0 text-xl md:text-2xl font-semibold tracking-tight text-[#fff7f7] mb-3 pb-2 border-b border-white/10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 first:mt-0 text-lg md:text-xl font-medium text-[#fff7f7]/95 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 text-base md:text-lg font-medium text-[#fff7f7]/90 mb-2">{children}</h4>
  ),
  p: ({ children }) => <p className="mb-4 last:mb-0 leading-relaxed text-white/82 text-sm md:text-base lg:text-lg font-light">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 pl-6 list-disc text-white/80 space-y-2 text-sm md:text-base">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 pl-6 list-decimal text-white/80 space-y-2 text-sm md:text-base">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#b83a3a] underline underline-offset-2 hover:text-[#fff7f7] transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer noopener' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-[#fff7f7]">{children}</strong>,
  em: ({ children }) => <em className="italic text-white/90">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[#b83a3a]/70 pl-5 text-white/70 italic">{children}</blockquote>
  ),
  hr: () => <hr className="my-10 border-white/10" />,
  code: ({ className, children }) => {
    const inline = !className
    if (inline) {
      return (
        <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-[#fff7f7]/90">{children}</code>
      )
    }
    return <code className={className}>{children}</code>
  },
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm font-mono text-white/85">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full text-left text-sm text-white/80">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-white/15 bg-white/[0.04]">{children}</thead>,
  th: ({ children }) => <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-[#b83a3a]">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 border-t border-white/5">{children}</td>,
}

/** Headings must start a line in CommonMark; fix pasted blobs like "...end.## Next" */
function normalizeSignalMarkdown(raw: string): string {
  return raw
    .replace(/\r\n/g, '\n')
    .replace(/([^\n#])(#{1,6} )/g, '$1\n\n$2')
    .trim()
}

type Pulse = {
  id: string
  slug: string
  title: string
  timestamp: string
  content: string
}

export default function SignalDetail() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug || ''
  const [pulses, setPulses] = useState<Pulse[]>([])

  useEffect(() => {
    fetch('/api/pulses', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setPulses(d || []))
      .catch(() => setPulses([]))
  }, [])

  const current = useMemo(() => pulses.find((p) => p.slug === slug), [pulses, slug])

  const markdownSource = useMemo(
    () => normalizeSignalMarkdown(current?.content || 'This signal is being synchronized.'),
    [current?.content],
  )

  return (
    <main className="min-h-screen bg-[#130502] antialiased overflow-x-hidden selection:bg-[#b83a3a] selection:text-white font-sans">
      <GlobalNavbar />
      
      <section className="px-6 md:px-12 lg:px-[6%] pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-14 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.35em] md:tracking-[0.4em] text-[#b83a3a] font-semibold">
            Lumis · Signal
          </p>
          <h1 className="mt-4 md:mt-5 max-w-5xl text-[clamp(2.25rem,6.5vw,4.75rem)] leading-[0.95] tracking-[-0.035em] font-light text-[#fff7f7]">
            {current?.title || slug.replace(/-/g, ' ')}
          </h1>
          <p className="mt-5 md:mt-6 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#fff7f7]/40">
            {current?.timestamp ? new Date(current.timestamp).toLocaleString() : ''}
          </p>
        </div>
      </section>
      
      <section className="px-6 md:px-12 lg:px-[6%] py-10 md:py-14 grid gap-6 md:gap-8 lg:grid-cols-12 border-b border-white/10">
        <article className="lg:col-span-8 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="signal-markdown max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={signalMarkdownComponents}>
              {markdownSource}
            </ReactMarkdown>
          </div>
        </article>
        
        <aside className="lg:col-span-4 rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/45">Navigation</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/signals"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 md:px-6 py-2 md:py-3 text-[9px] md:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.2em] no-underline text-white/70 hover:border-[#b83a3a] hover:text-[#b83a3a] transition-colors"
            >
              Back to Signals
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#b83a3a] px-4 md:px-6 py-2 md:py-3 text-[9px] md:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.2em] no-underline text-white hover:brightness-110 transition-all"
            >
              Discuss a project
            </Link>
          </div>
        </aside>
      </section>

      {/* ─── FOOTER ─── */}
      <section className="relative">
        <AuroraTransition />
        <div className="relative z-30 rounded-t-[5rem] bg-[#fff7f7] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
          <FooterBrand />
        </div>
      </section>
    </main>
  )
}
