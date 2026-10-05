import { o as __toESM } from "../_runtime.mjs";
import { i as CONTACT_PREFERENCES, t as APPOINTMENT_MOTIFS } from "./site-pmmYHv-i.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as SiteShell, s as Button } from "./router-pb1-4auf.mjs";
import { r as appointmentInquirySchema } from "./inquiry-schema-DFALNCQ6.mjs";
import { a as TextInput, i as TextArea, n as Honeypot, r as SelectInput, t as Field } from "./field-CT4gVS9K.mjs";
import { a as submitAppointmentInquiry } from "./inquiry-actions-DSQxZFw7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rendez-vous-BJG0gx0A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fieldErrors(error) {
	const map = {};
	if (error && typeof error === "object" && "issues" in error) {
		const issues = error.issues;
		for (const issue of issues) {
			const key = String(issue.path[0] ?? "");
			if (key && !map[key]) map[key] = issue.message;
		}
	}
	return map;
}
function AppointmentForm() {
	const detectedZone = (0, import_react.useMemo)(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", []);
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		organization: "",
		motif: "premier-echange",
		availability: "",
		timezone: detectedZone,
		notes: "",
		contactPreference: "email",
		consent: false,
		faxNumber: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)(null);
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		setStatus("submitting");
		setMessage(null);
		const parsed = appointmentInquirySchema.safeParse({
			...values,
			consent: values.consent ? true : void 0
		});
		if (!parsed.success) {
			setErrors(fieldErrors(parsed.error));
			setStatus("idle");
			return;
		}
		setErrors({});
		try {
			await submitAppointmentInquiry({ data: parsed.data });
			setStatus("success");
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : "L’enregistrement n’a pas abouti. Réessayez dans un moment.");
		}
	}
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-ink-soft p-6 sm:p-8",
		role: "status",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.16em] text-lime",
				children: "Demande transmise"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl tracking-[-0.03em]",
				children: "Votre demande de rendez-vous est enregistrée."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl leading-relaxed text-mist",
				children: "Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après validation par Somboro-code. Aucun rendez-vous n’a été réservé automatiquement."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Retour à l’accueil"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demarrer",
						children: "Décrire un projet"
					})
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "relative grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Honeypot, {
				value: values.faxNumber,
				onChange: (value) => update("faxNumber", value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-lime/25 bg-lime/8 px-4 py-3 text-sm leading-relaxed",
				children: "Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après validation par Somboro-code. Aucun calendrier n’est relié pour l’instant : proposez vos disponibilités, sans les considérer comme réservées."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nom",
					htmlFor: "name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "name",
						autoComplete: "name",
						required: true,
						value: values.name,
						error: errors.name,
						onChange: (event) => update("name", event.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Adresse e-mail",
					htmlFor: "email",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						value: values.email,
						error: errors.email,
						onChange: (event) => update("email", event.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Téléphone",
					htmlFor: "phone",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "phone",
						type: "tel",
						autoComplete: "tel",
						value: values.phone,
						onChange: (event) => update("phone", event.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Organisation ou activité",
					htmlFor: "organization",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "organization",
						autoComplete: "organization",
						value: values.organization,
						onChange: (event) => update("organization", event.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Motif",
				htmlFor: "motif",
				error: errors.motif,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
					id: "motif",
					value: values.motif,
					onChange: (event) => update("motif", event.target.value),
					children: APPOINTMENT_MOTIFS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.value,
						children: item.label
					}, item.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Disponibilités proposées",
				htmlFor: "availability",
				error: errors.availability,
				hint: "Indiquez un ou plusieurs créneaux, par exemple « mardi matin » ou une date et une heure.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "availability",
					required: true,
					value: values.availability,
					error: errors.availability,
					onChange: (event) => update("availability", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Fuseau horaire",
				htmlFor: "timezone",
				error: errors.timezone,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					id: "timezone",
					required: true,
					value: values.timezone,
					error: errors.timezone,
					onChange: (event) => update("timezone", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Précisions utiles",
				htmlFor: "notes",
				optional: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "notes",
					className: "min-h-24",
					value: values.notes,
					onChange: (event) => update("notes", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Préférence de contact",
				htmlFor: "contactPreference",
				optional: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
					id: "contactPreference",
					value: values.contactPreference,
					onChange: (event) => update("contactPreference", event.target.value),
					children: CONTACT_PREFERENCES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.value,
						children: item.label
					}, item.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 rounded-lg border border-paper/12 p-4 text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 size-4 shrink-0 accent-lime",
					checked: values.consent,
					onChange: (event) => update("consent", event.target.checked)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"J’accepte que ces informations soient utilisées pour traiter ma demande de rendez-vous. Consultez la",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/confidentialite",
						className: "underline decoration-lime/70 underline-offset-4",
						children: "politique de confidentialité"
					}),
					"."
				] })]
			}),
			errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: errors.consent
			}) : null,
			status === "error" && message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "rounded-md border border-danger/30 bg-danger/10 px-4 py-3 text-sm",
				children: message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: status === "submitting",
				children: status === "submitting" ? "Envoi en cours…" : "Envoyer la demande de rendez-vous"
			})
		]
	});
}
function RendezVousPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Rendez-vous",
		title: "Proposez un échange, sans réserver un créneau.",
		description: "Il s’agit d’une demande de rendez-vous. Le créneau n’est confirmé qu’après validation par Somboro-code."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-ink p-5 text-paper sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentForm, {})
			})
		})
	})] });
}
//#endregion
export { RendezVousPage as component };
