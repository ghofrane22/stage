import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "agent",
      type: "text",
      content: "Bonjour, comment puis-je vous aider ?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);
  const messagesEndRef = useRef(null);

  // Scroll automatique en bas du chat à chaque message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simuler la disponibilité de l’agent (ici statique)
  const agentAvailable = true;

  function handleSend() {
    if (!input.trim() && files.length === 0) return;

    const newMessages = [];

    if (input.trim()) {
      newMessages.push({
        id: Date.now(),
        sender: "user",
        type: "text",
        content: input.trim(),
        timestamp: new Date().toLocaleTimeString(),
      });
    }

    files.forEach((file) => {
      newMessages.push({
        id: Date.now() + Math.random(),
        sender: "user",
        type: "file",
        content: file,
        timestamp: new Date().toLocaleTimeString(),
      });
    });

    setMessages((prev) => [...prev, ...newMessages]);
    setInput("");
    setFiles([]);
  }

  function handleFileChange(e) {
    setFiles(Array.from(e.target.files));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <header
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <div>Helpdesk Chat</div>
        <div style={{ fontSize: 14, fontStyle: "italic" }}>
          Agent:{" "}
          {agentAvailable ? (
            <span style={{ color: "lightgreen" }}>En ligne</span>
          ) : (
            <span style={{ color: "red" }}>Hors ligne</span>
          )}
        </div>
      </header>

      <div
        style={{
          flexGrow: 1,
          padding: 10,
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          padding: 10,
          borderTop: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          placeholder="Écrire un message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={2}
          style={{ resize: "none", padding: 8, fontSize: 14, marginBottom: 8 }}
        />

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ marginBottom: 8 }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
