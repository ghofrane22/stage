import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function HelpdeskChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir/fermer chat */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: 60,
          height: 60,
          fontSize: 30,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
        aria-label="Ouvrir le chat Helpdesk"
      >
        💬
      </button>

      {/* Fenêtre du chat */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 350,
            maxHeight: 500,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ChatWindow />
        </div>
      )}
    </>
  );
}
