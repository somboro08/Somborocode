import { r as cn } from "./logo-DYH6tV80.mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-CT4gVS9K.js
var import_jsx_runtime = require_jsx_runtime();
function Field({ label, htmlFor, hint, error, optional, children }) {
	const describedBy = [hint ? `${htmlFor}-hint` : null, error ? `${htmlFor}-error` : null].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor,
				className: "flex items-baseline justify-between gap-3 text-sm font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), optional ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-normal text-current/45",
					children: "Facultatif"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn(describedBy && "contents"),
				children
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${htmlFor}-hint`,
				className: "text-sm text-current/55",
				children: hint
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${htmlFor}-error`,
				role: "alert",
				className: "text-sm text-danger",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				"data-describedby": describedBy
			})
		]
	});
}
var controlClass = "h-12 w-full rounded-md border border-current/15 bg-current/4 px-3.5 text-base text-current outline-none transition-[border-color,background-color] duration-150 placeholder:text-current/35 hover:border-current/25 focus:border-lime/70 focus:bg-current/6";
function TextInput({ error, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(controlClass, error && "border-danger/60", className),
		"aria-invalid": error ? true : void 0,
		"aria-describedby": [props.id && error ? `${props.id}-error` : null].filter(Boolean).join(" ") || void 0,
		...props
	});
}
function TextArea({ error, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(controlClass, "h-auto min-h-36 rounded-lg py-3 leading-relaxed", error && "border-danger/60", className),
		"aria-invalid": error ? true : void 0,
		"aria-describedby": [props.id && error ? `${props.id}-error` : null].filter(Boolean).join(" ") || void 0,
		...props
	});
}
function SelectInput({ error, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(controlClass, error && "border-danger/60", className),
		"aria-invalid": error ? true : void 0,
		...props,
		children
	});
}
function Honeypot({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: "fax_number",
			children: "Fax"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "fax_number",
			name: "faxNumber",
			type: "text",
			tabIndex: -1,
			autoComplete: "off",
			value,
			onChange: (event) => onChange(event.target.value)
		})]
	});
}
//#endregion
export { TextInput as a, TextArea as i, Honeypot as n, SelectInput as r, Field as t };
