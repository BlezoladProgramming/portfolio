import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {resolve} from "node:path";
const root=resolve(import.meta.dirname,"..");
const read=path=>readFileSync(resolve(root,path),"utf8");

test("professional resume shows current university without inventing a degree",()=>{
  const src=read("app/resume/page.tsx");
  assert.match(src,/Obafemi Awolowo University/);
  assert.match(src,/Currently studying/);
  assert.match(src,/Ile-Ife, Osun State, Nigeria/);
  assert.match(src,/Federal School of Surveying, Oyo/);
  assert.match(src,/National Diploma/);
});
test("public profile location is Oyo, Oyo State, Nigeria",()=>{
  assert.match(read("content/profile.ts"),/location: "Oyo, Oyo State, Nigeria"/);
  assert.match(read("app/about/page.tsx"),/profile.location/);
});
test("download remains a real PDF and an editable CV copy is available",()=>{
  const pdf=readFileSync(resolve(root,"public/documents/Hamzat_Muhammed_Adewale_CV.pdf"));
  const doc=readFileSync(resolve(root,"docs/Hamzat_Muhammed_Adewale_CV_Professional.docx"));
  assert.match(pdf.subarray(0,8).toString("ascii"),/^%PDF-1/);
  assert.equal(doc.subarray(0,2).toString("ascii"),"PK");
  assert.ok(pdf.length>15000);
  assert.ok(doc.length>15000);
});
