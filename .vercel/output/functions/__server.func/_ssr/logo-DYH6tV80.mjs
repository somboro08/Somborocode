import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/logo-DYH6tV80.js
var import_jsx_runtime = require_jsx_runtime();
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 3.5h12.2L28.5 11.8V24c0 2.5-2 4.5-4.5 4.5H8C5.5 28.5 3.5 26.5 3.5 24V8C3.5 5.5 5.5 3.5 8 3.5Z",
			fill: "currentColor",
			className: "text-lime"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 11.2h6.4c1.7 0 2.8 1 2.8 2.5 0 1.1-.6 1.9-1.6 2.3 1.3.4 2.1 1.3 2.1 2.6 0 1.8-1.4 3-3.4 3H11V11.2Zm3.1 4.15h2.9c.7 0 1.15-.35 1.15-.9s-.45-.9-1.15-.9h-2.9v1.8Zm0 4.55h3.35c.8 0 1.3-.4 1.3-1.05s-.5-1.05-1.3-1.05H14.1v2.1Z",
			fill: "currentColor",
			className: "text-lime-ink"
		})]
	});
}
function Logo({ className, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group inline-flex items-center gap-2.5 rounded-full pr-2 focus-visible:outline-lime", className),
		"aria-label": "Somboro-code, accueil",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display text-[1.05rem] font-semibold tracking-[-0.03em]", inverted ? "text-ink" : "text-paper"),
			children: "Somboro-code"
		})]
	});
}
//#endregion
export { Logo as n, cn as r, BrandMark as t };
