import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Countdown from '../components/utils/Countdown'
import TypingText from '../components/utils/TypingText'

const Layout = () => {
  return (
    <>
      <main className="w-full bg-background-blue font-poppins">
        <section className="w-full min-h-svh flex items-center py-16">
          <div className="container mx-auto flex gap-12">
            {/* TITULO */}
            <div className="w-1/2 h-[550px] flex flex-col">
              <div className="w-full flex gap-9 items-center justify-start">
                <Countdown prefix="+" from={0} to={30} title="Proyectos hechos" />
                <Countdown prefix="+" from={0} to={2} title="Años de exp." />
              </div>
              <div className="w-full h-full flex flex-col gap-3 justify-center">
                <h1 className='font-poppins font-light text-9xl text-white uppercase'>Hola,</h1>
                <div className="w-full flex items-center gap-2">
                  <span className="block w-6 h-1 bg-[#D9D9D9]" />
                  <TypingText
                    texts={['Soy Fabian Bermudez Tapia', 'Desarrollador Web Full Stack', 'Diseñador UI/UX']}
                    className="uppercase font-poppins text-2xl font-light text-white"
                  />
                </div>
                <div className="w-full flex items-center gap-3">
                  <a href="https://www.facebook.com/share/1AHyxv8QTW/" target='_blank' className="text-xl text-white"><FaFacebookF /></a>
                  <a href="https://www.linkedin.com/in/eddybermudez/" target='_blank' className="text-xl text-white"><FaLinkedinIn /></a>
                  <a href="https://www.instagram.com/dev_fabian20?igsh=MWY0ZHcwd2k3OGdweg==" target='_blank' className="text-xl text-white"><FaInstagram /></a>
                  <a href="https://github.com/Krooshair" target='_blank' className="text-xl text-white"><FaGithub /></a>
                </div>
              </div>
            </div>

            {/* FOTO */}
            <div className="w-1/2 h-[550px] relative flex justify-center items-center">
              <div className='absolute w-full h-full bg-radial from-light-blue to-background-blue to-65% animate-pulse'></div>
              <img src="/mi-foto.webp" alt="Fabian Bermudez Tapia" className='z-10 w-[480px]' />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Layout
