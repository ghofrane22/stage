import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username || !password) return alert("Veuillez entrer vos identifiants.");
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return alert(err.message || 'Échec de la connexion');
      }
      const data = await res.json();
      localStorage.setItem('token', data.token);
      onLogin();
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Erreur réseau lors de la connexion');
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

        <button type="submit">Se connecter</button>

        <p className="register-link">
          Pas encore de compte ? <a href="/register">S'inscrire</a>
        </p>
      </form>
    </div>
  );
}
