import React, { useEffect } from "react";

export function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: "#4caf50",
        color: "white",
        padding: "12px 20px",
        borderRadius: 5,
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      {message}
    </div>
  );
}

export function Notifications({ notifications, onRemove }) {
  return (
    <>
      {notifications.map((msg, i) => (
        <Notification key={i} message={msg} onClose={() => onRemove(i)} />
      ))}
    </>
  );
}
