import { useState } from "react";

function Daltonisme() {
  const [selectedSection, setSelectedSection] = useState("Deuteranomaly");

  return (
    <>
    <header>
      <h1 className="text-4xl font-bold mb-10 mt-2 text-center">Les différents type de daltonisme</h1>
    </header>
    <main className="flex flex-col-reverse items-center h-[70vh] ">
      <section className=" select-content-button ">
        <input
          name="value-radio"
          id="value-1"
          type="radio"
          checked={selectedSection === "Deuteranomaly"}
          onChange={() => setSelectedSection("Deuteranomaly")}
        />
        <label htmlFor="value-1" className="select-label-about">
          Deuteranomaly
        </label>
        <input
          name="value-radio"
          id="value-2"
          type="radio"
          checked={selectedSection === "Protanopia"}
          onChange={() => setSelectedSection("Protanopia")}
        />
        <label htmlFor="value-2" className="select-label-about">
          Protanopia
        </label>
        <input
          name="value-radio"
          id="value-3"
          type="radio"
          checked={selectedSection === "Tritanopia"}
          onChange={() => setSelectedSection("Tritanopia")}
        />
        <label htmlFor="value-3" className="select-label-about">
          Tritanopia
        </label>
      </section>

      {selectedSection === "Deuteranomaly" && (
        <section className="flex flex-col items-center justify-center w-[35rem] h-[30rem]  ">
          <h2 className="text-center text-xl w-full font-bold">
            Deuteranomaly
          </h2>
          <p className="m-2">
            La deutéranopie est un type de daltonisme plus communément appelé
            daltonisme rouge-vert. Les personnes atteintes de cette maladie ont
            du mal à faire la distinction entre les nuances de vert et les
            nuances de rouge. De plus, ils peuvent également avoir un spectre
            altéré pour plusieurs autres couleurs, y compris certaines nuances
            de violet, de bleu et de gris. En effet le cône correspondant au
            vert ne fonctionne pas, ce qui rend difficile la distinction entre
            le rouge et le vert. Le daltonien voit principalement des nuances de
            bleu et de jaune
          </p>
        </section>
      )}
      {selectedSection === "Protanopia" && (
        <section className="flex flex-col items-center justify-center w-[35rem] h-[30rem] ">
          <h2 className="text-center text-xl w-full font-bold">Protanopia</h2>
          <p className="m-2">
            Les personnes souffrant de protanopie ont un manque ou une faible
            sensibilité à la lumière pour percevoir correctement la rouge. Cette
            condition, également connue sous le nom de dichromatie rouge, se
            produit en raison de l&apos;inactivité des protocônes, cellules
            sensibles à la partie rouge du spectre visible. Ceux qui souffrent
            de cette condition perçoivent la couleur rouge sur une échelle de
            tons beiges, ce qui peut être très déroutant lorsqu&apos;ils
            interagissent avec le monde extérieur. On sait que la couleur rouge
            est couramment utilisée pour attirer l&apos;attention des êtres
            humains et véhiculer un message d&apos;alerte. Par conséquent,
            l&apos;absence de rouge dans le campou visuel peut présenter un
            danger pour les personnes atteintes de protanopie.
          </p>
        </section>
      )}
      {selectedSection === "Tritanopia" && (
        <section className="flex flex-col items-center justify-center w-[35rem] h-[30rem] ">
          <h2 className="text-center text-xl w-full font-bold">Tritanopia</h2>
          <p className="m-2">
            Anomalie congénitale de la vision des couleurs, caractérisée par
            l&apos;impossibilité de distinguer diverses couleurs du spectre
            lumineux, du vert au violet. La tritanopie est une dyschromatopsie
            (anomalie de la vision des couleurs) très rare. Le sujet qui en est
            atteint confond essentiellement le vert, le bleu et le violet,
            qu&apos;il voit en gris, avec des nuances d&apos;intensité. Il
            n&apos;y a pas de traitement de cette affection.
          </p>
        </section>
      )}
    </main>
    </>
  );
}

export default Daltonisme;
