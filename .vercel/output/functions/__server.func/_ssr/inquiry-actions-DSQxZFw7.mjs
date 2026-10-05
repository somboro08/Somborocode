import { F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { a as inquiryStatusSchema, i as authMiddleware, o as projectInquirySchema, r as appointmentInquirySchema } from "./inquiry-schema-DFALNCQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-actions-DSQxZFw7.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitProjectInquiry = createServerFn({ method: "POST" }).validator(projectInquirySchema).handler(createSsrRpc("a150aebad822a60b1ff1c63466036a7813258a3389c7b51e3e879179029b728e"));
var submitAppointmentInquiry = createServerFn({ method: "POST" }).validator(appointmentInquirySchema).handler(createSsrRpc("edada02ad3c0112e41e1ddba061622809424d5cfff0a8b8e5c71010122aa2601"));
var listInquiries = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("c40268e4b2ac01ab5938782d5e5a37acf2ba4162ada26156a3fe733ba2fb3ae1"));
var getInquiry = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator(object({ id: string().min(1).max(64) })).handler(createSsrRpc("24f1c1ecd551b3449f4c51c86498bca0f89d49d428e13d3c7c2d05f345512569"));
var updateInquiryStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	status: inquiryStatusSchema
})).handler(createSsrRpc("ce7866797fd2e1504db618ec01231977b82a511e138b74126cbc350d111bfd1b"));
var addInquiryNote = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	body: string().trim().min(1).max(4e3)
})).handler(createSsrRpc("eeebd6128653a959b67242a493e96fa403f4ae6bc70000ae304afc4a1b017fb4"));
var deleteInquiry = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1).max(64) })).handler(createSsrRpc("80a50f7acc757650c49a4b309fe04e32b849b922d3996b7aa3073d090e338fc6"));
//#endregion
export { submitAppointmentInquiry as a, listInquiries as i, deleteInquiry as n, submitProjectInquiry as o, getInquiry as r, updateInquiryStatus as s, addInquiryNote as t };
