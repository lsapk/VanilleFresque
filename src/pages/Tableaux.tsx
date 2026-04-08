import { useState } from 'react';

export default function Tableaux() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-16 relative">
      {/* Nouveaux tableaux */}
      <section className="space-y-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/eveil-du-glyphe.jpg" 
              alt="L'Éveil du Glyphe" 
              className="w-full h-auto shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedImage('/eveil-du-glyphe.jpg')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#e6d4a6]">« L'ÉVEIL DU GLYPHE »</h2>
            <p className="leading-relaxed">
              Immersion chromatique au cœur des mythologies précolombiennes, cette œuvre croise mandala sacré et design géométrique. L'alliance de l'or, de l'ocre et du bleu azur évoque une dualité entre le faste des civilisations solaires et une dimension divine. Une icône contemporaine et intemporelle.
            </p>
            <p className="font-bold">50 * 50 cm</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/aube-interieure.jpg" 
              alt="L'Aube Intérieure" 
              className="w-full h-auto shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedImage('/aube-interieure.jpg')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#e6d4a6]">« L'AUBE INTÉRIEURE »</h2>
            <p className="leading-relaxed">
              Baignée de lumière, cette œuvre est une méditation visuelle au confluent des civilisations ancestrales et de la spiritualité contemporaine. Équilibre parfait entre géométrie sacrée et pigments solaires, elle nous invite à retrouver notre propre lumière intérieure.
            </p>
            <p className="font-bold">50 * 50 cm</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/reine-chamane.jpg" 
              alt="Reine-Chamane" 
              className="w-full h-auto shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedImage('/reine-chamane.jpg')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#e6d4a6]">« REINE-CHAMANE »</h2>
            <p className="leading-relaxed">
              Fusion d'influences ancestrales et d'esthétique mystique contemporaine, cette œuvre intègre une géométrie Maya et Aztèque. Ses accents métalliques lui confèrent la dimension d'un artefact sacré, racontant l'histoire d'une reine-chamane veillant sur le passage entre les mondes matériel et spirituel.
            </p>
            <p className="font-bold">50 * 50 cm</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/souffle-du-quetzal.jpg" 
              alt="Le Souffle du Quetzal" 
              className="w-full h-auto shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedImage('/souffle-du-quetzal.jpg')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#e6d4a6]">« LE SOUFFLE DU QUETZAL »</h2>
            <p className="leading-relaxed">
              Inspirée de l'iconographie précolombienne, cette pièce vibrante s'inscrit dans un cercle parfait évoquant un calendrier solaire aztèque. Le visage humain remplace la divinité sur un fond doré, suggérant que le sacré réside désormais à l'intérieur de l'individu.
            </p>
            <p className="font-bold">50 * 50 cm</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/regard-de-l-ame.jpg" 
              alt="Le Regard de l'Âme" 
              className="w-full h-auto shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedImage('/regard-de-l-ame.jpg')}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-[#e6d4a6]">« LE REGARD DE L'ÂME »</h2>
            <p className="leading-relaxed">
              Fusion de spiritualité ancestrale et de design visionnaire, cette peinture invite à l'introspection. Le choix du violet, teinte de la transformation, symbolise le passage du matériel au spirituel. Une allégorie de la sagesse silencieuse et de la force intérieure.
            </p>
            <p className="font-bold">50 * 50 cm</p>
          </div>
        </div>
      </section>

      {/* Anciens tableaux transformés en grille */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=344x1024:format=jpg/path/s2cc6620082dc29db/image/i5bbdeb0f915515ec/version/1588979511/image.jpg" alt="Peinture acrylique sur toile" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=524x1024:format=jpg/path/s2cc6620082dc29db/image/i2dfaf9c882ddb211/version/1588979511/image.jpg" alt="Acrylique sur toile" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=305x10000:format=jpg/path/s2cc6620082dc29db/image/id3d52f0e78be930a/version/1588877326/vanille-fresque-emmanuelle-seccia-portrait-acrylique-sur-toile.jpg" alt="Portrait" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
          <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s2cc6620082dc29db/image/i414db71c354734cc/version/1588877474/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1024x2048:format=jpg/path/s2cc6620082dc29db/image/i97850bee46c0f3f4/version/1588877474/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        </div>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* 16 images */}
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i966b0070763034d3/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/ia66ac53909c6cad3/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i2f6976e3f479d79f/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i1ddf99587bffe577/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i68571a649ef81b49/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i061e0bb9dfea59da/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i18ce0566d1592fb5/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i1cee7a808624c869/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/ib23eb2128e7f8922/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i1def6b106b4efbfb/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/ic96619b04178da8b/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i4613c5a03bb8c7ba/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/iad2025af150758c1/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/ie036248a7afea2cc/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/icbfbbbfc2a072512/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:mode=crop:format=jpg/path/s2cc6620082dc29db/image/i8d96246ff645585c/version/1437374385/image.jpg" alt="" className="w-full aspect-square object-cover hover:opacity-90 cursor-pointer transition-opacity" onClick={(e) => setSelectedImage(e.currentTarget.src)} />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Vue agrandie" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
            <button 
              className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
