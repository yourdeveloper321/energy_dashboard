# IDEATION – Energy Dashboard Evolution Plan

## Overview
The Energy Dashboard is a React + TypeScript application that visualizes device-level energy usage data and allows users to set alert rules for monitoring thresholds.  
This document outlines how the prototype can evolve into a production-grade platform over a 4-week sprint plan.

## Week 1 – Foundation & Backend Integration
**Goal:** Move from mock data to real APIs and set up a scalable architecture.

### Tasks
- Build a small backend (Node.js + Express or NestJS)
- Replace local `devices.json` with REST API endpoints:
  - `/devices`
  - `/devices/:id`
  - `/alerts`
- Connect with a mock or real IoT data source (e.g., MQTT broker or Firebase)
- Introduce Redux Toolkit Query (RTK Query) for API caching
- Add `.env` configuration support for local and production environments

## Week 2 – Advanced Visualization & Filtering
**Goal:** Improve the dashboard’s analytical capability.

### Tasks
- Add multiple chart types:
  - Hourly, daily, and weekly views
  - Trendline overlays for performance comparison
- Introduce advanced filters:
  - Filter by site, type, and date range
- Optimize chart rendering with lazy loading and memoization
- Add skeleton loaders for smoother user experience

## Week 3 – Alerts, Analytics & Notifications
**Goal:** Transform simple local alerts into a robust monitoring system.

### Tasks
- Move alert logic to backend (persistent user-specific rules)
- Enable push/email notifications via Firebase Cloud Messaging
- Add alert history and analytics (number of triggers per day)
- Create a dashboard for rule management (add/edit/delete alerts)
- Add toast and modal summaries for triggered alerts

## Week 4 – Production Readiness & Accessibility
**Goal:** Make the application production-ready for real-world users.

### Tasks
- Add dark/light mode support
- Add accessibility improvements (ARIA roles, keyboard navigation)
- Improve responsiveness (mobile-first layout + PWA support)
- Integrate logging and error tracking (Sentry or LogRocket)
- Set up CI/CD pipeline (GitHub Actions + Vercel/Netlify)
- Add unit and integration testing coverage (Vitest + React Testing Library)

## Future Enhancements
- AI-driven energy prediction using TensorFlow.js or a small ML API
- User roles: Admin, Site Manager, and Viewer
- Offline mode using IndexedDB for local caching
- Mobile App built with React Native using the same TypeScript data models

## Outcome
By following this roadmap:
- The project evolves from a prototype into a real-time, scalable energy monitoring system
- Codebase remains modular, tested, and maintainable
- UX becomes smoother, accessible, and production-quality

"From data visualization to intelligent monitoring — this dashboard will empower teams to optimize energy efficiency at scale."
