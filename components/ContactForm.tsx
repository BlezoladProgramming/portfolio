"use client";
import {useState,type FormEvent} from "react";
import {services} from "@/content/services";
import Link from "next/link";
export default function ContactForm({preset=""}:{preset?:string}) {
  const [busy,setBusy]=useState(false);
  const [status,setStatus]=useState({kind:"idle",text:""});
  async function onSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(busy) return;
    setBusy(true);setStatus({kind:"idle",text:""});
    const form=event.currentTarget;
    const fields=Object.fromEntries(new FormData(form).entries());
    try {
      const response=await fetch("/api/contact", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fields)});
      const data:{message?:string}=await response.json();
      if(!response.ok) throw new Error(data.message||"Delivery failed. Please use the direct email link.");
      form.reset();setStatus({kind:"success",text:"Your message was sent successfully. Thank you!"});
    } catch(err){setStatus({kind:"error",text:err instanceof Error?err.message:"Message not sent. Please contact me by email."});}
    finally {setBusy(false);}
  }
  return <form className="brief-form" onSubmit={onSubmit}>
    <div className="form-row"><label>01 / YOUR NAME<input type="text" name="name" autoComplete="name" minLength={2} maxLength={80} required placeholder="How should I address you?"/></label><label>02 / YOUR EMAIL<input type="email" name="email" autoComplete="email" maxLength={254} required placeholder="name@example.com"/></label></div>
    <label>03 / WHAT DO YOU NEED?<select name="projectType" defaultValue={services.some(x=>x.title===preset)?(preset.startsWith("Website")?"Website development / redesign":preset.startsWith("Frontend")?"Frontend development":preset.startsWith("Backend")?"Backend development / APIs":preset.startsWith("Full-stack")?"Full-stack application":"Debugging / maintenance"):""}>
      <option value="">Choose a starting point (optional)</option><option>Website development / redesign</option><option>Frontend development</option><option>Backend development / APIs</option><option>Full-stack application</option><option>Debugging / maintenance</option><option>Other</option>
    </select></label>
    <label>04 / YOUR BRIEF<textarea name="message" minLength={15} maxLength={2500} rows={5} required placeholder="Tell me about your idea, existing website or technical problem…"/></label>
    <div className="visually-hidden" aria-hidden="true"><label>Leave empty<input type="text" name="company" autoComplete="off" tabIndex={-1}/></label></div>
    <p className="brief-privacy">Your message is used only to respond to your enquiry. <Link href="/privacy">Privacy notice</Link>.</p>
    <button className="brief-submit" disabled={busy} type="submit">{busy?"Sending…":"Send your brief"}<span aria-hidden="true">↗</span></button>
    <p className={`brief-message ${status.kind}`} role={status.kind==="error"?"alert":"status"} aria-live="polite">{status.text}</p>
  </form>;
}
