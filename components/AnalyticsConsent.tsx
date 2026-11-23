"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GA_MEASUREMENT_ID, ANALYTICS_ALLOWED_HOST } from "@/lib/analytics";

type Decision = "unknown" | "accepted" | "rejected";
type GoogleWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

const STORAGE_KEY = "blezolad.analytics-consent.v1";
const SETTINGS_EVENT = "blezolad:open-analytics-preferences";
const CHOICE_EVENT = "blezolad:analytics-choice-change";
let sessionFallback: Decision = "unknown";

function subscribeToChoices(callback: () => void) {
  window.addEventListener(CHOICE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHOICE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readChoice(): Decision {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : sessionFallback;
  } catch { return sessionFallback; }
}

function serverChoice(): Decision | null { return null; }


function analyticsScriptPresent() {
  return Boolean(document.querySelector('script[data-blezolad-analytics="1"]'));
}

function enableGoogleAnalytics() {
  // No analytics network request on localhost, Vercel previews or unapproved domains.
  if (process.env.NODE_ENV !== "production" || window.location.hostname !== ANALYTICS_ALLOWED_HOST) return;
  if (analyticsScriptPresent()) return;

  const w = window as GoogleWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: unknown[]) => { w.dataLayer?.push(args); };
  w.gtag("js", new Date());
  // Rely on GA4 Enhanced Measurement for client-side history navigation;
  // don't also emit custom page_view events or visitors could be double-counted.
  w.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: true,
  });

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  script.async = true;
  script.setAttribute("data-blezolad-analytics", "1");
  document.head.appendChild(script);
}

function clearAnalyticsCookies() {
  // Best effort: Google's cookies may be scoped to the current host or its parent.
  const host = window.location.hostname;
  const scopes = ["", `; domain=${host}`, `; domain=.${host}`];
  for (const fragment of document.cookie.split(";")) {
    const name = fragment.split("=")[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const scope of scopes) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${scope}`;
    }
  }
}

export default function AnalyticsConsent() {
  const decision = useSyncExternalStore<Decision | null>(subscribeToChoices, readChoice, serverChoice);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(SETTINGS_EVENT, open);
    return () => window.removeEventListener(SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (decision === "accepted") enableGoogleAnalytics();
  }, [decision]);

  function decide(value: Exclude<Decision, "unknown">) {
    const wasActive = analyticsScriptPresent();
    sessionFallback = value;
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch { /* Consent still applies for this visit. */ }
    window.dispatchEvent(new Event(CHOICE_EVENT));
    setIsOpen(false);
    if (value === "rejected" && wasActive) {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      clearAnalyticsCookies();
      // Unload the Google tag so refusal prevents further analytics requests.
      window.location.reload();
    }
  }

  if (decision === null || (decision !== "unknown" && !isOpen)) return null;
  return (
    <section className="df-ga-consent" aria-label="Analytics privacy choices" role="region">
      <div className="df-ga-consent-top">
        <span className="df-ga-kicker">YOUR PRIVACY / BLEZOLAD</span>
        {isOpen && decision !== "unknown" && <button className="df-ga-dismiss" type="button" aria-label="Close analytics preferences" onClick={() => setIsOpen(false)}>×</button>}
      </div>
      <h2>Can I understand how visitors use this site?</h2>
      <p>Optional Google Analytics helps me understand which pages are useful. It stays off unless you accept. You can change your choice anytime. <Link href="/privacy">Privacy details</Link>.</p>
      <div className="df-ga-actions">
        <button type="button" className="df-ga-accept" onClick={() => decide("accepted")}>Accept analytics</button>
        <button type="button" className="df-ga-reject" onClick={() => decide("rejected")}>{decision === "accepted" ? "Turn analytics off" : "Reject optional analytics"}</button>
      </div>
    </section>
  );
}
