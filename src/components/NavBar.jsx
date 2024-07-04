export default function NavBar() {
  return (
    <nav className="bg-dark-blue p-4 shadow-md">
      <ul className="flex justify-around items-center space-x-4 text-white">
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
