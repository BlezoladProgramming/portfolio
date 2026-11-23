"use client";

export default function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      className="df-ga-footer-control"
      onClick={() => window.dispatchEvent(new Event("blezolad:open-analytics-preferences"))}
    >
      Analytics choices
    </button>
  );
}
