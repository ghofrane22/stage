import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client"); // rôle par défaut

  const handleSubmit = (e) => {
    e.preventDefault(); // éviter le reload

    if (username && password) {
      // simulation : sauvegarder les infos de connexion
      localStorage.setItem("token", "fakeToken123");
      localStorage.setItem("role", role); // sauvegarde du rôle choisi
      localStorage.setItem("username", username);

      onLogin(); // mettre à jour l'état global
      navigate("/"); // rediriger vers la page d'accueil/dashboard
    } else {
      alert("Veuillez entrer vos identifiants.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Champ rôle */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="technicien">Technicien</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Se connecter</button>

        <p className="register-link">
          Pas encore de compte ? <a href="/register">S'inscrire</a>
        </p>
      </form>
    </div>
  );
}
