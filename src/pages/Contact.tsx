export default function Contact() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="mb-8">Contactez-nous</h1>
        <form className="space-y-6 max-w-lg mb-12">
          <div>
            <label className="block mb-2 text-sm">Nom *</label>
            <input type="text" className="w-1/2 border border-gray-300 p-2 focus:outline-none focus:border-gray-500 text-black" required />
          </div>
          <div>
            <label className="block mb-2 text-sm">e-mail *</label>
            <input type="email" className="w-1/2 border border-gray-300 p-2 focus:outline-none focus:border-gray-500 text-black" required />
          </div>
          <div>
            <label className="block mb-2 text-sm">Message *</label>
            <textarea rows={6} className="w-full border border-gray-300 p-2 focus:outline-none focus:border-gray-500 text-black" required></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="privacy" required className="cursor-pointer" />
            <label htmlFor="privacy" className="text-sm cursor-pointer">
              Notre <a href="#" className="underline hover:no-underline">Politique de confidentialité</a> s'applique.
            </label>
          </div>
          <button type="submit" className="bg-[#f0f0f0] px-6 py-2 border border-gray-300 hover:bg-[#e0e0e0] transition-colors text-sm uppercase tracking-wider text-black">
            envoyer
          </button>
          <p className="text-xs mt-4">
            <strong>Note :</strong> veuillez remplir les champs marqués d'un <span className="text-red-500">*</span>.
          </p>
        </form>
      </section>

      <section>
        <h2 className="mb-8">Indiquez votre localisation sur cette carte.</h2>
        <div className="w-full h-[400px] bg-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBs_lAfpuIjfx7DGisR7oUh1ZZ_C5qtGKc&q=+&center=47.3558504056,1.6424599375&zoom=5&maptype=roadmap"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
