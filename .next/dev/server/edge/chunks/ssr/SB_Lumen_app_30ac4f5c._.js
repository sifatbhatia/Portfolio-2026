(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/ssr/SB_Lumen_app_30ac4f5c._.js",
"[project]/SB/Lumen/app/components/GlobalNavbar.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalNavbar,
    "navLinks",
    ()=>navLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lucide-react/dist/esm/icons/x.js [app-edge-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/client/app-dir/link.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/api/navigation.js [app-edge-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/client/components/navigation.js [app-edge-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Signals',
        href: '/signals'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];
function GlobalNavbar() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 w-full z-[20001] flex justify-end items-center px-[6%] py-6 md:py-8 text-white mix-blend-difference pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden lg:flex gap-12 text-[0.7rem] font-medium uppercase tracking-[0.2em] pointer-events-auto",
                        children: navLinks.map((link)=>{
                            const isActive = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `no-underline transition-colors duration-300 ${isActive ? 'text-[var(--accent)] font-bold' : 'hover:text-[var(--accent)]'}`,
                                    children: [
                                        link.name,
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "nav-dot",
                                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                            lineNumber: 37,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this)
                            }, link.name, false, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        whileTap: {
                            scale: 0.95
                        },
                        className: "lg:hidden z-[20002] text-[0.6rem] font-medium uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full cursor-pointer relative overflow-hidden group min-w-[80px] flex justify-center items-center h-8 pointer-events-auto bg-white/10 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    y: isMenuOpen ? -40 : 0,
                                    opacity: isMenuOpen ? 0 : 1
                                },
                                className: "block",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    y: 40,
                                    opacity: 0
                                },
                                animate: {
                                    y: isMenuOpen ? 0 : 40,
                                    opacity: isMenuOpen ? 1 : 0
                                },
                                className: "absolute inset-0 flex justify-center items-center text-white font-bold gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    "Close"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        clipPath: 'circle(0% at 90% 5%)'
                    },
                    animate: {
                        clipPath: 'circle(150% at 90% 5%)'
                    },
                    exit: {
                        clipPath: 'circle(0% at 90% 5%)'
                    },
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.19,
                            1,
                            0.22,
                            1
                        ]
                    },
                    className: "fixed inset-0 z-[20000] bg-[#050505] text-white p-[6%] pt-32 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-8",
                            children: navLinks.map((link, i)=>{
                                const isActive = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -10,
                                        transition: {
                                            duration: 0.2
                                        }
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "group relative inline-block text-5xl font-normal tracking-tight no-underline text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block transition-all duration-500 ${isActive ? 'italic text-[var(--accent)] opacity-100' : 'group-hover:opacity-0'}`,
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-0 left-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100 italic text-[var(--accent)] whitespace-nowrap",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                                lineNumber: 107,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto border-t border-white/10 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 mb-2 text-white",
                                    children: "Available for projects"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:sifatbht@gmail.com",
                                    className: "text-xl font-bold hover:text-[var(--accent)] transition-colors text-white",
                                    children: "sifatbht@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/SB/Lumen/app/components/Footer.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lucide-react/dist/esm/icons/globe.js [app-edge-ssr] (ecmascript) <export default as Globe>");
'use client';
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    const [currentTime, setCurrentTime] = __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const updateTime = ()=>{
            setCurrentTime(new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: 'America/Los_Angeles'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black text-white w-full relative overflow-hidden border-t border-white/5 pt-24 md:pt-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-[6%] relative z-10 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-[8vw] font-normal tracking-tighter leading-[0.8] uppercase text-white",
                        children: [
                            "Let's create ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-playfair italic lowercase tracking-tight text-white/80",
                                children: "the"
                            }, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            " future."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32 md:mb-48 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:sifatbht@gmail.com",
                                className: "group flex flex-col no-underline text-white w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-4 group-hover:opacity-100 transition-opacity",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl md:text-5xl font-normal hover:text-[var(--accent)] transition-colors border-b-2 border-black/5 pb-2",
                                        children: "sifatbht@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20 mb-6 block",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        {
                                            name: 'LinkedIn',
                                            href: 'https://linkedin.com/in/siftion'
                                        },
                                        {
                                            name: 'Behance',
                                            href: 'https://behance.net/siftion'
                                        },
                                        {
                                            name: 'Instagram',
                                            href: 'https://instagram.com/siftion'
                                        },
                                        {
                                            name: 'Facebook',
                                            href: '#'
                                        }
                                    ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            target: "_blank",
                                            className: "group text-xl md:text-2xl font-normal no-underline text-white hover:text-[var(--accent)] transition-colors w-fit border-b border-white/5 group-hover:border-white/20 pb-1",
                                            children: social.name
                                        }, social.name, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-4 flex flex-col gap-8 md:items-end text-left md:text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20",
                                            children: "Current Time"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center md:justify-end gap-3 opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    size: 14,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl md:text-2xl font-medium tracking-tight uppercase",
                                                    children: [
                                                        currentTime,
                                                        " PST"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20",
                                            children: "System Status"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-40",
                                            children: "EST. 2026 // LUME 2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-white/10 gap-8 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8 md:gap-16 text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: "Based in Los Angeles"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: "Available for Q1 2026"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-20 text-white",
                            children: [
                                "© ",
                                currentYear,
                                " // Sifat Bhatia // All Rights Reserved"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/SB/Lumen/app/signals/[slug]/page.tsx [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignalDetail,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/client/app-dir/link.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/api/navigation.js [app-edge-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/esm/client/components/navigation.js [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/app/components/GlobalNavbar.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/app/components/Footer.tsx [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lenis/dist/lenis-react.mjs [app-edge-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/react-markdown/lib/index.js [app-edge-ssr] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/remark-gfm/lib/index.js [app-edge-ssr] (ecmascript)");
'use client';
;
const runtime = 'edge';
;
;
;
;
;
;
;
;
;
function SignalDetail() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const [pulse, setPulse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pulses, setPulses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [generatedImageUrl, setGeneratedImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: heroRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const opacityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0
    ]);
    const scaleHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0.95
    ]);
    const yHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        0,
        50
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        window.scrollTo(0, 0);
        if (lenis) {
            lenis.scrollTo(0, {
                immediate: true
            });
        }
    }, [
        slug,
        lenis
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchPulse() {
            try {
                const res = await fetch('/api/pulses');
                if (res.ok) {
                    const data = await res.json();
                    setPulses(data);
                    const matched = data.find((p)=>p.slug === slug);
                    if (matched) setPulse(matched);
                }
            } catch (e) {
                console.error(e);
            } finally{
                setLoading(false);
            }
        }
        fetchPulse();
    }, [
        slug
    ]);
    // Puter image generation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pulse?.prompt && !generatedImageUrl && !isGenerating) {
            const generateImage = async ()=>{
                // @ts-ignore
                if (window.puter && !window.puter.auth?.isSignedIn()) return;
                setIsGenerating(true);
                try {
                    // @ts-ignore
                    if (window.puter) {
                        // @ts-ignore
                        const img = await window.puter.ai.txt2img(pulse.prompt, {
                            model: 'black-forest-labs/FLUX.1-schnell'
                        });
                        setGeneratedImageUrl(img.src);
                    }
                } catch (e) {
                    console.error(e);
                } finally{
                    setIsGenerating(false);
                }
            };
            generateImage();
        }
    }, [
        pulse,
        generatedImageUrl,
        isGenerating
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-20 animate-pulse text-black",
            children: "Synchronizing..."
        }, void 0, false, {
            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
    const currentIndex = pulses.findIndex((p)=>p.slug === slug);
    const nextPulse = currentIndex < pulses.length - 1 ? pulses[currentIndex + 1] : null;
    const displayTitle = pulse?.title || slug?.split('-').map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const displayContent = pulse?.content || 'Signal pending...';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black overflow-x-hidden selection:bg-[var(--accent)] selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "relative pt-28 md:pt-60 px-[6%] pb-12 md:pb-40 border-b border-black/5 bg-white z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        opacity: opacityText,
                        scale: scaleHero,
                        y: yHero
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 md:gap-8 mb-8 md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: 48
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.2,
                                        ease: [
                                            0.19,
                                            1,
                                            0.22,
                                            1
                                        ]
                                    },
                                    className: "h-[1px] bg-[var(--accent)]"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.4
                                    },
                                    className: "text-[0.6rem] md:text-[0.7rem] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[var(--accent)]",
                                    children: pulse?.timestamp ? new Date(pulse.timestamp).toLocaleDateString([], {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    }) : '2026'
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-inter text-[10vw] md:text-[6vw] lg:text-[8vw] font-normal leading-[0.9] md:leading-[0.8] tracking-[-0.04em] md:tracking-[-0.06em] mb-12 md:mb-20 text-black break-words",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        y: 100
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.1,
                                        ease: [
                                            0.19,
                                            1,
                                            0.22,
                                            1
                                        ]
                                    },
                                    className: "block",
                                    children: displayTitle
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        x: -50
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.3,
                                        ease: [
                                            0.19,
                                            1,
                                            0.22,
                                            1
                                        ]
                                    },
                                    className: "font-playfair italic md:pl-[12vw] block text-[8vw] md:text-[5vw] lg:text-[6vw] opacity-20",
                                    children: "Signal."
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-[6%] py-16 md:py-32 bg-white relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-12 gap-8 md:gap-12 lg:gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 md:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -left-12 top-2 text-[0.6rem] font-bold opacity-20 rotate-90 origin-left uppercase tracking-widest hidden md:block text-black",
                                            children: "Signal"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 1,
                                                delay: 0.6
                                            },
                                            className: "prose prose-neutral max-w-none text-black",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                remarkPlugins: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                                                ],
                                                components: {
                                                    p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl md:text-3xl lg:text-4xl font-light leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-10 text-black",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 68
                                                        }, void 0),
                                                    h1: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-3xl md:text-5xl font-bold mb-6",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 69
                                                        }, void 0),
                                                    h2: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl md:text-4xl font-bold mb-4 mt-12",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 69
                                                        }, void 0),
                                                    h3: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl md:text-3xl font-bold mb-3 mt-8",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 69
                                                        }, void 0),
                                                    ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc pl-6 mb-6 space-y-2",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 69
                                                        }, void 0),
                                                    li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "text-lg md:text-2xl font-light leading-relaxed",
                                                            ...props
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 69
                                                        }, void 0)
                                                },
                                                children: displayContent
                                            }, void 0, false, {
                                                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scaleX: 0
                                    },
                                    animate: {
                                        scaleX: 1
                                    },
                                    transition: {
                                        duration: 1.5,
                                        delay: 0.8,
                                        ease: [
                                            0.19,
                                            1,
                                            0.22,
                                            1
                                        ]
                                    },
                                    className: "w-full h-[1px] bg-black/5 mb-8 md:mb-20 origin-left"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 md:col-start-9 lg:col-start-10 md:col-span-4 lg:col-span-3 mt-12 md:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.8
                                },
                                className: "md:sticky md:top-40 space-y-12 md:space-y-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex md:block gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[0.55rem] md:text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4 md:mb-6 text-black",
                                                    children: "Signal"
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 md:space-y-8 text-black",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[0.5rem] md:text-[0.55rem] uppercase opacity-40 mb-1",
                                                                    children: "Intent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg md:text-xl font-medium",
                                                                    children: pulse?.integrity || 'Pure'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[0.5rem] md:text-[0.55rem] uppercase opacity-40 mb-1",
                                                                    children: "Tags"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg md:text-xl font-medium",
                                                                    children: pulse?.resonance || 'None'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 md:mt-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-[0.55rem] md:text-[0.6rem] font-bold opacity-30 uppercase tracking-widest mb-4 md:mb-6 text-black",
                                                    children: "Atmosphere"
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full aspect-square bg-black/5 rounded-full flex items-center justify-center relative overflow-hidden max-w-[120px] md:max-w-[180px] lg:max-w-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundImage: pulse?.atmosphere || 'linear-gradient(135deg, #B31B1B 0%, #ec4899 100%)'
                                                            },
                                                            className: "absolute inset-0 w-full h-full animate-gradient-flow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            children: generatedImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                src: generatedImageUrl,
                                                                alt: "Manifestation",
                                                                className: "absolute inset-0 w-full h-full object-cover z-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[0.4rem] md:text-[0.5rem] font-bold opacity-10 uppercase tracking-widest text-black z-10",
                                                            children: isGenerating && !generatedImageUrl ? 'Manifesting...' : 'Lume_Sync'
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                lineNumber: 181,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-black/5 flex flex-col md:flex-row h-auto md:h-[30vh] overflow-hidden bg-black/5 gap-px relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/signals",
                        className: "flex-1 group relative bg-white flex flex-col justify-center px-[6%] py-12 no-underline text-black transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Return"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500",
                                    children: "Return to Signals"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 239,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: nextPulse ? `/signals/${nextPulse.slug}` : '/signals',
                        className: `flex-1 group relative bg-white flex flex-col justify-center px-[6%] py-12 no-underline text-black transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5] ${!nextPulse && 'opacity-50 pointer-events-none'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-right md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500",
                                    children: nextPulse ? nextPulse.title : 'End'
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                            lineNumber: 251,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$edge$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SB/Lumen/app/signals/[slug]/page.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
}),
]);

//# sourceMappingURL=SB_Lumen_app_30ac4f5c._.js.map