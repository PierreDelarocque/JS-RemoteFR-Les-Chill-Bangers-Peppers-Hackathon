import PropTypes from 'prop-types';
import infosTeam from '../js/infosTeam';


const Card = ({ image, name, role, github, linkedin }) => (
  <div className={`group before:hover:scale-95 before:hover:h-80 before:hover:w-64 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-64 before:h-40 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-[#0072B2] to-[#0072B2] before:absolute before:top-0 w-64 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden`}>
    <img src={image} alt={name} className="w-24 h-24 rounded-full border-4 border-slate-50 mt-8 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 object-cover" />
    <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
      <span className="text-xl font-semibold group-hover:text-white transition-all duration-500">{name}</span>
      <p className="group-hover:text-white transition-all duration-500">{role}</p>
    </div>
    <div className="flex gap-2 z-10 mt-2">
      <a className="bg-black px-2 py-1 text-slate-50 rounded-md hover:bg-gray-500 transition-all duration-500 flex items-center" href={github} target="_blank" rel="noopener noreferrer">
        <svg
          className="w-5 h-5 fill-current mr-2"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.04.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.623-5.475 5.92.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.218.694.825.576 4.765-1.584 8.199-6.081 8.199-11.383 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a className="bg-sky-700 hover:bg-sky-600 px-2 py-1 text-neutral-50 rounded-md transition-all duration-500 flex items-center" href={linkedin} target="_blank" rel="noopener noreferrer">
        <svg
          className="w-5 h-5 fill-current mr-2"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.412c0-1.29-.025-2.935-1.791-2.935-1.791 0-2.065 1.4-2.065 2.849v5.498h-3v-10h2.888v1.354h.041c.403-.765 1.387-1.565 2.853-1.565 3.049 0 3.611 2.006 3.611 4.616v5.595z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

function Equipe () { 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-10">Qui sommes-nous ?</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {infosTeam.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            role={card.role}
            github={card.github}
            linkedin={card.linkedin}
          />
        ))}
      </div>
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
    </div>
  );
}

export default Equipe;