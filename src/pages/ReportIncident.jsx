// src/pages/ReportIncident.jsx
import { useState } from "react";

export default function ReportIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pour l'instant, on affiche les données en console
    console.log({ title, description, photo, location });
    alert("Incident soumis (simulation) !");
    // Remise à zéro du formulaire
    setTitle("");
    setDescription("");
    setPhoto(null);
    setLocation("");
  };

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Signaler un incident</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="title">
            Titre de l'incident
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Ex : Panne électrique dans le bâtiment A"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="description">
            Description détaillée
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Décrivez ce qui s'est passé..."
          />
        </div>

        {/* Photo */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="photo">
            Photo (optionnel)
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          {photo && <p className="mt-2 text-sm">Fichier sélectionné : {photo.name}</p>}
        </div>

        {/* Localisation */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="location">
            Localisation (ex : étage, salle, adresse)
          </label>
          <input
            id="location"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex : Bâtiment A, 2ème étage, salle 203"
          />
        </div>

        {/* Bouton */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}
