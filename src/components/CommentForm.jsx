import React, { useState } from "react";

export default function CommentForm({ onAdd }) {
  const [texte, setTexte] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!texte.trim()) return;
    onAdd(texte.trim());
    setTexte("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
      <textarea
        rows={3}
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Ajouter un commentaire"
        style={{ width: "100%", padding: 8 }}
      />
      <button
        type="submit"
        style={{
          marginTop: 5,
          padding: "6px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Ajouter
      </button>
    </form>
  );
}
