import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = p => readFileSync(path.join(root, p), "utf8");
test("Cinevex uses real supplied screenshots, not invented covers", () => {
  const data = read("content/projects.ts");
  const refs = [...data.matchAll(/src: "(\/images\/projects\/cinevex\/[^"]+\.webp)"/g)].map(m => m[1]);
  assert.equal(refs.length, 14);
  for (const ref of refs) {
    const full = path.join(root, "public", ref.slice(1));
    assert.ok(existsSync(full), `Missing screenshot ${ref}`);
    assert.ok(readFileSync(full).byteLength > 2000, `Empty asset ${ref}`);
  }
  assert.match(data, /https:\/\/cinevex\.net/);
  assert.match(data, /Private repository/i);
});
test("OIMS name, admin-only scope and real redacted screenshot gallery", () => {
  const data = read("content/projects.ts");
  const section = data.split('slug: "oims"')[1].split('slug: "blezolad-portfolio"')[0];
  assert.match(section, /Online Information Management System/);
  assert.match(section, /admin-only/i);
  assert.match(section, /student records/i);
  assert.match(section, /staff records/i);
  assert.match(section, /IT\/SIWES records/i);
  assert.match(section, /images\/projects\/oims\/landing\.webp/);
  assert.match(section, /github\.com\/BlezoladProgramming\/OIMS/);
  assert.match(section, /sensitive records/i);
});
test("Project gallery is accessible and screenshot-backed", () => {
  const component = read("components/ProjectGallery.tsx");
  assert.match(component, /aria-pressed/);
  assert.match(component, /aria-live/);
  assert.match(component, /alt=\{active.alt\}/);
  assert.match(read("app/work/[slug]/page.tsx"), /<ProjectGallery/);
  assert.match(read("components/ProjectExplorer.tsx"), /ACTUAL SCREENSHOT/);
});


test("Mini-B2B gallery includes ten real local project screenshots", () => {
  const data = read("content/projects.ts");
  const section = data.split('slug: "mini-b2b-marketplace"')[1].split('slug: "oims"')[0];
  const refs = [...section.matchAll(/src: "(\/images\/projects\/mini-b2b-marketplace\/[^"\n]+\.webp)"/g)].map(m => m[1]);
  assert.equal(refs.length, 10);
  assert.match(section, /"Next\.js"/);
  assert.match(section, /"NestJS"/);
  assert.match(section, /"PostgreSQL"/);
  assert.match(section, /"Prisma"/);
  assert.match(section, /"Stripe"/);
  assert.match(section, /"WebSockets"/);
  assert.match(section, /Project paused/i);
  assert.match(section, /not independently verified|not been verified/i);
  for(const ref of refs) assert.ok(existsSync(path.join(root, "public", ref.slice(1))), `Missing image: ${ref}`);
});

test("OIMS gallery has nine redacted, supplied product captures", () => {
  const data=read("content/projects.ts");
  const section = data.split('slug: "oims"')[1].split('slug: "blezolad-portfolio"')[0];
  const refs = [...section.matchAll(/src: "(\/images\/projects\/oims\/[^"\n]+\.webp)"/g)].map(m => m[1]);
  assert.equal(refs.length, 9);
  for (const ref of refs) {
    const full=path.join(root,"public",ref.slice(1));
    assert.ok(existsSync(full), `Missing image: ${ref}`);
    assert.ok(readFileSync(full).length>2500);
  }
  assert.match(section, /personal records|personal record rows/i);
});

test("Owner profile shows verified identity, safe contact methods and supplied portrait", () => {
  const prof=read("content/profile.ts");
  assert.match(prof,/Hamzat Muhammed Adewale/);
  assert.match(prof,/blezolad\.1@gmail\.com/);
  assert.match(prof,/2349067903462/);
  assert.match(prof,/BlezoladProgramming/);
  assert.match(prof,/Blezolad_2/);
  assert.match(prof,/2\+ years/);
  assert.ok(existsSync(path.join(root,"public/images/people/hamzat-muhammed-adewale.webp")));
  assert.match(read("app/about/page.tsx"),/about-portrait/);
});
