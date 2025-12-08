import { scrollToSection } from '../../utils/scrollTo'
import { useActiveSection } from '../hook/useActiveSection';
import Curriculum from '/cv-fabian-bermudez.pdf'

const Navbar = () => {

  const activeSection = useActiveSection(['home', 'about_me', 'experiences', 'projects', 'contact']);

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `uppercase flex justify-center items-center h-full font-poppins text-base border-b-2 transition-all duration-500 cursor-pointer ${
      isActive 
        ? 'text-[#007DD1] border-b-[#007DD1]' 
        : 'text-[#464F55] border-b-transparent hover:text-[#007DD1] hover:border-b-[#007DD1]'
    }`;
  };

  return (
    <header className="w-full py-3 bg-background-blue overflow-hidden sticky top-0 z-9999">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="w-fit h-fit flex gap-6 items-center">
          <figure className="size-fit cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="/icotipo.webp"
              alt="Fabian Bermudez Tapia"
              title="Fabian Bermudez Tapia"
              loading="lazy"
              className="size-20"
            />
          </figure>
          <div className="w-fit h-20 flex gap-6">
            <span className={getLinkClasses('about_me')} onClick={() => scrollToSection("about_me")}>
              Sobre mí
            </span>
            <span className={getLinkClasses('experiences')}  onClick={() => scrollToSection("experiences")}>
              Experiencia
            </span>
            <span className={getLinkClasses('projects')}  onClick={() => scrollToSection("projects")}>
              Proyectos
            </span>
            <span className={getLinkClasses('contact')}  onClick={() => scrollToSection("contact")}>
              Contacto
            </span>
          </div>
        </nav>
        <a
          href={Curriculum}
          target='_blank'
          className="w-fit btn-pulse-gradient uppercase px-6 py-2 font-poppins text-base text-white border border-light-blue rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all  duration-800 relative"
        >
          <span className="relative z-10">Ver mi cv</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
