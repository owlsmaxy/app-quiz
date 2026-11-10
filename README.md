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
- A browsable education library for Pre-Primary, Primary, Secondary (separate CBC and 8-4-4 pathways), and University studies.
- Saved country, curriculum, level, grade/year, pathway, programme and preferred-subject choices; education preferences do not replace quiz history, rewards or certificates.
- A custom quiz studio with exact learning-context filters, free five-question multiple-choice practice, and Premium-only advanced/adaptive difficulty, five answer formats, timed assessments, preview, answer review and saved attempts.
- Topic and concept discovery across the sample education catalog and available sample questions.
- A Premium local question-bank manager for creating, editing and removing custom sample questions.
- Free and Premium membership comparison, profile status, configurable monthly/yearly demo pricing, membership dates, downgrade controls, and a shared upgrade gate.
- Free access to the learning catalog, free quizzes, scores and progress, with a configurable monthly quiz-start allowance and focused five-question practice sessions; Premium demo access unlocks unlimited starts, larger sessions, more question formats, advanced settings, reports, challenges, badges and eligible certificate previews.
- Learner dashboard with saved quiz totals, score averages, newly tracked quiz time, recorded streak, chosen education pathway, activity, and curriculum-topic progress from fully answered Quiz Studio sessions.
- Learning analytics with saved-result history and a seven-day score chart; Premium adds education-level, subject, topic, and date filters plus subject and topic performance breakdowns.
- Rule-based achievements with earned dates, plus a print-friendly Atlas Learn-issued certificate for an earned perfect quiz score. Certificates are not official accreditation. The standalone certificate page displays only a locally saved certificate that matches an earned perfect-score result and active demo membership; it does not create or independently verify awards.
- Exclusive Atlas Plus dashboard, performance statistics, achievement badges, and weekly/monthly challenges earned through completed premium quizzes.
- Achievement-based certificate previews with unique local IDs, QR checks, and browser print-to-PDF.
- Keyboard-friendly navigation, reduced-motion support, and light/dark themes.

## Demo-mode limitations

There is **no backend or secure authentication provider** configured. The profile is a local display profile, not an account; no password is requested or stored. Anyone with access to this browser profile can see or change its local demo data. Profile, settings, membership state, and quiz progress do not sync between devices. The optional profile email is stored only in this browser.

The leaderboard uses fictional sample learners and is not a live global ranking. Atlas Plus membership is a clearly labelled local demo: confirming a demo plan does not process or verify payment, create a real subscription, or securely authorize users. Demo membership dates and entitlements can be changed by anyone with access to the browser profile. Do not enter passwords or payment-card details. Free quiz limits and Premium prices are configured in `app.js`; changing browser storage or code is not secure enforcement.

Certificates require an earned perfect quiz score and eligible Premium demo membership; buying or enabling a membership does not grant the achievement. Certificates are Atlas Learn-issued learning certificates, not accredited qualifications or official recognition. The PDF action opens the browser print dialog, where you can choose **Save as PDF**. QR images are requested from [QR Server](https://qrserver.com/) and verify only against local browser data; they are not portable or independently trustworthy credentials. The Premium graduation collage uses images hosted by Pexels and needs an internet connection.

Dashboard and analytics metrics come from saved quiz results. Elapsed learning time is tracked only for sessions started after that tracking was added. Topic completions require a completed topic-based Quiz Studio session with every question for that topic answered; older quizzes without curriculum metadata do not contribute topic progress. Free learners retain basic score and history reporting, while filtered subject/topic analytics are a Premium feature.

A production launch needs a secure backend and authentication provider for accounts and per-user progress; server-side quiz quotas, membership entitlements and expiry checks integrated with a trusted payment provider for Atlas Plus; a server-side certificate registry and verification endpoint; and a consent-aware service for shared leaderboards and notifications. Keep the current browser-only membership provider confined to demo environments. Never use its local membership flag as payment verification.

Google Fonts are loaded from Google Fonts when an internet connection is available. The app uses system fallbacks when they are unavailable.

## Education catalog

`education-data.js` contains the reusable education catalog and lookup helpers used by the Learn page. Education levels, curricula, grades, pathways, subject offerings, topics, university faculties, programmes and units are represented as separate data collections with stable IDs. Add or adjust catalog entries there rather than embedding curriculum data in page markup. The browser-only profile stores selection IDs so the catalog can later be backed by a database.

The included subjects, units and topics are illustrative sample content for demonstrating navigation. They are not verified official curriculum requirements or a substitute for curriculum-authority materials.

## Browser tests

Open `tests.html` directly in a modern browser, or start the local static server and visit `http://localhost:8000/tests.html`. The dependency-free checks cover required grade identifiers, university unit availability in every year and semester, sample-question validation, answer grading, and exact-context filtering.

## Quiz question bank

`question-bank.js` contains sample questions and reusable filtering, validation and answer-grading helpers. Each question is tagged with country, curriculum, education level, grade or academic year, subject or unit, topic, difficulty and format. The Quiz studio matches all selected context fields before generating a session. Use **Manage question bank** in the studio to add, edit or remove locally stored custom questions. Completed custom quiz attempts and custom questions are saved in this browser alongside the demo profile.

Adaptive practice uses the learner's recent saved results for the selected topic to choose a difficulty. All questions in this repository are illustrative samples; no AI service is connected and no question should be treated as verified official curriculum content. This browser-only demo has no shared question-bank backend.
