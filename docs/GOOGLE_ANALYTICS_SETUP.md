# BLEZOLAD — Google Analytics 4 integration

- The visitor must **opt in** before any Google Analytics script loads. If they refuse, no Google Analytics tag is loaded.
- The choice is stored in the visitor's local browser storage as `blezolad.analytics-consent.v1`.
- Visitors can reopen the consent choices through **Analytics choices** in the footer.
- Analytics only initializes in a production build on `portfolio-nine-pi-48.vercel.app`. Localhost and preview hostnames aren't tracked.
- Google Analytics 4 Enhanced Measurement handles page views and changes to browser history (SPA navigation). Avoid adding manual pageview events unless you disable the automatic ones.
- In your GA4 property, open **Admin → Data streams → BLEZOLAD Website → Enhanced measurement → Page views**. Confirm page-view tracking on browser-history changes.
- Recommended: disable enhanced features you don't want (e.g., form interaction tracking) so portfolio enquiries aren't included in analytics.
- The GA Measurement ID is **public**, but never share your Google login credentials.
- To verify after release, accept analytics on the actual live site in a fresh browser, open **Google Analytics → Reports → Realtime**, browse Home, Work and Resume, and confirm traffic appears. Browser extensions may block tracking.
- When changing your canonical domain, update `ANALYTICS_ALLOWED_HOST` in `lib/analytics.ts` and redeploy.
- This implementation deliberately avoids sending names, email addresses or contact-form contents as custom analytics events.

Official docs:
- https://support.google.com/analytics/answer/14183469
- https://nextjs.org/docs/app/guides/third-party-libraries
- https://developers.google.com/tag-platform/security/guides/consent
