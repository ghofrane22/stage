// src/pages/Home.jsx
export default function Home() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur la plateforme</h1>
        <p className="text-lg mb-6">
          Cette application permet de signaler rapidement des incidents et de suivre leur résolution.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold text-xl mb-2">📢 Signaler un incident</h2>
            <p>Décrivez le problème rencontré et soumettez-le aux responsables.</p>
          </div>
  
          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold text-xl mb-2">📋 Consulter les incidents</h2>
            <p>Visualisez la liste des incidents en cours et terminés.</p>
          </div>
  
          <div className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold text-xl mb-2">🗺️ Localisation</h2>
            <p>Suivez les incidents sur une carte interactive.</p>
          </div>
        </div>
      </div>
    );
  }
  