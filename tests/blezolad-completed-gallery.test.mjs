import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {resolve} from "node:path";
const root = resolve(import.meta.dirname, "..");
const read = path => readFileSync(resolve(root, path), "utf8");

test("BLEZOLAD entry is completed, live and not presented as unfinished", () => {
  const source = read("content/projects.ts");
  const match = source.match(/slug: "blezolad-portfolio",([\s\S]*?)\n  },\n  \{\n    slug: "3d-portfolio"/);
  assert.ok(match, "project block should exist");
  assert.match(match[1], /status: "Completed"/);
  assert.match(match[1], /label: "Completed and live"/);
  assert.match(match[1], /portfolio-nine-pi-48\.vercel\.app/);
  assert.doesNotMatch(match[1], /Redesign in progress|working-copy implementation underway|Deployment and browser validation still pending/);
});

test("All five unique supplied screenshots are published as valid WebP", () => {
  const names = ["overview", "projects", "services", "resume", "contact"];
  const source = read("content/projects.ts");
  for (const name of names) {
    const path = `public/images/projects/blezolad-portfolio/${name}.webp`;
    const image = readFileSync(resolve(root, path));
    assert.ok(statSync(resolve(root, path)).size > 10000);
    assert.equal(image.subarray(0,4).toString("ascii"), "RIFF");
    assert.equal(image.subarray(8,12).toString("ascii"), "WEBP");
    assert.match(source, new RegExp(`/images/projects/blezolad-portfolio/${name}\\.webp`));
  }
  const block = source.match(/slug: "blezolad-portfolio",([\s\S]*?)\n  },\n  \{\n    slug: "3d-portfolio"/)[1];
  assert.equal((block.match(/src: "\/images\/projects\/blezolad-portfolio\//g) || []).length, 5);
});

test("Screenshot and completed-status text is reflected throughout archive and case page", () => {
  assert.match(read("app/work/page.tsx"), /BLEZOLAD PORTFOLIO INCLUDE OWNER-SUPPLIED SCREENSHOTS/);
  assert.match(read("app/work/[slug]/page.tsx"), /p.status === "Completed"/);
  assert.match(read("components/ProjectGallery.tsx"), /<Image src=\{active.src\}/);
  assert.match(read("components/ProjectExplorer.tsx"), /cases = projects.filter/);
});
