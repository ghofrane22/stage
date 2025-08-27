// import React, { useState } from "react";

// export default function ContactHelpdesk() {
//   const [formData, setFormData] = useState({
//     nom: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(null);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Ici on simule l’envoi, sans backend réel
//     if (!formData.nom || !formData.email || !formData.message) {
//       alert("Merci de remplir tous les champs");
//       return;
//     }

//     setStatus("Envoi en cours...");
//     setTimeout(() => {
//       setStatus("Message envoyé avec succès !");
//       setFormData({ nom: "", email: "", message: "" });
//     }, 1500);
//   }

//   // Simuler appel WebRTC - dans vrai projet utiliser libs comme simple-peer ou Twilio
//   function startCall() {
//     alert("Appel WebRTC simulé (à implémenter avec une vraie librairie).");
//   }

//   return (
//     <div
//       style={{
//         maxWidth: 700,
//         margin: "auto",
//         padding: 20,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1>Contact Helpdesk</h1>

//       <section style={{ marginBottom: 30 }}>
//         <h2>Envoyer un email</h2>
//         <form
//           onSubmit={handleSubmit}
//           style={{ display: "flex", flexDirection: "column", gap: 15 }}
//         >
//           <input
//             type="text"
//             name="nom"
//             placeholder="Votre nom"
//             value={formData.nom}
//             onChange={handleChange}
//             required
//             style={{ padding: 10, fontSize: 16 }}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Votre email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ padding: 10, fontSize: 16 }}
//           />
//           <textarea
//             name="message"
//             rows={5}
//             placeholder="Votre message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             style={{ padding: 10, fontSize: 16 }}
//           />
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#007bff",
//               color: "white",
//               padding: 12,
//               border: "none",
//               borderRadius: 5,
//               cursor: "pointer",
//               fontSize: 16,
//             }}
//           >
//             Envoyer
//           </button>
//         </form>
//         {status && <p style={{ marginTop: 10, color: "green" }}>{status}</p>}
//       </section>

//       <section style={{ marginBottom: 30 }}>
//         <h2>Appel direct</h2>
//         <button
//           onClick={startCall}
//           style={{
//             backgroundColor: "#28a745",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: 5,
//             cursor: "pointer",
//             fontSize: 16,
//             marginRight: 15,
//           }}
//         >
//           📞 Appel WebRTC
//         </button>
//         <span style={{ fontSize: 18, fontWeight: "bold" }}>
//           ou appelez-nous au : <a href="tel:+33123456789">+33 1 23 45 67 89</a>
//         </span>
//       </section>

//       <section>
//         <h2>FAQ & Ressources d’aide</h2>
//         <ul>
//           <li>
//             <strong>Q :</strong> Comment réinitialiser mon mot de passe ?<br />
//             <strong>R :</strong> Cliquez sur "Mot de passe oublié" sur la page
//             de connexion.
//           </li>
//           <li>
//             <strong>Q :</strong> Que faire en cas de panne Internet ?<br />
//             <strong>R :</strong> Vérifiez que votre modem est allumé, puis
//             contactez le Helpdesk.
//           </li>
//           <li>
//             <strong>Q :</strong> Comment accéder au VPN ?<br />
//             <strong>R :</strong> Téléchargez et installez le client VPN depuis
//             notre portail.
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }


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

  function startCall() {
    alert("Appel WebRTC simulé (à implémenter avec une vraie librairie).");
  }

  const sectionStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: "2rem",
  };

  const inputStyle = {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  const buttonPrimary = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.7rem 1.4rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  };

  const buttonCall = {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.4rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    marginRight: "1rem",
    transition: "background-color 0.2s ease",
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>
        Contact Helpdesk
      </h1>

      <section style={sectionStyle}>
        <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: 600, borderBottom: "2px solid #f0f0f0", paddingBottom: "0.5rem" }}>
          Envoyer un email
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonPrimary}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Envoyer
          </button>
        </form>
        {status && <p style={{ marginTop: "0.8rem", color: "green" }}>{status}</p>}
      </section>

      <section style={sectionStyle}>
        <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: 600, borderBottom: "2px solid #f0f0f0", paddingBottom: "0.5rem" }}>
          Appel direct
        </h2>
        <button
          onClick={startCall}
          style={buttonCall}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          📞 Appel WebRTC
        </button>
        <span style={{ fontSize: "1rem", fontWeight: "500" }}>
          ou appelez-nous au: <a href="tel:+33123456789">+33 1 23 45 67 89</a>
        </span>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: 600, borderBottom: "2px solid #f0f0f0", paddingBottom: "0.5rem" }}>
          FAQ & Ressources d’aide
        </h2>
        <ul style={{ paddingLeft: 0, listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <li>
            <strong>Q :</strong> Comment réinitialiser mon mot de passe ?<br />
            <strong>R :</strong> Cliquez sur "Mot de passe oublié" sur la page de connexion.
          </li>
          <li>
            <strong>Q :</strong> Que faire en cas de panne Internet ?<br />
            <strong>R :</strong> Vérifiez que votre modem est allumé, puis contactez le Helpdesk.
          </li>
          <li>
            <strong>Q :</strong> Comment accéder au VPN ?<br />
            <strong>R :</strong> Téléchargez et installez le client VPN depuis notre portail.
          </li>
        </ul>
      </section>
    </div>
  );
}
