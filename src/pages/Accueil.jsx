import DALTON from "../assets/images/DALTON.jpg";

function Accueil() {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-left text-5xl font-bold">Experience Daltonisme</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img className="w-full h-full" src={DALTON} alt="image daltonien" />
      </div>
    </div>
  );
}

export default Accueil;
