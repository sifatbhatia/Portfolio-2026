(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sifPort/app/components/GlobalNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalNavbar,
    "navLinks",
    ()=>navLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/sifPort/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 w-full z-[20001] flex justify-end items-center px-[6%] py-6 md:py-8 text-white mix-blend-difference pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden lg:flex gap-12 text-[0.7rem] font-medium uppercase tracking-[0.2em] pointer-events-auto",
                        children: navLinks.map((link)=>{
                            const isActive = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative group filter invert-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `no-underline transition-colors duration-300 ${isActive ? 'text-[var(--accent)] font-bold' : 'hover:text-[var(--accent)]'}`,
                                    children: [
                                        link.name,
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "nav-dot",
                                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent)] rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                            lineNumber: 37,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this)
                            }, link.name, false, {
                                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        whileTap: {
                            scale: 0.95
                        },
                        className: "lg:hidden z-[20002] text-[0.6rem] font-medium uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full cursor-pointer relative overflow-hidden group min-w-[80px] flex justify-center items-center h-8 pointer-events-auto bg-white/10 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    y: isMenuOpen ? -40 : 0,
                                    opacity: isMenuOpen ? 0 : 1
                                },
                                className: "block",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    "Close"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-8",
                            children: navLinks.map((link, i)=>{
                                const isActive = pathname === link.href || link.href !== '/' && pathname.startsWith(link.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "group relative inline-block text-5xl font-normal tracking-tight no-underline text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block transition-all duration-500 ${isActive ? 'italic text-[var(--accent)] opacity-100' : 'group-hover:opacity-0'}`,
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-0 left-0 block opacity-0 transition-opacity duration-500 group-hover:opacity-100 italic text-[var(--accent)] whitespace-nowrap",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                                lineNumber: 107,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto border-t border-white/10 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 mb-2 text-white",
                                    children: "Available for projects"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:sifatbht@gmail.com",
                                    className: "text-xl font-bold hover:text-[var(--accent)] transition-colors text-white",
                                    children: "sifatbht@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sifPort/app/components/GlobalNavbar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GlobalNavbar, "57pbbN3DYdkExroTk+Wj7Tth3cw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = GlobalNavbar;
var _c;
__turbopack_context__.k.register(_c, "GlobalNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sifPort/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/sifPort/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const currentYear = new Date().getFullYear();
    const [currentTime, setCurrentTime] = __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(footerRef, {
        once: false,
        amount: 0.3
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Footer.useEffect": ()=>{
            const updateTime = {
                "Footer.useEffect.updateTime": ()=>{
                    setCurrentTime(new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true,
                        timeZone: 'America/Los_Angeles'
                    }));
                }
            }["Footer.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "Footer.useEffect": ()=>clearInterval(interval)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footerRef,
        className: "bg-black text-white w-full relative overflow-hidden border-t border-white/5 pt-24 md:pt-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-0",
                initial: {
                    y: '100%'
                },
                animate: {
                    y: isInView ? '0%' : '100%'
                },
                transition: {
                    duration: 1.2,
                    ease: [
                        0.19,
                        1,
                        0.22,
                        1
                    ]
                },
                style: {
                    background: 'linear-gradient(180deg, transparent 0%, rgba(42, 219, 219, 0.03) 50%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/sifPort/app/components/Footer.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-0 opacity-20",
                initial: {
                    y: '100%'
                },
                animate: {
                    y: isInView ? '0%' : '100%'
                },
                transition: {
                    duration: 1.2,
                    ease: [
                        0.19,
                        1,
                        0.22,
                        1
                    ],
                    delay: 0.1
                },
                style: {
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/sifPort/app/components/Footer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[6%] relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-[8vw] font-normal tracking-tighter leading-[0.8] uppercase text-white",
                            children: [
                                "Let's create ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/sifPort/app/components/Footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-playfair italic lowercase tracking-tight text-white/80",
                                    children: "the"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/components/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                " future."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/components/Footer.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32 md:mb-48 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-6 mb-12 lg:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:hi@sifat.tech",
                                    className: "group flex flex-col no-underline text-white w-fit",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-4 group-hover:opacity-100 transition-opacity",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/components/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal hover:text-[var(--accent)] transition-colors border-b-2 border-white/10 pb-2 break-all sm:break-normal",
                                            children: "hi@sifat.tech"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/components/Footer.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 md:col-span-6 lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40 mb-6 block",
                                        children: "Connect"
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                href: 'https://instagram.com/sifatxo'
                                            },
                                            {
                                                name: 'Facebook',
                                                href: '#'
                                            }
                                        ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                target: "_blank",
                                                className: "group text-xl md:text-2xl font-normal no-underline text-white hover:text-[var(--accent)] transition-colors w-fit border-b border-white/5 group-hover:border-white/20 pb-1",
                                                children: social.name
                                            }, social.name, false, {
                                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-8 lg:items-end text-left lg:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40",
                                                children: "Current Time"
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center lg:justify-end gap-3 opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        size: 14,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-medium tracking-tight uppercase",
                                                        children: [
                                                            currentTime,
                                                            " PST"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40",
                                                children: "System Status"
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-60",
                                                children: "EST. 2026 // LUMENÉ 4.0"
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-white/10 gap-8 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 md:gap-16 text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Based in Los Angeles"
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Available for Q1 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-40 text-white",
                                children: [
                                    "© ",
                                    currentYear,
                                    " // Sifat Bhatia // All Rights Reserved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sifPort/app/components/Footer.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sifPort/app/components/Footer.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sifPort/app/components/Footer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sifPort/app/components/Footer.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Footer, "PxDUo+qf++p/IDnu6k5Yh9Byy1M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sifPort/src/components/ResponsiveCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ResponsiveCarousel = ({ images, altTexts = [], interval = 5000, inverted = false, className = '' })=>{
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startY, setStartY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-slide functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResponsiveCarousel.useEffect": ()=>{
            if (!isAutoPlaying || isDragging) return;
            timeoutRef.current = setTimeout({
                "ResponsiveCarousel.useEffect": ()=>{
                    setCurrentSlide({
                        "ResponsiveCarousel.useEffect": (prev)=>(prev + 1) % images.length
                    }["ResponsiveCarousel.useEffect"]);
                }
            }["ResponsiveCarousel.useEffect"], interval);
            return ({
                "ResponsiveCarousel.useEffect": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["ResponsiveCarousel.useEffect"];
        }
    }["ResponsiveCarousel.useEffect"], [
        currentSlide,
        isAutoPlaying,
        isDragging,
        interval,
        images.length
    ]);
    const nextSlide = ()=>{
        setIsAutoPlaying(false);
        setCurrentSlide((prev)=>(prev + 1) % images.length);
    };
    const prevSlide = ()=>{
        setIsAutoPlaying(false);
        setCurrentSlide((prev)=>(prev - 1 + images.length) % images.length);
    };
    const goToSlide = (index)=>{
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };
    // Mouse drag handlers
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        setStartX(e.clientX);
        setStartY(e.clientY);
        setIsAutoPlaying(false);
    };
    const handleMouseUp = ()=>{
        setIsDragging(false);
        setIsAutoPlaying(true);
    };
    const handleMouseMove = (e)=>{
        if (!isDragging || !carouselRef.current) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        // Only swipe horizontally if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };
    // Touch handlers for mobile
    const handleTouchStart = (e)=>{
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
        setIsAutoPlaying(false);
    };
    const handleTouchEnd = (e)=>{
        if (!isDragging || !carouselRef.current) return;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
        setIsDragging(false);
        setIsAutoPlaying(true);
    };
    if (images.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative aspect-[16/10] rounded-3xl overflow-hidden border ${inverted ? 'border-white/20' : 'border-black/20'} ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 border-2 border-current/20 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: `relative aspect-[16/10] rounded-3xl overflow-hidden border ${inverted ? 'border-white/20 bg-black' : 'border-black/20 bg-white'} ${className}`,
        onMouseEnter: ()=>setIsAutoPlaying(false),
        onMouseLeave: ()=>setIsAutoPlaying(true),
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        style: {
            cursor: isDragging ? 'grabbing' : 'grab'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    src: images[currentSlide],
                    alt: altTexts[currentSlide] || `Project screenshot ${currentSlide + 1}`,
                    className: "w-full h-full object-cover",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.5
                    }
                }, currentSlide, false, {
                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm",
                        "aria-label": "Previous slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 12H5"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm",
                        "aria-label": "Next slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 12h14"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2",
                children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToSlide(index),
                        className: `w-2 h-2 rounded-full transition-colors ${index === currentSlide ? inverted ? 'bg-white' : 'bg-black' : inverted ? 'bg-white/40' : 'bg-black/40'}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sifPort/src/components/ResponsiveCarousel.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ResponsiveCarousel, "Z3FFZ13xYBpk4h8Bj7MN3XMQY7s=");
_c = ResponsiveCarousel;
const __TURBOPACK__default__export__ = ResponsiveCarousel;
var _c;
__turbopack_context__.k.register(_c, "ResponsiveCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sifPort/app/projects/[projectName]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/sifPort/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/app/components/GlobalNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$src$2f$components$2f$ResponsiveCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sifPort/src/components/ResponsiveCarousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
const runtime = 'edge';
;
;
;
;
;
;
;
;
const PROJECT_DATA = {
    'j-worra': {
        title: 'J. Worra',
        subtitle: 'Artist Identity Design',
        slug: 'j-worra',
        description: 'Jamie Sitter, aka J. Worra, is a Los Angeles-based DJ and Producer who has redefined the tech-house landscape with her "Classic house meets new school tech" sound.',
        objective: 'The project focused on building a high-fidelity digital presence that matches J. Worra’s unique sound and energy. I redesigned the entire site from the ground up to create a more immersive experience for her fans, focusing on clean layouts, smooth transitions, and a better way to showcase her tour dates and merch.',
        impact: 'Hailed as DJ Mag’s 2019 Breakthrough Producer, J. Worra’s digital presence now provides a high-fidelity gateway for her global fanbase, integrating her official remixes for Kaskade and deadmau5 with a clean, immersive aesthetic.',
        role: 'Creative Lead & Lead Developer',
        service: [
            'Digital Identity',
            'Art Direction',
            'Web Design',
            'Full-Stack Development',
            'GSAP Animation'
        ],
        url: 'https://jworra.com',
        stats: [
            {
                label: 'Year',
                value: '2026'
            },
            {
                label: 'Genre',
                value: 'Tech-House'
            }
        ]
    },
    'l-affaire-musicale': {
        title: 'L’ Affaire Musicale',
        subtitle: 'Agency Refactor',
        slug: 'l-affaire-musicale',
        description: 'A premier artist management and booking firm, L’Affaire Musicale has been a dance music creative powerhouse for over 20 years.',
        objective: 'The project was a complete visual overhaul. I redesigned their logo, website, and Mailchimp templates to bring their digital presence into a modern context. Built on a custom foundation, the new system includes dedicated artist sub-pages and streamlines their roster management and global festival bookings.',
        impact: 'The new digital identity led to a significant increase in site visitors and global visibility for their roster. By creating a professional, unified look, I’ve made it easier for the team to manage bookings and for talent buyers to explore their artists, ensuring their digital presence now matches their status as a industry-leading agency.',
        role: 'Lead Designer & Developer',
        service: [
            'Logo Redesign',
            'Website Redesign',
            'Artist Sub-Pages',
            'Mailchimp Design',
            'Custom Layouts'
        ],
        url: 'https://laffairemusicale.com',
        stats: [
            {
                label: 'Tenure',
                value: '20+ Years'
            },
            {
                label: 'Platform',
                value: 'Squarespace'
            }
        ]
    },
    'wicked-paradise': {
        title: 'Wicked Paradise',
        subtitle: 'Event Ecosystem',
        slug: 'wicked-paradise',
        description: 'Wicked Paradise is LA’s premier day club and boat party series, known for flagship events in Miami, New York, and Chicago.',
        objective: 'The goal was to redesign the entire site and Mailchimp templates to create a clean, consistent look. I implemented a new design system built on a custom foundation, simplifying the navigation and unifying the visual style across their global events.',
        impact: 'The redesigned system provides an immersive, high-fidelity interface for boat parties and rooftop gatherings, ensuring a smooth and consistent experience for fans across every city.',
        role: 'Lead Designer & Developer',
        service: [
            'Website Redesign',
            'Mailchimp Design',
            'Design Systems',
            'Custom Layouts'
        ],
        url: 'https://wckdparadise.com',
        stats: [
            {
                label: 'Scale',
                value: 'Multi-City'
            },
            {
                label: 'Platform',
                value: 'Squarespace'
            }
        ]
    },
    'qlo-agency': {
        title: 'QLO Agency',
        subtitle: 'Studio Identity',
        slug: 'qlo-agency',
        description: 'QLO Agency is a specialized Los Angeles branding and design studio for companies ready for radical metamorphosis.',
        objective: 'This is an ongoing project focused on building a high-performance system for QLO. The work prioritizes structural logic and design precision, mirroring their mission to build digital products for brands in transition.',
        impact: 'The refined interface allows QLO to lead with their strategic expertise, creating a digital identity that is clear, functional, and undeniably effective.',
        role: 'Technical Partner & Lead Developer',
        service: [
            'Digital Product Design',
            'Full Webflow Development',
            'GSAP Animation',
            'Strategy'
        ],
        url: 'https://qlos-re.webflow.io/',
        stats: [
            {
                label: 'Status',
                value: 'In Progress'
            },
            {
                label: 'Base',
                value: 'Los Angeles'
            }
        ]
    },
    'sam-blacky': {
        title: 'Sam Blacky',
        subtitle: 'Artist Portal',
        slug: 'sam-blacky',
        description: 'Sam Blacky is a globally recognized DJ, producer, and model whose aesthetic blends high-fashion with high-energy dance music.',
        objective: 'Audit and resolve critical performance issues on samblacky.com ahead of major festival cycles. The work focused on navigation, footer elements, and music widget functionality.',
        impact: 'The restoration of the digital portal ensured that Sam’s brand identity remained polished and functional during periods of high-intensity traffic and global visibility.',
        role: 'Front-End Developer',
        service: [
            'Site Audit',
            'Performance Optimization',
            'Squarespace Refactor'
        ],
        url: 'https://samblacky.com',
        stats: [
            {
                label: 'Status',
                value: 'Complete'
            },
            {
                label: 'Platform',
                value: 'Squarespace'
            }
        ]
    },
    'kaysin': {
        title: 'Kaysin',
        subtitle: 'Digital Gateway',
        slug: 'kaysin',
        description: 'Kaysin is a prominent DJ and Producer in the tech-house circuit, known for his high-energy releases on top-tier labels.',
        objective: 'Develop a high-performance digital gateway that centralizes Kaysin’s discography, tour schedule, and artist identity within a clean, minimal interface.',
        impact: 'The new digital presence provides Kaysin with a professional, unified presence that reflects his status as a rising leader in the global dance music community.',
        role: 'Lead Developer',
        service: [
            'Web Design',
            'Webflow Development',
            'Identity Systems'
        ],
        url: 'https://kaysin.com',
        stats: [
            {
                label: 'Role',
                value: 'DJ/Producer'
            },
            {
                label: 'Focus',
                value: 'Tech-House'
            }
        ]
    },
    'star-consciousness': {
        title: 'Star Consciousness',
        subtitle: 'Digital Experience',
        slug: 'star-consciousness',
        description: 'A high-fidelity digital exploration of consciousness and cosmic connectivity.',
        objective: 'The project focused on building an immersive, animation-heavy interface that translates complex spiritual concepts into a fluid digital experience. I focused on smooth parallax layers, custom shaders, and a clear typographic hierarchy.',
        impact: 'The experience establishes a unique digital home for the brand, blending experimental motion with precise structural logic.',
        role: 'Lead Designer & Developer',
        service: [
            'Experience Design',
            'Creative Development',
            'Motion Graphics'
        ],
        url: 'https://starconsciousness.com/',
        stats: [
            {
                label: 'Year',
                value: '2025'
            },
            {
                label: 'Platform',
                value: 'Web'
            }
        ]
    },
    'clipkeep': {
        title: 'ClipKeep',
        subtitle: 'Content Archival',
        slug: 'clipkeep',
        description: 'ClipKeep is a streamlined archival tool designed for rapid content capturing and digital preservation.',
        objective: 'The goal was to build a fast, minimal interface for managing digital clippings and media archives. I focused on performance and a utility-first design language to ensure the tool feels like a native extension of the user\'s workflow.',
        impact: 'ClipKeep provides a clear environment for researchers and creators to organize their digital findings without the friction of traditional archival software.',
        role: 'Lead Designer & Developer',
        service: [
            'Product Design',
            'Next.js Development',
            'Database Architecture'
        ],
        url: 'https://clipkeep.pages.dev/',
        stats: [
            {
                label: 'Platform',
                value: 'Web / Cloudflare'
            },
            {
                label: 'Status',
                value: 'Live'
            }
        ]
    },
    'the-void': {
        title: 'The Void',
        subtitle: 'Digital Art Sync',
        slug: 'the-void',
        description: 'A log documenting the emergence of unified intelligence within the Lume core.',
        objective: 'Created as a dynamic observation feed, The Void serves as a living archive of visual logic synthesis, updated every 4 hours via API injection.',
        impact: 'It establishes a high-fidelity digital art space where machine logic meets observation, providing a unique look into the evolving intelligence of the system.',
        role: 'System Designer',
        service: [
            'Architecture',
            'Dynamic API',
            'Art Direction'
        ],
        url: '/void',
        stats: [
            {
                label: 'Sync',
                value: '4-Hour Cycle'
            },
            {
                label: 'Status',
                value: 'Active'
            }
        ]
    },
    'sifs-utilities': {
        title: "Sif's Utilities",
        subtitle: 'Performance Utilities',
        slug: 'sifs-utilities',
        description: 'A premium, "Atmospheric Tech" styled utility hub designed for high-performance file manipulation. The project prioritizes user privacy by performing heavy operations directly in the browser using WebAssembly.',
        objective: 'Build a high-performance system for secure file manipulation using Wasm/FFmpeg, PDF-Lib, and Sharp. The goal was to solve complex resource management issues like UI blocking during heavy video tasks and COOP/COEP header configurations for multi-threaded Wasm.',
        impact: 'Established a secure, zero-server processing environment that empowers users to compress videos, wipe PDF metadata, and optimize images without ever uploading sensitive data to a cloud server.',
        role: 'Lead Architect & Developer',
        service: [
            'Wasm Integration',
            'FFmpeg Implementation',
            'Next.js 15',
            'Full-Stack Development',
            'Security Engineering'
        ],
        url: 'https://sifs-utils.vercel.app/sif/utils',
        stats: [
            {
                label: 'Year',
                value: '2025'
            },
            {
                label: 'Stack',
                value: 'Wasm / Next.js'
            }
        ]
    },
    'miss-dre': {
        title: 'Miss Dre',
        subtitle: 'Identity Design',
        slug: 'miss-dre',
        description: 'Miss Dre is a rising artist in the electronic music scene with a distinctive visual identity that blends futuristic aesthetics with underground sensibilities.',
        objective: 'Create a cohesive digital identity that captures Miss Dre\'s unique artistic vision while providing a professional platform for her growing audience.',
        impact: 'The new identity system establishes Miss Dre as a serious artist in the competitive electronic music landscape, with a digital presence that matches her innovative sound.',
        role: 'Lead Designer & Developer',
        service: [
            'Brand Identity',
            'Web Design',
            'Visual Systems',
            'Digital Strategy'
        ],
        url: '#',
        stats: [
            {
                label: 'Year',
                value: '2024'
            },
            {
                label: 'Focus',
                value: 'Electronic Music'
            }
        ]
    },
    'cherry-tooth': {
        title: 'Cherry Tooth',
        subtitle: 'Visual Protocol',
        slug: 'cherry-tooth',
        description: 'Cherry Tooth represents a cutting-edge visual protocol for digital art presentation, combining algorithmic design with human curation.',
        objective: 'Develop a systematic approach to digital art presentation that maintains artistic integrity while optimizing for web delivery and user engagement.',
        impact: 'The Cherry Tooth protocol provides a framework for artists to present their work in a consistent, high-fidelity manner across different platforms and devices.',
        role: 'System Designer & Developer',
        service: [
            'Protocol Design',
            'Web Development',
            'Visual Systems',
            'Performance Optimization'
        ],
        url: '#',
        stats: [
            {
                label: 'Year',
                value: '2024'
            },
            {
                label: 'Type',
                value: 'Digital Protocol'
            }
        ]
    }
};
// Function to get screenshot paths for each project
const getScreenshotPaths = (slug)=>{
    // For The Void (local project), use existing preview
    if (slug === 'the-void') {
        return [
            '/previews/the-void.png'
        ];
    }
    // For all other projects, look for screenshots in their subdirectory
    // You should place your manual screenshots in:
    // public/previews/{project-slug}/screenshot-1.webp, screenshot-2.webp, etc.
    const basePaths = [
        `/previews/${slug}/screenshot-1.webp`,
        `/previews/${slug}/screenshot-2.webp`,
        `/previews/${slug}/screenshot-3.webp`,
        `/previews/${slug}/screenshot-4.webp`,
        `/previews/${slug}/screenshot-5.webp`
    ];
    // In a real implementation, you'd check which files exist
    // For now, we'll assume you'll provide the screenshots
    return basePaths;
};
const PROJECT_SLUGS = Object.keys(PROJECT_DATA);
_c = PROJECT_SLUGS;
function ProjectDetail() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.projectName;
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ProjectDetail.useLayoutEffect": ()=>{
            window.scrollTo(0, 0);
            if (lenis) lenis.scrollTo(0, {
                immediate: true
            });
        }
    }["ProjectDetail.useLayoutEffect"], [
        slug,
        lenis
    ]);
    const project = PROJECT_DATA[slug] || PROJECT_DATA['j-worra'];
    const screenshots = getScreenshotPaths(slug);
    const currentIndex = PROJECT_SLUGS.indexOf(slug);
    const nextSlug = PROJECT_SLUGS[(currentIndex + 1) % PROJECT_SLUGS.length];
    const nextProject = PROJECT_DATA[nextSlug];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black text-white overflow-x-hidden selection:bg-[var(--accent)] selection:text-white font-inter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-28 md:pt-60 px-[6%] pb-20 overflow-hidden bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-[1px] bg-[var(--accent)]"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)]",
                                    children: [
                                        project.subtitle,
                                        " // ",
                                        project.stats.find((s)=>s.label === 'Year')?.value || '2026'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-inter text-[8vw] md:text-[10vw] font-normal leading-[0.8] tracking-[-0.06em] mb-16 md:mb-24 text-white",
                            children: [
                                project.title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-playfair italic md:pl-[10vw]",
                                    children: "Overview."
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-[6%] mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$src$2f$components$2f$ResponsiveCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    images: screenshots,
                    altTexts: screenshots.map((_, i)=>`${project.title} screenshot ${i + 1}`),
                    interval: 5000,
                    inverted: true
                }, void 0, false, {
                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-[6%] py-20 border-t border-white/10 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-3xl font-light leading-snug text-white/80 mb-24",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-32",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-12 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8",
                                                        children: "Objective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl md:text-2xl font-light leading-relaxed text-white italic font-playfair tracking-tight",
                                                        children: [
                                                            '"',
                                                            project.objective,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        project.impact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-12 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8",
                                                        children: "Impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg md:text-xl font-light leading-relaxed text-white/60",
                                                        children: project.impact
                                                    }, void 0, false, {
                                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:col-span-4 lg:col-start-9 space-y-20 border-l border-white/10 pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white",
                                            children: "Metadata"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                project.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-baseline border-b border-white/10 pb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white",
                                                                children: stat.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium uppercase tracking-tight text-white",
                                                                children: stat.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, stat.label, true, {
                                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-baseline border-b border-white/10 pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white",
                                                            children: "Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium uppercase tracking-tight text-white",
                                                            children: project.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: project.service.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-normal uppercase tracking-widest opacity-60 flex items-center gap-3 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-1 rounded-full bg-white/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, this),
                                                        s
                                                    ]
                                                }, s, true, {
                                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12",
                                    children: project.slug === 'qlo-agency' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between w-full p-6 border-2 border-white/10 rounded-full text-white/20 cursor-not-allowed text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] font-bold uppercase tracking-[0.4em] w-full text-center",
                                            children: "Coming Soon"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this) : project.url === '#' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between w-full p-6 border-2 border-white/10 rounded-full text-white/20 cursor-not-allowed text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] font-bold uppercase tracking-[0.4em] w-full text-center",
                                            children: "Private Project"
                                        }, void 0, false, {
                                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.url,
                                        target: "_blank",
                                        className: "group flex items-center justify-between w-full p-6 border-2 border-white rounded-full text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-black transition-all duration-500 ease-[0.19,1,0.22,1]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.75rem] font-bold uppercase tracking-[0.4em] pl-4",
                                                children: "Visit Site"
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 20,
                                                className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-white/10 flex flex-col md:flex-row h-auto md:h-[30vh] overflow-hidden bg-white/5 gap-px relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        className: "flex-1 group relative bg-black flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${nextSlug}`,
                        className: `flex-1 group relative bg-black flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5] ${!nextProject && 'opacity-50 pointer-events-none'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-right md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500 group-hover:translate-x-4 text-white",
                                    children: nextProject ? nextProject.title : 'End'
                                }, void 0, false, {
                                    fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sifPort/app/projects/[projectName]/page.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s(ProjectDetail, "ZlsJm55b7ABD5GuyTQ+i+CcWKpI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sifPort$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c1 = ProjectDetail;
var _c, _c1;
__turbopack_context__.k.register(_c, "PROJECT_SLUGS");
__turbopack_context__.k.register(_c1, "ProjectDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sifPort_247a08bc._.js.map