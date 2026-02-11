(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__5b7c0c73._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/SB/Lumen/app/api/pulses/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/api/server.js [app-edge-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/server/web/exports/index.js [app-edge-route] (ecmascript)");
;
const runtime = 'edge';
const SUPABASE_URL = "https://nevuacfqoqaixtojxwve.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "sb_publishable_pWgcYZJe1jGJcpG5_vcAQw_p512x0cR"; // Using provided key as fallback but should be in env
async function supabaseFetch(path, options = {}) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
        ...options,
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation',
            ...options.headers
        }
    });
    return res.json();
}
async function GET() {
    try {
        const data = await supabaseFetch('pulses?select=*&order=timestamp.desc');
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch pulses'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const getRandomColor = ()=>`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        const atmosphere = body.atmosphere && body.atmosphere.includes('gradient') ? body.atmosphere : `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
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
            body: JSON.stringify(newPulse)
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data[0]);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid payload'
        }, {
            status: 400
        });
    }
}
async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    if (!slug) return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Missing Slug'
    }, {
        status: 400
    });
    try {
        const data = await supabaseFetch(`pulses?slug=eq.${slug}`, {
            method: 'DELETE'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Delete failed'
        }, {
            status: 500
        });
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5b7c0c73._.js.map