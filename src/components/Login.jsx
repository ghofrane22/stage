import React from "react";
import "./Login.css"; // Import du CSS
import { useNavigate } from "react-router-dom";
export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Connexion</h2>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />

        <button type="submit">Se connecter</button>

        <p className="register-link">
          Pas encore de compte ? <a href="/register">S'inscrire</a>
        </p>
      </form>
    </div>
  );
}
