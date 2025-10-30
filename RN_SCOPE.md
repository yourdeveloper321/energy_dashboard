# Energy Dashboard – React Native App Scope

## Overview
This document outlines how the **Energy Dashboard web app** can be extended into a **React Native mobile app**.  
The mobile version will focus on real-time monitoring, alert management, and energy visualization optimized for smaller screens.

---

## Architecture
- Built using **React Native (Expo)** for cross-platform support (iOS and Android)  
- Reuse existing **TypeScript models** and alert logic from the web app  
- Use **RTK Query** for API data synchronization and caching  

**Core Tools:**
- React Navigation v6 – Navigation and tabs  
- Victory Native – Charts  
- AsyncStorage – Local data storage  
- Expo Notifications – Push alerts  
- Moti / Framer Motion – Animations  

---

## Core Features

### Dashboard
- Compact device cards  
- Search, filter, and sort  
- Usage indicators for high-consumption devices  

### Device Details
- 24-hour usage line chart  
- Min / Max / Average usage statistics  
- Swipe navigation between devices  

### Alerts
- User-defined power threshold alerts  
- Push notifications for triggered alerts  
- “Alert History” screen for recent events  

### Offline Mode
- Cached data and rules for offline use  
- Automatic synchronization when reconnected  

---

## Design and UX
- Minimal, responsive layout using **React Native Paper**  
- Dark and light mode support  
- Full accessibility with VoiceOver and TalkBack  

---

## Deployment
- Managed with **Expo EAS Build**  
- Supports over-the-air (OTA) updates  
- Distributed via Play Store and App Store  

---

## Outcome
The mobile version will provide the same reliability and insight as the web app,  
helping users track energy performance, receive alerts, and monitor devices anytime and anywhere.
