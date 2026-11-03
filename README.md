# Atlas Learn

A responsive, browser-only learning and quiz experience built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Run locally

From this folder, start a local static web server:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). If Python is not installed, open `index.html` directly in a modern browser.

## Included

- Responsive dashboard, quiz catalog, categories, profile, rewards, leaderboard, Atlas Plus membership and member dashboard, and settings.
- Multiple-choice quizzes with randomized questions, selectable available difficulty sets, a countdown timer, immediate feedback, explanations, score summaries, and missed-answer review.
- XP, learning points, streaks, earned badges, and weekly/monthly challenge progress based on completed quiz sessions.
- Browser-persisted theme, font, text size, profile display name, preferences, and quiz history.
- Browser-local Atlas Plus demo memberships with monthly/yearly pricing, simulated start/expiry dates, cancellation, expiry testing, and centralized premium quiz access checks.
- Exclusive Atlas Plus dashboard, performance statistics, achievement badges, and weekly/monthly challenges earned through completed premium quizzes.
- Achievement-based certificate previews with unique local IDs, QR checks, and browser print-to-PDF.
- Keyboard-friendly navigation, reduced-motion support, and light/dark themes.

## Demo-mode limitations

There is **no backend or secure authentication provider** configured. The profile is a local display profile, not an account; no password is requested or stored. Anyone with access to this browser profile can see or change its local demo data. Profile, settings, and quiz progress do not sync between devices. The optional profile email is stored only in this browser.

The leaderboard uses fictional sample learners and is not a live global ranking. Atlas Plus membership is a clearly labelled local demo: it does not process payments, create a real subscription, or securely authorize users. Demo membership dates and entitlements can be changed by anyone with access to the browser profile. Do not enter passwords or payment-card details.

Certificates require an earned perfect quiz score and eligible Premium demo membership; buying or enabling a membership does not grant the achievement. The PDF action opens the browser print dialog, where you can choose **Save as PDF**. QR images are requested from [QR Server](https://qrserver.com/) and verify only against local browser data; they are not portable or independently trustworthy credentials. The Premium graduation collage uses images hosted by Pexels and needs an internet connection.

A production launch needs a secure backend and authentication provider for accounts and per-user progress; server-side membership entitlements and expiry checks integrated with a trusted payment provider for Atlas Plus; a server-side certificate registry and verification endpoint; and a consent-aware service for shared leaderboards and notifications. Keep the current browser-only membership provider confined to demo environments when integrating production services.

Google Fonts are loaded from Google Fonts when an internet connection is available. The app uses system fallbacks when they are unavailable.
