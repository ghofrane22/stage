import React, { useState } from 'react';

export default function AdminPanel() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const createTechnicien = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  if (!token) return alert('Vous devez être connecté en tant qu\'admin.');
    try {
      const res = await fetch('/api/technicien', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, name, password, isAdmin })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        return alert(body.message || 'Erreur lors de la création');
      }
      alert('Technicien créé');
      setEmail(''); setName(''); setPassword(''); setIsAdmin(false);
    } catch (err) {
      console.error(err);
      alert('Erreur réseau');
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Admin - Créer Technicien</h2>
      <form onSubmit={createTechnicien} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="Nom" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Mot de passe" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <label><input type="checkbox" checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} /> Is Admin</label>
        <button type="submit">Créer</button>
      </form>
    </div>
  )
}
