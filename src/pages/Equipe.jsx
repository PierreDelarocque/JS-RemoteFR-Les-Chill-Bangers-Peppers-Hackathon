import PropTypes from 'prop-types';

import Amel from "../assets/amel.png";
import Meg from "../assets/meg.jpg";
import Nico from "../assets/nico.jpg";
import Pedro from "../assets/pedro.jpg";



const infosTeam = [
  {
    image: Meg,
    name: "Mégane AUTHEMAYOU",
    role: "Développeuse Web Fullstack",
    github: "https://github.com/megmayou",
  },
  {
    image: Pedro,
    name: "Pierre DELAROCQUE",
    role: "Développeur Web Fullstack",
    github: "https://github.com/PierreDelarocque",
  },
  {
    image: Amel,
    name: "Amel BONNEVIE",
    role: "Développeuse Web Fullstack",
    github: "https://github.com/BonnevieAmel",
  },
  {
    image: Nico,
    name: "Nicolas JUCHEREAU",
    role: "Développeur Web Fullstack",
    github: "https://github.com/Nicolas-jchr",
  },
];

const Card = ({ image, name, role, github }) => (
  <div className={`group before:hover:scale-95 before:hover:h-60 before:hover:w-64 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-64 before:h-20 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-[#0072B2] to-[#0072B2] before:absolute before:top-0 w-64 h-60 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden`}>
    <img src={image} alt={name} className="w-24 h-24 rounded-full border-4 border-slate-50 mt-8 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 object-cover" />
    <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
      <span className="text-xl font-semibold group-hover:text-white transition-all duration-500">{name}</span>
      <p className="group-hover:text-white transition-all duration-500">{role}</p>
    </div>
    <a className="bg-black px-3 py-1 text-slate-50 rounded-md z-10 hover:bg-gray-500" href={github} target="_blank" rel="noopener noreferrer">Github</a>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

function Equipe () { 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Qui sommes-nous ?</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Nous sommes une équipe de développeurs web passionnés par l'accessibilité. 
          Nous avons voulu développer ce site pour sensibiliser les employés aux défis 
          rencontrés par les personnes daltoniennes dans leur quotidien. Notre objectif 
          est de créer une prise de conscience et de promouvoir des pratiques inclusives 
          dans le monde professionnel.
        </p>
        <h2 className="text-2xl max-w-2xl mx-auto mt-4 font-bold">
          Ce projet a été réalisé pour le Hackathon de la Wild Code School, axé sur l'inclusivité en milieu professionnel.
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {infosTeam.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            role={card.role}
            github={card.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Equipe;