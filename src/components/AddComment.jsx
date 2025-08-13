import React, { useState } from "react";

export default function AddComment({ onAdd }) {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;
    onAdd(comment.trim());
    setComment("");
  }

  return (
    <section style={{ marginBottom: 20 }}>
      <h3>Ajouter un commentaire</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Écrire un commentaire ou une mise à jour..."
          style={{ width: "100%", padding: 10, fontSize: 14 }}
        />
        <button type="submit" style={{
          marginTop: 10,
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}>Envoyer</button>
      </form>
    </section>
  );
}
