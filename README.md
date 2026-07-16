# adminHMD — Admin Dashboard Template

A responsive multi-page admin template built with **Bootstrap 5**, **Tailwind CSS**, and **vanilla JavaScript**.
Everything is functional on the frontend (no backend needed) — searching, filtering, sorting, pagination, form validation, dark mode, charts, modals, toasts.

## How to use
Just open `index.html` in any browser. No build step.

## Pages included
- `index.html` — Dashboard (KPIs, sales chart, activity, recent users)
- `users.html` — Users table with search, filter, delete
- `add-user.html` — Add user form with validation
- `profile.html` — Profile view/edit
- `charts.html` — 4 Chart.js examples (line, bar, doughnut, radar)
- `tables.html` — Data table (search, sort, pagination)
- `forms.html` — Form controls and validation
- `components.html` — Buttons, badges, tabs, accordion, progress
- `alerts.html` — Alerts & toasts
- `modals.html` — Basic, form, and confirm modals
- `settings.html` — Theme, notifications, password
- `blank.html` — Starter template

## Structure
```
/index.html + other pages
/css/style.css        — Design system tokens & components
/js/layout.js         — Shared sidebar + topbar (injected)
/js/data.js           — Mock users data
```

Fully responsive with a collapsible sidebar on mobile. Toggle dark mode with the moon icon in the topbar.
