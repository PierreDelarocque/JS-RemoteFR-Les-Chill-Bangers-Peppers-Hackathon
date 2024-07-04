import Logo from "../assets/images/logo3.png";

export default function NavBar() {
  return (
    <nav className="bg-dark-blue p-2 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} className="h-16 w-auto" alt="Logo" />
      </div>
      <ul className="flex flex-1 justify-center items-center space-x-10 text-white">
        <li>
          <a href="/" className="hover:text-gray-300">
            Accueil
          </a>
        </li>
        <li>
          <a href="/daltonisme" className="hover:text-gray-300">
            Le daltonisme
          </a>
        </li>
        <li>
          <a href="/experience" className="hover:text-gray-300">
            Expériences
          </a>
        </li>
        <li>
          <a href="/equipe" className="hover:text-gray-300">
            L&apos;équipe
          </a>
        </li>
      </ul>
    </nav>
  );
}

