import { o as __toESM } from "./_runtime.mjs";
import { l as needTypeLabel } from "./_ssr/site-pmmYHv-i.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useNavigate, b as Link, w as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route$1, s as Button } from "./_ssr/router-pb1-4auf.mjs";
import { a as inquiryStatusSchema, n as INQUIRY_STATUS_LABELS } from "./_ssr/inquiry-schema-DFALNCQ6.mjs";
import { i as TextArea, r as SelectInput } from "./_ssr/field-CT4gVS9K.mjs";
import { n as deleteInquiry, r as getInquiry, s as updateInquiryStatus, t as addInquiryNote } from "./_ssr/inquiry-actions-DSQxZFw7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-ivkp7_FR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatDate(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return new Intl.DateTimeFormat("fr-FR", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(date);
}
function EquipeDetailPage() {
	const { id } = Route$1.useParams();
	const navigate = useNavigate();
	const [inquiry, setInquiry] = (0, import_react.useState)(void 0);
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function reload() {
		const data = await getInquiry({ data: { id } });
		setInquiry(data);
	}
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		getInquiry({ data: { id } }).then((data) => {
			if (!cancelled) setInquiry(data);
		}).catch((err) => {
			if (!cancelled) setError(err instanceof Error ? err.message : "Chargement impossible.");
		});
		return () => {
			cancelled = true;
		};
	}, [id]);
	async function onStatus(status) {
		setBusy(true);
		setError(null);
		try {
			await updateInquiryStatus({ data: {
				id,
				status
			} });
			await reload();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Mise à jour impossible.");
		} finally {
			setBusy(false);
		}
	}
	async function onNote(event) {
		event.preventDefault();
		if (!note.trim()) return;
		setBusy(true);
		setError(null);
		try {
			await addInquiryNote({ data: {
				id,
				body: note.trim()
			} });
			setNote("");
			await reload();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Note non enregistrée.");
		} finally {
			setBusy(false);
		}
	}
	async function onDelete() {
		if (!window.confirm("Supprimer définitivement cette demande et ses notes internes ?")) return;
		setBusy(true);
		try {
			await deleteInquiry({ data: { id } });
			await navigate({ to: "/equipe" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Suppression impossible.");
			setBusy(false);
		}
	}
	if (inquiry === void 0 && !error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "page-wrap py-16 text-mist",
		children: "Chargement…"
	});
	if (!inquiry) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Demande introuvable." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/equipe",
			className: "mt-4 inline-block text-lime",
			children: "Retour à la liste"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-wrap grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/equipe",
				className: "text-sm text-mist hover:text-paper",
				children: "← Toutes les demandes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-mono text-xs text-lime",
				children: inquiry.reference
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl",
				children: inquiry.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					inquiry.kind === "appointment" ? "Rendez-vous" : "Projet",
					" ·",
					" ",
					formatDate(inquiry.createdAt)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.email })] }),
					inquiry.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Téléphone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.phone })] }) : null,
					inquiry.organization ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Organisation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.organization })] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Besoin / motif"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.kind === "appointment" ? inquiry.appointmentMotif : needTypeLabel(inquiry.needType) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 whitespace-pre-wrap leading-relaxed",
						children: inquiry.description
					})] }),
					inquiry.objective ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Objectif"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "whitespace-pre-wrap",
						children: inquiry.objective
					})] }) : null,
					inquiry.timeline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Échéance souhaitée"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.timeline })] }) : null,
					inquiry.budget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Budget"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.budget })] }) : null,
					inquiry.availability ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Disponibilités"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "whitespace-pre-wrap",
						children: inquiry.availability
					})] }) : null,
					inquiry.timezone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Fuseau"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.timezone })] }) : null,
					inquiry.contactPreference ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-mist",
						children: "Préférence de contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: inquiry.contactPreference })] }) : null
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-paper/10 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg",
						children: "Statut"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
						className: "mt-3",
						value: inquiry.status,
						disabled: busy,
						onChange: (event) => {
							const parsed = inquiryStatusSchema.safeParse(event.target.value);
							if (parsed.success) onStatus(parsed.data);
						},
						children: Object.keys(INQUIRY_STATUS_LABELS).map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: status,
							children: INQUIRY_STATUS_LABELS[status]
						}, status))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-paper/10 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg",
							children: "Notes internes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-3 text-sm",
							children: inquiry.notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-mist",
								children: "Aucune note."
							}) : inquiry.notes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md bg-paper/5 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-pre-wrap",
									children: item.body
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-mist",
									children: formatDate(item.createdAt)
								})]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onNote,
							className: "mt-4 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: note,
								onChange: (event) => setNote(event.target.value),
								className: "min-h-24 bg-ink-soft",
								maxLength: 4e3
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: busy || !note.trim(),
								size: "sm",
								children: "Ajouter une note"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-danger/30 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg",
							children: "Suppression"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist",
							children: "Pour une demande de rectification ou d’effacement, supprimez définitivement l’enregistrement."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "mt-4 border-danger/40 text-danger",
							disabled: busy,
							onClick: () => void onDelete(),
							children: "Supprimer la demande"
						})
					]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-danger",
					children: error
				}) : null
			]
		})]
	});
}
//#endregion
export { EquipeDetailPage as component };
