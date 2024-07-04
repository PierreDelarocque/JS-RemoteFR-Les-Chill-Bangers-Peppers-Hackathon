import { Link } from "react-router-dom";
import DALTON from "../assets/images/DALTON.jpg";

function Accueil() {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
        <h1 className="font-DM text-left text-5xl font-bold">
          Experience Daltonisme
        </h1>
        <Link to="/experience">
          <button className="border m-12 text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-dark-blue">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-light-yellow"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-dark-yellow"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">Commencer</p>
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={DALTON}
          alt="image daltonien"
        />
      </div>
    </div>
  );
}

export default Accueil;
