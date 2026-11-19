import { NextRequest, NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/contact";

export const runtime = "nodejs";
const MAX_BODY_BYTES = 6500;

export async function POST(request: NextRequest) {
  // The sender/recipient must be configured and verified before enabling the UI.
  if (process.env.CONTACT_FORM_ENABLED !== "true" || !process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    return NextResponse.json({message:"The contact form is not currently available. Please email directly."}, {status:503});
  }
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json({message:"Request origin not allowed."}, {status:403});
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json({message:"Expected JSON."}, {status:415});
  }
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_BODY_BYTES) return NextResponse.json({message:"Message too large."}, {status:413});
  let raw = "";
  try { raw = await request.text(); } catch { return NextResponse.json({message:"Could not read message."}, {status:400}); }
  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) return NextResponse.json({message:"Message too large."}, {status:413});
  let input:unknown;
  try { input = JSON.parse(raw); } catch { return NextResponse.json({message:"Invalid JSON."}, {status:400}); }
  const result = validateEnquiry(input);
  if (!result.ok) return NextResponse.json({message:result.message}, {status:400});
  const {name,email,projectType,message} = result.value;
  const plain = `New BLEZOLAD portfolio enquiry\n\nName: ${name}\nEmail: ${email}\nProject type: ${projectType || "Not selected"}\n\nMessage:\n${message}`;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},
      body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[process.env.CONTACT_TO_EMAIL],reply_to:email,subject:"New BLEZOLAD project enquiry",text:plain}),
      cache:"no-store",signal:AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Contact delivery rejected by provider", response.status);
      return NextResponse.json({message:"Delivery failed. Please use the direct email link."},{status:502});
    }
  } catch {
    return NextResponse.json({message:"Unable to send right now. Please use the direct email link."},{status:502});
  }
  return NextResponse.json({message:"Message sent."},{status:200,headers:{"Cache-Control":"no-store"}});
}
