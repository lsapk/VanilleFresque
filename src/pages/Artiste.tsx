export default function Artiste() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="mb-6">Emmanuelle Seccia, artiste peintre</h1>
        <div className="space-y-4 leading-relaxed">
          <p>
            <strong>Emmanuelle Seccia</strong>, artiste peintre, peintre en décor depuis 23 ans, est installée à Chevinay 69210, dans l'ouest Lyonnais, près de Lyon.
          </p>
          <p>
            Elle est perfectionniste par nature. Peintre en décor de formation, passionnée des trompe l'oeil, elle allie connaissances techniques et qualités artistiques.
          </p>
          <p>
            <strong>Emmanuelle</strong> étudie ce qui correspond le mieux à vos désirs, votre intérieur, votre personnalité et votre mode de vie. Elle apporte des conseils sur mesure, grâce à son sens de l'esthétisme, de la composition et des couleurs.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[260px]">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=320x10000:format=jpg/path/s2cc6620082dc29db/image/i2b945bf8c3f4e8fc/version/1427547711/image.jpg"
          alt="Emmanuelle Seccia"
          className="w-full h-auto shadow-sm"
        />
      </div>
    </div>
  );
}
