import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,readdirSync,existsSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const read=p=>readFileSync(path.join(root,p),"utf8");
const page=p=>`app/${p}/page.tsx`;
const tsxFiles=()=>{
  const found=[];
  function walk(dir){for(const f of readdirSync(path.join(root,dir),{withFileTypes:true})){const p=path.posix.join(dir,f.name);if(f.isDirectory())walk(p);else if(/\.tsx?$/.test(p))found.push(p);}}
  for(const dir of ["app","components","content","lib"])walk(dir);
  return found;
};
test("independent developer identity and experience remain accurate",()=>{
  assert.match(read("content/profile.ts"),/Full Stack Web Developer/);
  assert.match(read("content/profile.ts"),/2\+ years/);
  assert.doesNotMatch(read("content/profile.ts"),/3–4 years|5\+ years|world-leading/i);
});
test("all expected routes have real page implementations",()=>{
  for(const p of ["app/page.tsx",page("about"),page("services"),page("work"),page("work/[slug]"),page("contact"),page("privacy"),"app/not-found.tsx","app/sitemap.ts","app/robots.ts"]){
    assert.ok(existsSync(path.join(root,p)),`Missing ${p}`);
    assert.ok(read(p).length>200,`Empty/placeholder page: ${p}`);
  }
});
test("fresh structure uses a rail, project explorer and interactive service desk",()=>{
  assert.match(read("components/SiteChrome.tsx"),/site-rail/);
  assert.match(read("app/page.tsx"),/<StudioScene\s*\/>/);
  assert.match(read("app/page.tsx"),/<ProjectExplorer\s*\/>/);
  assert.match(read("app/page.tsx"),/<ServiceSelector compact\s*\/>/);
  assert.match(read("components/ProjectExplorer.tsx"),/aria-pressed/);
  assert.match(read("components/ServiceSelector.tsx"),/aria-live="polite"/);
});
test("all imported local modules resolve to a file",()=>{
  for(const p of tsxFiles()){
    const source=read(p);
    for(const [,name] of source.matchAll(/from\s+["']@\/([^"']+)["']/g)){
      assert.ok([`${name}.ts`,`${name}.tsx`,`${name}/index.ts`,`${name}/index.tsx`].some(f=>existsSync(path.join(root,f))),`${p}: broken import @/${name}`);
    }
  }
});
test("motion honors accessibility settings and is progressive",()=>{
  const css=read("app/globals.css");
  assert.match(css,/@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css,/\.motion-ready\s+\[data-reveal\]/);
  assert.match(read("components/MotionController.tsx"),/IntersectionObserver/);
  assert.match(read("components/SiteChrome.tsx"),/aria-expanded/);
  assert.match(read("components/SiteChrome.tsx"),/Escape/);
});
test("all projects are labelled with their original factual limitations",()=>{
  const data=read("content/projects.ts");
  for(const p of ["cinevex","mini-b2b-marketplace","oims","blezolad-portfolio","3d-portfolio"])assert.ok(data.includes(p));
  assert.match(data,/Private repository/);
  assert.match(data,/Project paused/);
  assert.match(data,/Tutorial-based learning project/);
  assert.match(read("components/ProjectExplorer.tsx"),/NOT A SCREENSHOT/);
});
test("no misleading contact form without explicitly configured delivery",()=>{
  const contact=read("app/contact/page.tsx");const route=read("app/api/contact/route.ts");
  assert.match(contact,/CONTACT_FORM_ENABLED === "true"/);
  assert.match(route,/CONTACT_FORM_ENABLED !== "true"/);
  assert.match(route,/validateEnquiry/);
  assert.match(contact,/mailto:/);
});
test("metadata and static assets exist",()=>{
  assert.ok(existsSync(path.join(root,"public/og-cover.png")));
  assert.ok(existsSync(path.join(root,"app/icon.svg")));
  assert.match(read("app/layout.tsx"),/metadataBase/);
  assert.match(read("app/sitemap.ts"),/projects\.map/);
});
test("no legacy marketing descriptor remains in the fresh source",()=>{
  for(const p of [...tsxFiles(),"app/globals.css"]){assert.doesNotMatch(read(p),/Web Development\s*&\s*Digital Solutions/i,`${p} has old descriptor`);}
});
test("mobile, tablet and wide layouts are explicitly styled",()=>{
  const css=read("app/globals.css");
  for(const q of ["1180px","960px","700px","410px"]) assert.ok(css.includes(`max-width:${q}`));
  assert.match(css,/:focus-visible/);
  assert.match(css,/\.visually-hidden/);
});
