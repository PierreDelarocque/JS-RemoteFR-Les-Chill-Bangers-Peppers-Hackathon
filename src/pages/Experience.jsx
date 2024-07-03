import IshiharaTest from "../components/IshiraTest";

import datas from "../js/data";

function Experience() {
  return (
    <>
      <h1 className="text-5xl font-bold flex justify-center mb-4">
        Expériences
      </h1>
      <h2 className="text-4xl font-bold flex justify-center mb-4 ">
        Vu des daltoniens
      </h2>
      <section className="flex flex-wrap justify-around">
        {datas.map((datas) => (
          <section className="flex" key={datas.id}>
            <img className="size-11" src={datas.images} alt={datas.titre} />
          </section>
        ))}
      </section>
      <section className="flex-col">
        <h2 className="text-4xl font-bold flex justify-center mb-4">
          Test d'Ishihara
        </h2>
        <section className="flex justify-center">
          <IshiharaTest />
        </section>
      </section>
    </>
  );
}

export default Experience;
