import IshiharaTest from "../components/IshiraTest";
import datas from "../js/data";

function Experience() {
  return (
    <>
      <h1 className="text-5xl font-bold flex justify-center mb-4">
        Expériences
      </h1>
      <h2 className="text-4xl font-bold flex justify-center mb-4">
        Vu des daltoniens
      </h2>
      <section className="flex flex-wrap justify-around">
        {datas.map((data) => (
          <section className="flex flex-col" key={data.id}>
            <img className="size-[60rem]" src={data.images} alt={data.titre} />
            <section className="flex justify-center">
              <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-11 w-44 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                <p className="z-10">Normal</p>
              </button>
              <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-11 w-44 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                <p className="z-10">Deuteranomaly</p>
              </button>
              <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-11 w-44 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                <p className="z-10">Protanopia</p>
              </button>
              <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-11 w-44 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                <p className="z-10">Tritanopia</p>
              </button>
            </section>
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
