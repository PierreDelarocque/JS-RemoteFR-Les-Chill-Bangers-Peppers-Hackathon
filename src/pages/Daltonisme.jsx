import { useState } from "react";

function Daltonisme() {
  const [selectedSection, setSelectedSection] = useState("Deuteranomaly");

  return (
    <main className="flex flex-col-reverse items-center ">
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
        <section className="flex flex-col items-center justify-center w-[35rem] h-[20rem]  ">
          <h1 className="text-center text-xl w-full font-bold">
            Deuteranomaly
          </h1>
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
        <section className="flex flex-col items-center justify-center w-[35rem] h-[20rem] ">
          <h1 className="text-center text-xl w-full font-bold">Protanopia</h1>
          <p className="m-2">
            Les personnes souffrant de protanopie ont un manque ou une faible
            sensibilité à la lumière pour percevoir correctement la rouge. En
            effet le cône correspondant au rouge ne fonctionne pas, ce qui
            affecte la perception des couleurs rouges et vertes.
          </p>
        </section>
      )}
      {selectedSection === "Tritanopia" && (
        <section className="flex flex-col items-center justify-center w-[35rem] h-[20rem] ">
          <h1 className="text-center text-xl w-full font-bold">Tritanopia</h1>
          <p className="m-2">
            Le cône correspondant au bleu ne fonctionne pas, ce qui altère la
            perception des couleurs bleues et jaunes.
          </p>
        </section>
      )}
    </main>
  );
}

export default Daltonisme;
