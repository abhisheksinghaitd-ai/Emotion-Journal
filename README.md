# Emotion Journal Web App

A simple Emotion Journal web app to log daily feelings and short notes.  

- **Frontend:** Built with **React** and deployed on **Netlify**  
- **Backend:** Built with **Node.js + Express**, stores entries in a local `data.json` file, and deployed on **Render**  
- **Communication:** Frontend and backend communicate via REST endpoints (`GET /api/entries`, `POST /api/entries`)

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



## Improvement Vision

If I had 3 more days, I would:

Add user authentication — allow users to create accounts and keep journals private.

Search & filter functionality — search past entries by emotion, keyword, or date.

Analytics & insights — simple charts showing mood trends over time.

Mobile-friendly UI enhancements — optimize layout for smaller screens.

Export entries — allow exporting journal data to CSV or PDF.

---

## Deployment Steps

Frontend (React)

Navigate to your frontend project folder.

Run npm install to install dependencies.

Update the backend API URL in your React code if needed.

Run npm run build to create a production build.

Deploy the build folder to Netlify, Vercel, or any static hosting provider.

Backend (Node.js + Express)

Navigate to your backend project folder.

Run npm install to install dependencies.

Ensure data.json exists in the backend root.

Run node index.js (or nodemon index.js) to start the server.

Deploy to Render, Heroku, or any Node.js-friendly hosting.

Make sure to update the frontend with the deployed backend URL.

---

## Scaling Strategy for 1,000,000+ Users

The current data.json storage works for small apps, but to support over 1M users the system would need:

1. Database Upgrade
Move to MongoDB/PostgreSQL with proper indexing for fast queries.

2. Authentication
Add JWT login and link each entry to a userId for secure, private journals.

3. Scalable Backend
Deploy using Docker + Kubernetes with a load balancer and auto-scaling.

4. Caching
Use Redis to speed up frequent reads and reduce database load.

5. Reliable Storage & Backups
Store backups on AWS S3/DigitalOcean with automated snapshots.

6. Frontend Optimization
Add pagination, lazy-loading, and faster search handling.

---

## Database Design
Entries are stored as a JSON array of objects with shape:  
```json
{ "id": 123456789, "emotion": "Happy", "note": "Text", "timestamp": "..." }

