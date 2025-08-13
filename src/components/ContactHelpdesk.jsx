import React, { useState } from "react";

export default function ContactHelpdesk() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Ici on simule l’envoi, sans backend réel
    if (!formData.nom || !formData.email || !formData.message) {
      alert("Merci de remplir tous les champs");
      return;
    }

    setStatus("Envoi en cours...");
    setTimeout(() => {
      setStatus("Message envoyé avec succès !");
      setFormData({ nom: "", email: "", message: "" });
    }, 1500);
  }

  // Simuler appel WebRTC - dans vrai projet utiliser libs comme simple-peer ou Twilio
  function startCall() {
    alert("Appel WebRTC simulé (à implémenter avec une vraie librairie).");
  }

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Contact Helpdesk</h1>

      <section style={{ marginBottom: 30 }}>
        <h2>Envoyer un email</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 15 }}
        >
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
            style={{ padding: 10, fontSize: 16 }}
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: 10, fontSize: 16 }}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: 10, fontSize: 16 }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: 12,
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Envoyer
          </button>
        </form>
        {status && <p style={{ marginTop: 10, color: "green" }}>{status}</p>}
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Appel direct</h2>
        <button
          onClick={startCall}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 16,
            marginRight: 15,
          }}
        >
          📞 Appel WebRTC
        </button>
        <span style={{ fontSize: 18, fontWeight: "bold" }}>
          ou appelez-nous au : <a href="tel:+33123456789">+33 1 23 45 67 89</a>
        </span>
      </section>

      <section>
        <h2>FAQ & Ressources d’aide</h2>
        <ul>
          <li>
            <strong>Q :</strong> Comment réinitialiser mon mot de passe ?<br />
            <strong>R :</strong> Cliquez sur "Mot de passe oublié" sur la page
            de connexion.
          </li>
          <li>
            <strong>Q :</strong> Que faire en cas de panne Internet ?<br />
            <strong>R :</strong> Vérifiez que votre modem est allumé, puis
            contactez le Helpdesk.
          </li>
          <li>
            <strong>Q :</strong> Comment accéder au VPN ?<br />
            <strong>R :</strong> Téléchargez et installez le client VPN depuis
            notre portail.
          </li>
        </ul>
      </section>
    </div>
  );
}
