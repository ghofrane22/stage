import React from "react";

export default function IncidentForm({ formData, onChange, onSubmit }) {
  return (
    <section
      style={{
        marginBottom: 30,
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <h2>Signaler un incident</h2>
      <form onSubmit={onSubmit}>
        <label>
          Type d'incident : <br />
          <select
            name="type"
            value={formData.type}
            onChange={onChange}
            required
          >
            <option value="">-- Choisir --</option>
            <option value="Panne Internet">Panne Internet</option>
            <option value="Problème Téléphone">Problème Téléphone</option>
            <option value="VPN">VPN</option>
            <option value="Autre">Autre</option>
          </select>
        </label>
        <br />
        <br />

        <label>
          Description : <br />
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            rows={3}
            placeholder="Décrivez le problème"
            required
            style={{ width: "100%" }}
          />
        </label>
        <br />
        <br />

        <label>
          Localisation : <br />
          <input
            type="text"
            name="localisation"
            value={formData.localisation}
            onChange={onChange}
            placeholder="Ex: Agence Tunis, étage 3"
            required
            style={{ width: "100%" }}
          />
        </label>
        <br />
        <br />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
