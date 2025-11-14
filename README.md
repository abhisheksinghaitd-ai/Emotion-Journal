# Emotion Journal

## Live Demo
👉 [https://your-netlify-url.netlify.app](https://691768f00bc0e0ccffe8c8c2--stalwart-halva-236c86.netlify.app/)

A simple Emotion Journal web app to log daily feelings and short notes.  
Frontend built with **React**; backend built with **Node.js + Express** and stores entries in a local `data.json` file. Frontend and backend communicate via REST endpoints (`GET /api/entries`, `POST /api/entries`).

---

## Features
- Record emotion + short note  
- Persistent storage via backend JSON file  
- Shows first 2 entries with **View More / View Less** toggle  
- Clean, minimal UI for fast journaling

---

## Architecture Thinking
This project uses a **React** frontend for fast, component-driven UI and a lightweight **Express** backend to expose simple REST APIs. The frontend calls the backend endpoints (`/api/entries`) to fetch and persist data; this separation keeps UI and data concerns isolated and easy to maintain.

---

## Problem Solving
The hardest part was ensuring that saved entries appear instantly and persist across refreshes. This was solved by posting new entries to the backend and immediately updating React state with the response, plus handling CORS and correct deployed API URLs so the app works both locally and when hosted.

---

## User Experience

The UI was designed to stay minimal and smooth — clean colors, simple buttons, and only essential elements. The “View More / View Less” toggle keeps the interface neat even with many entries.

---

## Database Design
Entries are stored as a JSON array of objects with shape:  
```json
{ "id": 123456789, "emotion": "Happy", "note": "Text", "timestamp": "..." }

---

## Improvement Vision

If I had 3 more days, I would:

Add user authentication — allow users to create accounts and keep journals private.

Search & filter functionality — search past entries by emotion, keyword, or date.

Analytics & insights — simple charts showing mood trends over time.

Mobile-friendly UI enhancements — optimize layout for smaller screens.

Export entries — allow exporting journal data to CSV or PDF.



