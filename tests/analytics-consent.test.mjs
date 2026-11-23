import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";
const read = path => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("analytics identifier is a GA4 stream ID, not a placeholder", () => {
  assert.match(read("lib/analytics.ts"), /GA_MEASUREMENT_ID\s*=\s*"G-[A-Z0-9]{6,20}"/);
});
test("Google tracking code exists only inside the opt-in activation function", () => {
  const source = read("components/AnalyticsConsent.tsx");
  assert.match(source, /if \(decision === "accepted"\) enableGoogleAnalytics\(\)/);
  assert.match(source, /function enableGoogleAnalytics\(\)/);
  assert.match(source, /createElement\("script"\)/);
  assert.match(source, /appendChild\(script\)/);
  assert.match(source, /ANALYTICS_ALLOWED_HOST/);
  assert.match(source, /process\.env\.NODE_ENV !== "production"/);
  assert.match(source, /\bsetItem\(STORAGE_KEY, value\)/);
});
test("visitors can explicitly reject or withdraw consent", () => {
  const source = read("components/AnalyticsConsent.tsx");
  assert.match(source, /Reject optional analytics/);
  assert.match(source, /Turn analytics off/);
  assert.match(source, /ga-disable-/);
  assert.match(source, /window\.location\.reload\(\)/);
});
test("preferences entry point is available in site footer", () => {
  assert.match(read("components/Footer.tsx"), /AnalyticsPreferencesButton/);
  assert.match(read("components/AnalyticsPreferencesButton.tsx"), /blezolad:open-analytics-preferences/);
  assert.match(read("app/layout.tsx"), /<AnalyticsConsent\s*\/>/);
});
test("privacy notice discloses optional GA4 analytics", () => {
  const source = read("app/privacy/page.tsx");
  assert.match(source, /Google Analytics 4/);
  assert.match(source, /only after/);
  assert.match(source, /Analytics choices/);
});
