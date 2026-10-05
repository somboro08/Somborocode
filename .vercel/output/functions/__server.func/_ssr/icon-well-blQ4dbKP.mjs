import { r as cn } from "./logo-DYH6tV80.mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/icon-well-blQ4dbKP.js
var import_jsx_runtime = require_jsx_runtime();
function IconWell({ icon: Icon, className, tone = "lime" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-12 shrink-0 place-items-center rounded-[14px]", tone === "lime" && "bg-lime text-lime-ink", tone === "ink" && "bg-ink text-lime", tone === "paper" && "bg-ink-soft text-lime", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-5",
			strokeWidth: 1.6
		})
	});
}
//#endregion
export { IconWell as t };
