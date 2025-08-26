import React, { useState } from 'react';

export default function Register({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg(data.message || 'Registration failed');
        setLoading(false);
        return;
      }

      // Auto-login after register
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const loginData = await loginRes.json().catch(() => ({}));
      if (loginRes.ok && loginData.token) {
        localStorage.setItem('token', loginData.token);
        if (typeof onLogin === 'function') onLogin();
      } else {
        setMsg(loginData.message || 'Registered but login failed');
      }

    } catch (err) {
      console.error(err);
      setMsg('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto' }}>
      <h2>Créer un compte</h2>
      {msg && <div style={{ color: 'red', marginBottom: 8 }}>{msg}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Nom</label>
          <input required value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Mot de passe</label>
          <input required type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Création...' : 'S\'inscrire'}</button>
      </form>
    </div>
  );
}
