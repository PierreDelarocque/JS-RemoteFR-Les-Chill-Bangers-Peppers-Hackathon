import fruitleg from "../assets/images/fruitetlegime.png";

function Experience4() {
  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center mb-4 mt-2">
        Expérience 4/4
      </h1>
      <h2 className="text-1xl font-bold flex justify-center mb-4">
        Vous allez pouvoir observer comment chaque type de daltonisme peut
        percevoir une image
      </h2>
      <div className="flex justify-center items-start space-x-8">
        <div className="flex flex-col space-y-20 mt-10">
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
            <p className="z-10">Tritanopia</p>
          </button>
          <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-11 w-44 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
            <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
            <p className="z-10">Protanopia</p>
          </button>
        </div>
        <img className="w-96 h-auto" src={fruitleg} alt="daltonien" />
      </div>
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
        <a
          href="/experience-2"
          className="border hover:scale-95 duration-300 relative group cursor-pointer text-white bg-blue-500 hover:bg-blue-700 p-3 rounded-md"
        >
          Précédent
        </a>
      </div>
      <div className="flex justify-end items-center mt-4 fixed right-4 top-1/2 transform -translate-y-1/2">
        <a
          href="/conclusion"
          className="border hover:scale-95 duration-300 relative group cursor-pointer text-white bg-yellow-500 hover:bg-blue-700 p-3 rounded-md"
        >
          Conclusion
        </a>
      </div>
    </>
  );
}

export default Experience4;
