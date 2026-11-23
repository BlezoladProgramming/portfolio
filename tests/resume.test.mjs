import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,statSync} from "node:fs";
import {resolve} from "node:path";
const root=resolve(import.meta.dirname,"..");
const read=(p)=>readFileSync(resolve(root,p),"utf8");

test("owner CV PDF exists and retains source PDF signature",()=>{
  const pdf=readFileSync(resolve(root,"public/documents/Hamzat_Muhammed_Adewale_CV.pdf"));
  assert.ok(pdf.subarray(0,8).toString("ascii").startsWith("%PDF-1."));
  assert.ok(statSync(resolve(root,"public/documents/Hamzat_Muhammed_Adewale_CV.pdf")).size>10000);
});
test("resume route is implemented and discoverable",()=>{
  assert.match(read("app/resume/page.tsx"),/export default function ResumePage/);
  assert.match(read("app/sitemap.ts"),/"\/resume"/);
  assert.match(read("components/SiteChrome.tsx"),/href: "\/resume"/);
  assert.match(read("components/Footer.tsx"),/href="\/resume"/);
});
test("resume link is a real downloadable PDF, not a placeholder",()=>{
  assert.match(read("content/profile.ts"),/resumeUrl: "\/documents\/Hamzat_Muhammed_Adewale_CV\.pdf"/);
  assert.match(read("app/page.tsx"),/href=\{profile\.resumeUrl\} download/);
  assert.match(read("app/about/page.tsx"),/href=\{profile\.resumeUrl\} download/);
  assert.match(read("app/resume/page.tsx"),/href=\{profile\.resumeUrl\} download/);
});
test("accurate CV details retained",()=>{
  const page=read("app/resume/page.tsx");
  assert.match(page,/Federal School of Surveying, Oyo/);
  assert.match(page,/November 2025/);
  assert.match(page,/National Diploma/);
  assert.match(page,/Mini-B2B Marketplace/);
  assert.match(page,/Paused/);
});
