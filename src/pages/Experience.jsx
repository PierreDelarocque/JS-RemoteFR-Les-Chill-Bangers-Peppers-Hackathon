import IshiharaTest from "../components/IshiraTest";

import datas from "../js/data";

function Experience() {
  return (
    <>
      <h1 className="text-5xl font-bold ">Expériences</h1>
      <section>
        <h2 className="text-4xl font-bold ">Vu des daltoniens</h2>
        {datas.map((datas) => (
          <section className="flex-row" key={datas.id}>
            <img className="w-20" src={datas.images} alt={datas.titre} />
          </section>
        ))}
      </section>
      <section>
        <h2>Test d'Ishihara</h2>
        <IshiharaTest />
      </section>
    </>
  );
}

export default Experience;
