export const allowedProjectTypes = new Set(["", "Website development / redesign", "Frontend development", "Backend development / APIs", "Full-stack application", "Debugging / maintenance", "Other"]);
export type Enquiry = {name:string;email:string;projectType:string;message:string;company:string};
export function validateEnquiry(input: unknown): {ok:true;value:Enquiry}|{ok:false;message:string} {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {ok:false,message:"Please submit a valid form."};
  const fields = input as Record<string, unknown>;
  if (["name", "email", "projectType", "message", "company"].some((k) => typeof fields[k] !== "string")) return {ok:false,message:"All fields must contain text."};
  const name = (fields.name as string).trim(), email = (fields.email as string).trim(), message = (fields.message as string).trim();
  const projectType = fields.projectType as string, company = fields.company as string;
  if (company.length > 0) return {ok:false,message:"Your message could not be processed."};
  if (name.length < 2 || name.length > 80) return {ok:false,message:"Enter a name between 2 and 80 characters."};
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) return {ok:false,message:"Enter a valid email address."};
  if (!allowedProjectTypes.has(projectType)) return {ok:false,message:"Select a valid project type."};
  if (message.length < 15 || message.length > 2500) return {ok:false,message:"Enter a project description between 15 and 2500 characters."};
  return {ok:true,value:{name,email,projectType,message,company}};
}
