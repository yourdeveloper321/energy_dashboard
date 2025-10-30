# React Native Scope – Energy Dashboard Mobile App

## Overview
This document describes how the Energy Dashboard web application can be adapted to a React Native (RN) mobile application.  
The mobile version will focus on providing real-time monitoring, alert management, and data visualization optimized for smaller screens and lower power consumption.

---

## Architecture Plan
The mobile app will be built using **React Native (Expo)** to ensure code reusability and rapid deployment on both iOS and Android.  
The existing React + TypeScript codebase will be reused for business logic, TypeScript types, and data models.

### Key Frameworks and Tools
- **React Native (Expo CLI)** – Cross-platform mobile app development
- **Redux Toolkit Query (RTK Query)** – API data caching and synchronization
- **React Navigation v6** – Stack and tab navigation for different sections
- **Recharts or Victory Native** – For power usage charts
- **AsyncStorage** – Local storage replacement for browser localStorage
- **Expo Notifications** – For background and push alerts
- **Framer Motion / Moti** – Smooth mobile animations

---

## Core Features

### 1. Dashboard
- Compact device cards with name, type, and site
- Search and filter bar at the top
- Infinite scroll or pagination for performance
- Quick indicators for devices currently exceeding usage thresholds

### 2. Device Detail View
- Line chart showing 24-hour usage trend
- Min/Max/Average usage stats
- Swipe navigation between devices
- Option to refresh data manually or auto-refresh in the background

### 3. Alerts & Notifications
- Same alert logic from the web reused in RN
- User sets alert thresholds (Power > X for Y minutes)
- Saved rules stored via **AsyncStorage**
- Push notifications when alert triggers (via Expo Notifications)
- “Alert History” screen showing recent triggered alerts

### 4. Offline Mode
- Recent device data and alert rules cached locally
- App shows cached data when offline and syncs automatically when reconnected
- Background sync using Expo’s TaskManager

### 5. Authentication (Optional for future)
- OAuth 2.0 or Firebase Auth for user login
- Per-user alert configurations and data filters
- Cloud sync for devices and preferences

---

## Design & UX Considerations
- Use **React Native Paper** or **NativeBase** for responsive UI components
- Adopt a minimalist layout with focus on readability and touch accessibility
- Include a dark/light theme toggle consistent with system preferences
- Ensure accessibility with VoiceOver / TalkBack compatibility (ARIA equivalents)

---

## Performance & Power Efficiency
- Use background fetch and push notifications instead of continuous polling
- Limit chart rendering to visible areas using FlatList windowing
- Memoize heavy components to reduce re-renders
- Optimize bundle size with code-splitting and tree-shaking

---

## Deployment
- Managed through **Expo EAS Build** for easy release management
- Supports Over-the-Air (OTA) updates for quick fixes
- Distribute via Play Store and App Store

---

## Outcome
By leveraging the shared TypeScript logic and alert system from the web app,  
the React Native version will provide an efficient and consistent energy monitoring experience across platforms.  
Users can monitor device health, receive real-time alerts, and track energy usage anywhere, anytime.
