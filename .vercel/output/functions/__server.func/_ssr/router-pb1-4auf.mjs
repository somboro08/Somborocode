import { o as __toESM } from "../_runtime.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { F as object, M as literal, P as number, R as string, z as union } from "../_libs/@better-auth/core+[...].mjs";
import { n as auth } from "./server-BVbbReNd.mjs";
import { c as PAGE_META, n as BRAND_NAME, o as NAV } from "./site-pmmYHv-i.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as Logo, r as cn, t as BrandMark } from "./logo-DYH6tV80.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, w as require_jsx_runtime, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as TriangleAlert, s as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DnIRynv4.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,border-color,color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime", {
	variants: {
		variant: {
			lime: "bg-lime text-lime-ink hover:bg-lime/90",
			paper: "bg-paper text-ink hover:bg-paper/90",
			outline: "border border-current/20 bg-transparent text-current hover:border-current/40 hover:bg-current/5",
			ghost: "bg-transparent text-current hover:bg-current/8",
			ink: "bg-ink text-paper hover:bg-ink-soft"
		},
		size: {
			md: "h-11 min-h-11 rounded-full px-5 text-[0.9375rem]",
			lg: "h-12 min-h-12 rounded-full px-6 text-base",
			sm: "h-10 min-h-10 rounded-full px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "lime",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-lbymUqLv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-paper/10 bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap-wide grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-semibold tracking-[-0.03em]",
						children: BRAND_NAME
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.95rem] leading-relaxed text-mist",
					children: "Agence de solutions numériques. Nous étudions votre besoin avant de proposer un site, une application ou un autre outil, sans promesse de résultat automatique."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-mist",
					children: "Parcours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-lime",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/approche",
							className: "hover:text-lime",
							children: "Approche"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demarrer",
							className: "hover:text-lime",
							children: "Décrire mon projet"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rendez-vous",
							className: "hover:text-lime",
							children: "Demander un rendez-vous"
						}) })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-mist",
					children: "Informations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/confidentialite",
							className: "hover:text-lime",
							children: "Confidentialité"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mentions-legales",
							className: "hover:text-lime",
							children: "Mentions légales"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/conditions",
							className: "hover:text-lime",
							children: "Conditions d’utilisation"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/equipe",
							className: "hover:text-lime",
							children: "Espace équipe"
						}) })
					]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap-wide flex flex-col gap-2 border-t border-paper/8 py-5 text-xs text-mist sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				BRAND_NAME,
				". Tous droits réservés."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Textes et pages préparés pour une publication après validation des informations légales." })]
		})]
	});
}
function SiteHeader({ surface = "ink" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const panelId = (0, import_react.useId)();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const inverted = surface === "paper";
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b backdrop-blur-md", inverted ? "border-ink/8 bg-paper/90 text-ink" : "border-paper/8 bg-ink/85 text-paper"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap-wide flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Navigation principale",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150", inverted ? "hover:bg-ink/6" : "hover:bg-paper/8"),
						activeProps: { className: inverted ? "bg-ink/8" : "bg-paper/10" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: inverted ? "ink" : "lime",
						size: "sm",
						className: "px-3.5 text-[0.8125rem] sm:px-4 sm:text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/demarrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "Mon projet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Parler de mon projet"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-full border border-current/15 lg:hidden",
						"aria-expanded": open,
						"aria-controls": panelId,
						onClick: () => setOpen((value) => !value),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							strokeWidth: 1.6
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							strokeWidth: 1.6
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Fermer le menu" : "Ouvrir le menu"
						})]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: panelId,
			className: cn("border-t lg:hidden", inverted ? "border-ink/8 bg-paper" : "border-paper/8 bg-ink"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "page-wrap-wide grid gap-1 py-4",
				"aria-label": "Menu mobile",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "rounded-md px-3 py-3 text-base font-medium hover:bg-current/6",
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rendez-vous",
						className: "rounded-md px-3 py-3 text-base font-medium hover:bg-current/6",
						children: "Demander un rendez-vous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: inverted ? "ink" : "lime",
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demarrer",
							children: "Parler de mon projet"
						})
					})
				]
			})
		}) : null]
	});
}
function SiteShell({ children, surface = "ink" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenu",
				className: "skip-link",
				children: "Aller au contenu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { surface }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "contenu",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "code-veil pointer-events-none absolute inset-0 opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap relative grid gap-6 py-16 sm:py-20 md:py-24",
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-lime",
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-4xl font-display text-[clamp(2rem,1.2rem+4vw,3.6rem)] font-semibold tracking-[-0.035em]",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg leading-relaxed text-mist",
					children: description
				}),
				children
			]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-pb1-4auf.js
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-wrap grid min-h-[60vh] place-content-center gap-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-lime",
				children: "Erreur 404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "max-w-xl font-display text-4xl tracking-[-0.035em] sm:text-5xl",
				children: "Cette page n’est pas sur le chemin."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-lg text-mist",
				children: "Le lien est peut-être ancien, ou la page n’existe pas. Vous pouvez revenir à l’accueil ou décrire directement votre besoin."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Retour à l’accueil"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demarrer",
						children: "Décrire mon projet"
					})
				})]
			})
		]
	}) });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BlrrhNDW.css";
var APP_NAME = "Somboro-code";
var Route$17 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0B0E0C"
			},
			{
				name: "description",
				content: "Somboro-code accompagne la création de sites web, d’applications et d’autres solutions numériques."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFoundPage,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-DDW5vgyM.mjs");
var Route$16 = createFileRoute("/")({
	head: () => ({ meta: [{ title: PAGE_META.home.title }, {
		name: "description",
		content: PAGE_META.home.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("../_-Cu61J3Rm.mjs");
var Route$15 = createFileRoute("/$")({
	head: () => ({ meta: [
		{ title: PAGE_META.notFound.title },
		{
			name: "description",
			content: PAGE_META.notFound.description
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./approche-BdiZGTZJ.mjs");
var Route$14 = createFileRoute("/approche")({
	head: () => ({ meta: [{ title: PAGE_META.approche.title }, {
		name: "description",
		content: PAGE_META.approche.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./conditions-C07zP15k.mjs");
var Route$13 = createFileRoute("/conditions")({
	head: () => ({ meta: [{ title: PAGE_META.conditions.title }, {
		name: "description",
		content: PAGE_META.conditions.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./confidentialite-eFLSGyJe.mjs");
var Route$12 = createFileRoute("/confidentialite")({
	head: () => ({ meta: [{ title: PAGE_META.confidentialite.title }, {
		name: "description",
		content: PAGE_META.confidentialite.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./demarrer-BWgL0Ix-.mjs");
var Route$11 = createFileRoute("/demarrer")({
	validateSearch: (search) => ({ besoin: typeof search.besoin === "string" ? search.besoin : void 0 }),
	head: () => ({ meta: [
		{ title: PAGE_META.demarrer.title },
		{
			name: "description",
			content: PAGE_META.demarrer.description
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./equipe-DuYQ_O3L.mjs");
var Route$10 = createFileRoute("/equipe")({
	head: () => ({ meta: [
		{ title: PAGE_META.equipe.title },
		{
			name: "description",
			content: PAGE_META.equipe.description
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./login-DY8bw6ol.mjs");
var Route$9 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: PAGE_META.login.title },
		{
			name: "description",
			content: PAGE_META.login.description
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./mentions-legales-De8rDwhq.mjs");
var Route$8 = createFileRoute("/mentions-legales")({
	head: () => ({ meta: [{ title: PAGE_META.mentions.title }, {
		name: "description",
		content: PAGE_META.mentions.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./rendez-vous-BJG0gx0A.mjs");
var Route$7 = createFileRoute("/rendez-vous")({
	head: () => ({ meta: [
		{ title: PAGE_META.rendezVous.title },
		{
			name: "description",
			content: PAGE_META.rendezVous.description
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var BODY$1 = `User-agent: *
Allow: /
Disallow: /equipe
Disallow: /login
Disallow: /api/
Disallow: /sante
Disallow: /demarrer
Disallow: /rendez-vous

# Le fichier sitemap.xml sera publié avec des URL absolues
# après confirmation et contrôle du domaine souhaité (sombrocode.com).
`;
var Route$6 = createFileRoute("/robots.txt")({ server: { handlers: { GET: () => new Response(BODY$1, { headers: {
	"content-type": "text/plain; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var $$splitComponentImporter$3 = () => import("./sante-X-6ikBWT.mjs");
var Route$5 = createFileRoute("/sante")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	server: { handlers: { GET: async () => new Response(JSON.stringify({
		status: "ok",
		service: "somboro-code"
	}), { headers: {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store"
	} }) } }
});
var $$splitComponentImporter$2 = () => import("./services-BbKxyNIO.mjs");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: PAGE_META.services.title }, {
		name: "description",
		content: PAGE_META.services.description
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var BODY = `<?xml version="1.0" encoding="UTF-8"?>
<!-- URL absolues à renseigner après confirmation du domaine (sombrocode.com). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`;
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => new Response(BODY, { headers: {
	"content-type": "application/xml; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var $$splitComponentImporter$1 = () => import("./equipe-DBisR8w_.mjs");
var Route$2 = createFileRoute("/equipe/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_id-ivkp7_FR.mjs");
var Route$1 = createFileRoute("/equipe/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var SplatRoute = Route$15.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$17
});
var ApprocheRoute = Route$14.update({
	id: "/approche",
	path: "/approche",
	getParentRoute: () => Route$17
});
var ConditionsRoute = Route$13.update({
	id: "/conditions",
	path: "/conditions",
	getParentRoute: () => Route$17
});
var ConfidentialiteRoute = Route$12.update({
	id: "/confidentialite",
	path: "/confidentialite",
	getParentRoute: () => Route$17
});
var DemarrerRoute = Route$11.update({
	id: "/demarrer",
	path: "/demarrer",
	getParentRoute: () => Route$17
});
var EquipeRoute = Route$10.update({
	id: "/equipe",
	path: "/equipe",
	getParentRoute: () => Route$17
});
var LoginRoute = Route$9.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$17
});
var MentionsLegalesRoute = Route$8.update({
	id: "/mentions-legales",
	path: "/mentions-legales",
	getParentRoute: () => Route$17
});
var RendezVousRoute = Route$7.update({
	id: "/rendez-vous",
	path: "/rendez-vous",
	getParentRoute: () => Route$17
});
var RobotsDottxtRoute = Route$6.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$17
});
var SanteRoute = Route$5.update({
	id: "/sante",
	path: "/sante",
	getParentRoute: () => Route$17
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$17
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$17
});
var EquipeIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => EquipeRoute
});
var EquipeIdRoute = Route$1.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => EquipeRoute
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$17
});
var EquipeRouteChildren = {
	EquipeIdRoute,
	EquipeIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	ApprocheRoute,
	ConditionsRoute,
	ConfidentialiteRoute,
	DemarrerRoute,
	EquipeRoute: EquipeRoute._addFileChildren(EquipeRouteChildren),
	LoginRoute,
	MentionsLegalesRoute,
	RendezVousRoute,
	RobotsDottxtRoute,
	SanteRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage
	});
}
//#endregion
export { PageHero as a, NotFoundPage as i, Route$1 as n, SiteShell as o, Route$11 as r, Button as s, router_exports as t };
