import { Link, NavLink, Outlet } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react';

export default function Layout() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-1 pr-6 text-[120%] no-underline ${
      isActive ? 'text-[#E6D1B1] font-bold' : 'text-[#E6D1B1] hover:text-[#a6a6a6]'
    }`;

  return (
    <div className="w-[970px] mx-auto pb-10">
      {/* Header Image */}
      <div className="w-[970px] h-[288px] relative">
        <Link to="/">
          <img
            src="/header.jpg"
            alt="Header"
            className="w-full h-full object-cover border-none"
          />
        </Link>
      </div>

      {/* Main Wrapper with semi-transparent black background */}
      <div className="p-[30px] bg-black/60 flex justify-between">
        
        {/* Left Column: Nav + Content + Footer */}
        <div className="w-[697px]">
          
          {/* Navigation */}
          <nav className="mb-8 border-b border-white/30 pb-2">
            <ul className="flex flex-wrap m-0 p-0 list-none">
              <li><NavLink to="/" end className={navLinkClass}>Accueil</NavLink></li>
              <li><NavLink to="/l-artiste" className={navLinkClass}>L'Artiste</NavLink></li>
              <li><NavLink to="/votre-projet" className={navLinkClass}>Votre Projet</NavLink></li>
              <li><NavLink to="/realisations" className={navLinkClass}>Réalisations</NavLink></li>
              <li><NavLink to="/trompe-l-oeil" className={navLinkClass}>Trompe l'oeil</NavLink></li>
              <li><NavLink to="/tableaux" className={navLinkClass}>Tableaux</NavLink></li>
              <li><NavLink to="/animations" className={navLinkClass}>Animations</NavLink></li>
              <li><NavLink to="/art-therapie" className={navLinkClass}>Art-Thérapie</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Page Content */}
          <main className="min-h-[400px]">
            <Outlet />
          </main>

          {/* Footer */}
          <footer className="mt-8 pt-2 border-t border-[#e6e6e6] text-sm flex justify-between">
            <div>
              <a href="#">Mentions légales</a> |{' '}
              <a href="#">Politique de confidentialité</a> |{' '}
              <a href="#">Plan du site</a>
            </div>
          </footer>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-[180px]">
          <h3 className="mb-4">Partagez...</h3>
          
          <div className="flex gap-1 mb-6">
            <a href="https://www.facebook.com/share/1NBWhcViGe/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 no-underline">
              <Facebook size={16} fill="currentColor" className="border-none" />
            </a>
            <a href="https://www.instagram.com/vanille_fresque?igsh=MnZqYjIyMTkwYTQ2" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#E1306C] text-white flex items-center justify-center hover:opacity-80 no-underline">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 no-underline">
              <Linkedin size={16} fill="currentColor" />
            </a>
            <a href="https://www.vincent-ducaroy.fr" target="_blank" rel="noopener noreferrer" title="Vincent Ducaroy" className="w-8 h-8 bg-[#333333] text-white flex items-center justify-center hover:opacity-80 no-underline">
              <Globe size={16} />
            </a>
          </div>
          
          <div className="h-[1px] bg-[#666666] mb-6"></div>
          
          <div className="space-y-4">
            <p><strong>Contactez-nous par...</strong></p>
            <p>06.15.93.84.77</p>
            <p>
              <a href="mailto:vanillefresque@yahoo.fr" className="whitespace-nowrap">
                vanillefresque@yahoo.fr
              </a>
            </p>
            <p className="text-center mt-4">EMMANUELLE SECCIA</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
