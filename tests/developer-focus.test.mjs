import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=(x)=>readFileSync(new URL(`../${x}`,import.meta.url),"utf8");
test("personal brand remains full stack developer with accurate years",()=>{
  const profile=read("content/profile.ts");
  assert.match(profile,/Full Stack Web Developer/);assert.match(profile,/2\+ years/);
  assert.match(profile,/Hamzat Muhammed Adewale/);
});
test("homepage focuses on building usable software, not engineering jargon",()=>{
 const home=read("app/page.tsx");
 assert.match(home,/I develop/);assert.match(home,/software/);assert.match(home,/FRONTEND DEVELOPMENT/);assert.match(home,/BACKEND &amp; APIs/);
 assert.doesNotMatch(home,/ENGINEERING THINKING/);
});
test("interactive hero demonstrates real development categories without fake project claims",()=>{
 const scene=read("components/StudioScene.tsx");
 for(const label of ["Websites","Web apps","APIs","aria-pressed", "SAMPLE DATA", "NOT A CLIENT PROJECT"]) assert.ok(scene.includes(label),label);
});
test("contact selections are accepted by server side validator",()=>{
 const form=read("components/ContactForm.tsx"),validation=read("lib/contact.ts");
 for(const option of ["Website development / redesign","Frontend development","Backend development / APIs","Full-stack application","Debugging / maintenance"]){assert.ok(form.includes(`<option>${option}</option>`),option);assert.ok(validation.includes(`"${option}"`),option)}
});
test("all featured project galleries retained",()=>{
 const projects=read("content/projects.ts");
 for(const id of ["cinevex","mini-b2b-marketplace","oims"]){assert.ok(projects.includes(id));assert.ok(projects.includes(`/images/projects/${id}/`));}
});
