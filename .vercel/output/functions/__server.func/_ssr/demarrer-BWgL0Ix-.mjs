import { o as __toESM } from "../_runtime.mjs";
import { i as CONTACT_PREFERENCES, r as BUDGET_OPTIONS, s as NEED_TYPES } from "./site-pmmYHv-i.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as SiteShell, r as Route$11, s as Button } from "./router-pb1-4auf.mjs";
import { o as projectInquirySchema, t as DESCRIPTION_MAX } from "./inquiry-schema-DFALNCQ6.mjs";
import { a as TextInput, i as TextArea, n as Honeypot, r as SelectInput, t as Field } from "./field-CT4gVS9K.mjs";
import { o as submitProjectInquiry } from "./inquiry-actions-DSQxZFw7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demarrer-BWgL0Ix-.js
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
function ProjectForm({ presetNeed }) {
	const initialNeed = NEED_TYPES.some((item) => item.value === presetNeed) ? presetNeed : "indetermine";
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		organization: "",
		needType: initialNeed,
		description: "",
		objective: "",
		timeline: "",
		budget: "indetermine",
		contactPreference: "email",
		consent: false,
		faxNumber: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)(null);
	const remaining = DESCRIPTION_MAX - values.description.length;
	const timezoneHint = (0, import_react.useMemo)(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
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
		const parsed = projectInquirySchema.safeParse({
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
			await submitProjectInquiry({ data: parsed.data });
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
				children: "Merci, votre message est bien arrivé."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl leading-relaxed text-mist",
				children: "Votre demande a bien été transmise à Somboro-code. Elle ne vaut pas encore devis ni engagement ; les prochaines étapes seront précisées après examen de votre besoin."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-mist",
				children: [
					"Fuseau détecté sur cet appareil : ",
					timezoneHint,
					". Aucun e-mail de confirmation n’est envoyé tant qu’un service d’envoi n’est pas configuré."
				]
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
						to: "/rendez-vous",
						children: "Demander un rendez-vous"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nom",
					htmlFor: "name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "name",
						name: "name",
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
						name: "email",
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
					error: errors.phone,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "phone",
						name: "phone",
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
						name: "organization",
						autoComplete: "organization",
						value: values.organization,
						onChange: (event) => update("organization", event.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Type de besoin",
				htmlFor: "needType",
				error: errors.needType,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
					id: "needType",
					name: "needType",
					value: values.needType,
					error: errors.needType,
					onChange: (event) => update("needType", event.target.value),
					children: NEED_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item.value,
						children: item.label
					}, item.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Description du projet et du résultat recherché",
				htmlFor: "description",
				error: errors.description,
				hint: `${remaining} caractères restants`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "description",
					name: "description",
					required: true,
					maxLength: DESCRIPTION_MAX,
					value: values.description,
					error: errors.description,
					onChange: (event) => update("description", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Objectif principal ou problème à résoudre",
				htmlFor: "objective",
				optional: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					id: "objective",
					name: "objective",
					maxLength: 1e3,
					className: "min-h-24",
					value: values.objective,
					onChange: (event) => update("objective", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Échéance souhaitée",
					htmlFor: "timeline",
					optional: true,
					hint: "Une date souhaitée n’est pas une promesse de livraison.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						id: "timeline",
						name: "timeline",
						value: values.timeline,
						onChange: (event) => update("timeline", event.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Budget estimatif",
					htmlFor: "budget",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
						id: "budget",
						name: "budget",
						value: values.budget,
						onChange: (event) => update("budget", event.target.value),
						children: BUDGET_OPTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.value,
							children: item.label
						}, item.value))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Préférence de contact",
				htmlFor: "contactPreference",
				optional: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
					id: "contactPreference",
					name: "contactPreference",
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
					"J’accepte que ces informations soient utilisées pour traiter ma demande et me répondre. Consultez la",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: status === "submitting",
					children: status === "submitting" ? "Envoi en cours…" : "Envoyer la demande"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: "Aucun compte n’est nécessaire."
				})]
			})
		]
	});
}
function DemarrerPage() {
	const { besoin } = Route$11.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Décrire mon projet",
		title: "Racontez le besoin, pas la solution.",
		description: "Aucun compte n’est demandé. Une demande n’est ni un devis ni un engagement. Les prochaines étapes seront précisées après examen."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap grid gap-10 py-16 lg:grid-cols-[1fr_0.7fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-ink p-5 text-paper sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, { presetNeed: besoin })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl border border-ink/10 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Après l’envoi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-3 text-sm leading-relaxed text-stone",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. La demande est enregistrée de façon durable." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Somboro-code l’examine. Aucun délai de réponse n’est promis." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Les prochaines étapes, s’il y en a, sont précisées ensuite." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-stone",
						children: "Si l’enregistrement échoue, un message d’erreur s’affiche : vous pourrez réessayer. Un succès n’apparaît que si la demande a bien été sauvegardée."
					})
				]
			})]
		})
	})] });
}
//#endregion
export { DemarrerPage as component };
