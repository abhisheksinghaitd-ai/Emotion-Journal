import React, { useState, useLayoutEffect } from "react";

function App() {
  // UI States
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch entries from backend on page load
  useLayoutEffect(() => {
  fetch("https://backend-8501.onrender.com/api/entries")
    .then((res) => res.json())
    .then((data) => setEntries(data))
    .catch((err) => console.error("Fetch error:", err));
}, []);

  // Add a new journal entry
  const addEntry = async () => {
    if (!emotion || !note)
      return alert("Please select an emotion and write a note!");

    const newEntry = {
      emotion,
      note,
      timestamp: new Date().toLocaleString(),
    };

   const res = await fetch("https://backend-8501.onrender.com/api/entries", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newEntry),
});

    const data = await res.json();

    // Update frontend list
    setEntries((prev) => [...prev, data.entry]);

    // Clear inputs
    setEmotion("");
    setNote("");
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "white",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#6c63ff" }}>
          💭 Emotion Journal
        </h1>

        {/* Emotion Selector */}
        <label style={{ display: "block", marginTop: 20 }}>Emotion</label>
        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
          }}
        >
          <option value="">Select emotion</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Calm">😌 Calm</option>
          <option value="Angry">😡 Angry</option>
        </select>

        {/* Note Input */}
        <label style={{ display: "block", marginTop: 20 }}>Your Note</label>
        <textarea
          rows="4"
          placeholder="Write about your day..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 16,
          }}
        />

        {/* Add Entry Button */}
        <button
          onClick={addEntry}
          style={{
            width: "100%",
            background: "#6c63ff",
            color: "white",
            padding: 12,
            border: "none",
            borderRadius: 8,
            marginTop: 20,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Add Entry
        </button>

        {/* Entries Section */}
        <h2 style={{ marginTop: 30 }}>Your Entries</h2>

        <div>
          {(showAll ? entries : entries.slice(0, 2)).map((entry) => (
            <div
              key={entry.id}
              style={{
                background: "#f8f8ff",
                padding: "16px 20px",
                borderRadius: 12,
                marginBottom: 16,
                lineHeight: 1.6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#333",
                  marginBottom: 6,
                }}
              >
                {entry.emotion}
              </div>

              <div style={{ fontSize: 16, marginBottom: 8, color: "#444" }}>
                {entry.note}
              </div>

              <div
                style={{
                  fontSize: 13,
                  color: "gray",
                  marginTop: 4,
                  textAlign: "right",
                }}
              >
                🕒 {entry.timestamp}
              </div>
            </div>
          ))}

          {/* View More / View Less */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            {entries.length > 2 && (
              <button
                onClick={() => setShowAll((prev) => !prev)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6c63ff",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: "bold",
                  paddingRight: 10,
                }}
              >
                {showAll ? "View Less ↑" : "View More →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
