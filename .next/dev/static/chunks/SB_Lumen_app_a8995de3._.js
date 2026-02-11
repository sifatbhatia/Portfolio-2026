(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SB/Lumen/app/components/GlobalNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalNavbar,
    "navLinks",
    ()=>navLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navLinks = [
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Studio',
        href: '/about'
    },
    {
        name: 'Pulse',
        href: '/pulse'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];
function GlobalNavbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-[6%] py-6 md:py-8 mix-blend-difference text-white pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "font-bold tracking-tighter text-lg md:text-xl no-underline text-white hover:opacity-50 transition-opacity pointer-events-auto",
                        children: "SIFTION"
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden md:flex gap-12 text-[0.7rem] font-medium uppercase tracking-[0.2em] pointer-events-auto",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "no-underline text-white hover:text-[var(--accent)] transition-colors",
                                    children: link.name
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            }, link.name, false, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        whileTap: {
                            scale: 0.95
                        },
                        className: "md:hidden z-[110] text-[0.6rem] font-medium uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full cursor-pointer relative overflow-hidden group min-w-[80px] flex justify-center items-center h-8 pointer-events-auto bg-white/10 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    y: isMenuOpen ? -40 : 0,
                                    opacity: isMenuOpen ? 0 : 1
                                },
                                className: "block mix-blend-difference",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    y: 40,
                                    opacity: 0
                                },
                                animate: {
                                    y: isMenuOpen ? 0 : 40,
                                    opacity: isMenuOpen ? 1 : 0
                                },
                                className: "absolute block text-black font-bold flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    "Close"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "fixed inset-0 z-[100] bg-[#050505] text-white p-[6%] pt-32 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-8",
                            children: navLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: i * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "text-5xl font-normal tracking-tight no-underline text-white hover:italic hover:text-[var(--accent)] transition-all",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto border-t border-white/10 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 mb-2 text-white",
                                    children: "Available for projects"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:hello@siftion.pages.dev",
                                    className: "text-xl font-bold hover:text-[var(--accent)] transition-colors text-white",
                                    children: "hello@siftion.pages.dev"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/components/GlobalNavbar.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GlobalNavbar, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = GlobalNavbar;
var _c;
__turbopack_context__.k.register(_c, "GlobalNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SB/Lumen/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Footer() {
    _s();
    const currentYear = new Date().getFullYear();
    const [currentTime, setCurrentTime] = __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black text-white w-full relative overflow-hidden border-t border-white/5 pt-24 md:pt-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-[6%] relative z-10 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl md:text-[8vw] font-normal tracking-tighter leading-[0.8] uppercase text-white",
                        children: [
                            "Let's create ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32 md:mb-48 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:sifatbht@gmail.com",
                                className: "group flex flex-col no-underline text-white w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-4 group-hover:opacity-100 transition-opacity",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl md:text-5xl font-normal hover:text-[var(--accent)] transition-colors border-b-2 border-black/5 pb-2",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20 mb-6 block",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-4 flex flex-col gap-8 md:items-end text-left md:text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20",
                                            children: "Current Time"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center md:justify-end gap-3 opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    size: 14,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl md:text-2xl font-medium tracking-tight uppercase",
                                                    children: [
                                                        currentTime,
                                                        " PST"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-20",
                                            children: "System Status"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-40",
                                            children: "EST. 2026 // LUME 2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 14
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-t border-white/10 gap-8 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8 md:gap-16 text-[0.65rem] font-bold uppercase tracking-[0.4em] opacity-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: "Based in Los Angeles"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/components/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Footer, "k0ffgPJ2sZXf+hI6VMRnlXj8X/8=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SB/Lumen/app/projects/[projectName]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/app/components/GlobalNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SB/Lumen/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
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
        image: '/previews/j-worra.png',
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
        image: '/previews/l-affaire-musicale.png',
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
        image: '/previews/wicked-paradise.png',
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
        image: '/previews/qlo-agency.png',
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
        image: '/previews/sam-blacky.png',
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
        image: '/previews/kaysin.png',
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
        image: '/previews/star-consciousness.png',
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
        image: '/previews/clipkeep.png',
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
        description: 'A log documenting the emergence of unified intelligence within the Lumen core.',
        objective: 'Created as a dynamic observation feed, The Void serves as a living archive of visual logic synthesis, updated every 4 hours via API injection.',
        impact: 'It establishes a high-fidelity digital art space where machine logic meets observation, providing a unique look into the evolving intelligence of the system.',
        role: 'System Designer',
        service: [
            'Architecture',
            'Dynamic API',
            'Art Direction'
        ],
        url: '/void',
        image: '/previews/the-void.png',
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
    }
};
const PROJECT_SLUGS = Object.keys(PROJECT_DATA).filter(_c = (slug)=>PROJECT_DATA[slug].image);
_c1 = PROJECT_SLUGS;
function ProjectDetail() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.projectName;
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
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
    const currentIndex = PROJECT_SLUGS.indexOf(slug);
    const nextSlug = PROJECT_SLUGS[(currentIndex + 1) % PROJECT_SLUGS.length];
    const nextProject = PROJECT_DATA[nextSlug];
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const yImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -200
    ]);
    const scaleImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        1.1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[var(--accent)] selection:text-white font-inter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$GlobalNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-28 md:pt-60 px-[6%] pb-20 overflow-hidden bg-[#050505]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-8 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-[1px] bg-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)]",
                                        children: [
                                            project.subtitle,
                                            " // 2026"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-inter text-[10vw] md:text-[12vw] font-normal leading-[0.8] tracking-[-0.06em] mb-20 md:mb-32 text-white",
                                children: [
                                    project.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-playfair italic md:pl-[12vw]",
                                        children: "Overview."
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-[6%] mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        margin: "-100px",
                        once: true
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
                    className: "relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-neutral-900",
                    children: project.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project.image,
                        alt: "Project Showcase",
                        className: "w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity duration-1000 group-hover:scale-[1.01]"
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                        lineNumber: 229,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-2 border-white/5 rounded-full animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                            lineNumber: 232,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                        lineNumber: 231,
                        columnNumber: 14
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-[6%] py-20 border-t border-white/10 bg-[#050505]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-3xl font-light leading-snug text-white/80 mb-24",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-32",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-12 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8",
                                                        children: "Objective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl md:text-2xl font-light leading-relaxed text-white italic font-playfair tracking-tight",
                                                        children: [
                                                            '"',
                                                            project.objective,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        project.impact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-12 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[0.7rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-8",
                                                        children: "Impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-12 md:col-span-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg md:text-xl font-light leading-relaxed text-white/60",
                                                        children: project.impact
                                                    }, void 0, false, {
                                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:col-span-4 lg:col-start-9 space-y-20 border-l border-white/10 pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white",
                                            children: "Metadata"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                project.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-baseline border-b border-white/10 pb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white",
                                                                children: stat.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium uppercase tracking-tight text-white",
                                                                children: stat.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, stat.label, true, {
                                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-baseline border-b border-white/10 pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[0.6rem] font-bold uppercase tracking-widest opacity-30 text-white",
                                                            children: "Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium uppercase tracking-tight text-white",
                                                            children: project.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 text-white",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: project.service.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-normal uppercase tracking-widest opacity-60 flex items-center gap-3 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-1 rounded-full bg-white/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        s
                                                    ]
                                                }, s, true, {
                                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12",
                                    children: project.slug === 'qlo-agency' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between w-full p-6 border-2 border-white/10 rounded-full text-white/20 cursor-not-allowed text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[0.75rem] font-bold uppercase tracking-[0.4em] w-full text-center",
                                            children: "Coming Soon"
                                        }, void 0, false, {
                                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.url,
                                        target: "_blank",
                                        className: "group flex items-center justify-between w-full p-6 border-2 border-white rounded-full text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-500 ease-[0.19,1,0.22,1]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.75rem] font-bold uppercase tracking-[0.4em] pl-4",
                                                children: "Visit Site"
                                            }, void 0, false, {
                                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 20,
                                                className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-white/10 flex flex-col md:flex-row h-auto md:h-[30vh] overflow-hidden bg-white/5 gap-px relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        className: "flex-1 group relative bg-[#050505] flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${nextSlug}`,
                        className: `flex-1 group relative bg-[#050505] flex flex-col justify-center px-[6%] py-12 no-underline text-white transition-all duration-[1.2s] ease-[0.19, 1, 0.22, 1] hover:flex-[1.5] ${!nextProject && 'opacity-50 pointer-events-none'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-right md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[var(--accent)] mb-4 block opacity-40 group-hover:opacity-100 transition-opacity",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-6xl font-normal tracking-tighter leading-none group-hover:italic group-hover:text-[var(--accent)] transition-all duration-500 group-hover:translate-x-4 text-white",
                                    children: nextProject ? nextProject.title : 'End'
                                }, void 0, false, {
                                    fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SB/Lumen/app/projects/[projectName]/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(ProjectDetail, "de8GN93FifFnWboEugo2Zc5zwdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$SB$2f$Lumen$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = ProjectDetail;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PROJECT_SLUGS$Object.keys(PROJECT_DATA).filter");
__turbopack_context__.k.register(_c1, "PROJECT_SLUGS");
__turbopack_context__.k.register(_c2, "ProjectDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SB_Lumen_app_a8995de3._.js.map