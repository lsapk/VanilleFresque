import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Artiste from './pages/Artiste';
import Projet from './pages/Projet';
import Realisations from './pages/Realisations';
import TrompeLoeil from './pages/TrompeLoeil';
import Tableaux from './pages/Tableaux';
import Animations from './pages/Animations';
import ArtTherapie from './pages/ArtTherapie';
import Contact from './pages/Contact';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="l-artiste" element={<Artiste />} />
          <Route path="votre-projet" element={<Projet />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="trompe-l-oeil" element={<TrompeLoeil />} />
          <Route path="tableaux" element={<Tableaux />} />
          <Route path="animations" element={<Animations />} />
          <Route path="art-therapie" element={<ArtTherapie />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
