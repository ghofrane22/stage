import React from "react";

export default function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      style={{
        marginBottom: 10,
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          backgroundColor: isUser ? "#007bff" : "#e5e5ea",
          color: isUser ? "white" : "black",
          padding: 10,
          borderRadius: 15,
          wordBreak: "break-word",
        }}
      >
        {message.type === "text" && <span>{message.content}</span>}

        {message.type === "file" && (
          <a
            href={URL.createObjectURL(message.content)}
            download={message.content.name}
            style={{
              color: isUser ? "lightblue" : "blue",
              textDecoration: "underline",
            }}
          >
            {message.content.name}
          </a>
        )}
        <div style={{ fontSize: 10, marginTop: 5, textAlign: "right" }}>
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}
