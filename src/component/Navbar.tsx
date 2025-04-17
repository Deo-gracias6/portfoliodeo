import { useEffect, useState } from "react";
import { Container } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-accent shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        <a
          href="#"
          className={`flex items-center font-bold text-3xl md:text-xl transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Container className="mr-2" />
          DEO
          <span
            className={`ml-1 font-bold transition-colors duration-300 ${
              scrolled ? "text-white" : "text-accent"
            }`}
          >
            Dev
          </span>
        </a>

        <ul className={`hidden md:flex space-x-10 transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
          <li>
            <a href="#" className="btn btn-sm btn-ghost">Accueil</a>
          </li>
          <li>
            <a href="#" className="btn btn-sm btn-ghost">À propos</a>
          </li>
          <li>
            <a href="#" className="btn btn-sm btn-ghost">Mes expériences</a>
          </li>
          <li>
            <a href="#" className="btn btn-sm btn-ghost">Mes projets</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
