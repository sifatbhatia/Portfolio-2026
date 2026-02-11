import { NextResponse } from 'next/server';

export const runtime = 'edge'

const SUPABASE_URL = "https://nevuacfqoqaixtojxwve.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "sb_publishable_pWgcYZJe1jGJcpG5_vcAQw_p512x0cR"; // Using provided key as fallback but should be in env

async function supabaseFetch(path: string, options: any = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...options.headers,
    },
  });
  return res.json();
}

export async function GET() {
  try {
    const data = await supabaseFetch('pulses?select=*&order=timestamp.desc');
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pulses' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    const atmosphere = (body.atmosphere && body.atmosphere.includes('gradient')) 
      ? body.atmosphere 
      : `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;

    const newPulse = {
      title: body.title,
      content: body.content,
      integrity: body.integrity || 'Pure Signal',
      resonance: body.resonance || 'Low Entropy',
      atmosphere: atmosphere,
      prompt: body.prompt || body.title,
      timestamp: new Date().toISOString(),
      slug: (body.title || 'Untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };

    const data = await supabaseFetch('pulses', {
      method: 'POST',
      body: JSON.stringify(newPulse),
    });

    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing Slug' }, { status: 400 });

  try {
    const data = await supabaseFetch(`pulses?slug=eq.${slug}`, {
      method: 'DELETE',
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
