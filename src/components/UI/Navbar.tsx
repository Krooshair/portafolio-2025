import { scrollToSection } from '../../utils/scrollTo'
import { useActiveSection } from '../../hook/useActiveSection'
import { IoMdClose } from 'react-icons/io'
import Curriculum from '../../assets/cv-fabian-bermudez.pdf'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [viewMenu, setViewMenu] = useState<boolean>(false)

  const activeSection = useActiveSection(['home', 'about_me', 'experiences', 'projects', 'contact'])

  const toogleMenu = () => {
    setViewMenu(!viewMenu)
  }

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId
    return `uppercase flex justify-center items-center h-fit py-2 xl:py-0 xl:h-full font-poppins text-base border-b-2 transition-all duration-500 cursor-pointer ${
      isActive
        ? 'text-[#007DD1] border-b-[#007DD1]'
        : 'text-[#464F55] border-b-transparent hover:text-[#007DD1] hover:border-b-[#007DD1]'
    }`
  }

  return (
    <>
      <header className="w-full py-3 bg-background-blue overflow-hidden sticky top-0 z-9999">
        <div className="w-[90%] 2xl:w-full container mx-auto flex justify-between items-center">
          <nav className="w-fit h-fit flex gap-6 items-center">
            <figure className="size-fit cursor-pointer" onClick={() => scrollToSection('home')}>
              <img
                src="/icotipo.webp"
                alt="Fabian Bermudez Tapia"
                title="Fabian Bermudez Tapia"
                loading="lazy"
                className="size-20"
              />
            </figure>
            <div className="w-fit h-20 hidden lg:flex gap-6">
              <span className={getLinkClasses('about_me')} onClick={() => scrollToSection('about_me')}>
                Sobre mí
              </span>
              <span className={getLinkClasses('experiences')} onClick={() => scrollToSection('experiences')}>
                Experiencia
              </span>
              <span className={getLinkClasses('projects')} onClick={() => scrollToSection('projects')}>
                Proyectos
              </span>
              <span className={getLinkClasses('contact')} onClick={() => scrollToSection('contact')}>
                Contacto
              </span>
            </div>
          </nav>
          <div className="flex gap-6 items-center">
            <button className="w-fit lg:hidden" onClick={toogleMenu}>
              <FaBars className="text-2xl text-white" />
            </button>
            <a
              href={Curriculum}
              target="_blank"
              className="w-fit btn-pulse-gradient uppercase px-6 py-2 font-poppins text-base text-white border border-light-blue rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all  duration-800 relative"
            >
              <span className="relative z-10">Ver mi cv</span>
            </a>
          </div>
        </div>
      </header>
      <div
        className={`w-full h-svh fixed top-0 left-0 flex bg-black/35 ${
          viewMenu ? 'opacity-100 z-9999' : 'opacity-0 -z-9999'
        } transition-opacity`}
      >
        <div
          className={`w-full h-full max-w-80 bg-dark-blue text-white flex flex-col gap-6 py-16 ${
            viewMenu ? 'translate-x-0' : '-translate-x-full'
          } duration-700`}
        >
          <div className="w-full flex justify-end px-8">
            <button className="cursor-pointer" onClick={toogleMenu}>
              <IoMdClose className="text-3xl text-white" />
            </button>
          </div>
          <span
            className={getLinkClasses('about_me')}
            onClick={() => {
              scrollToSection('about_me')
              toogleMenu()
            }}
          >
            Sobre mí
          </span>
          <span
            className={getLinkClasses('experiences')}
            onClick={() => {
              scrollToSection('experiences')
              toogleMenu()
            }}
          >
            Experiencia
          </span>
          <span
            className={getLinkClasses('projects')}
            onClick={() => {
              scrollToSection('projects')
              toogleMenu()
            }}
          >
            Proyectos
          </span>
          <span
            className={getLinkClasses('contact')}
            onClick={() => {
              scrollToSection('contact')
              toogleMenu()
            }}
          >
            Contacto
          </span>
        </div>
      </div>
    </>
  )
}

export default Navbar
