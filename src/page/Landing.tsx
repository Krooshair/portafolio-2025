import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Countdown from '../components/utils/Countdown'
import TypingText from '../components/utils/TypingText'
import Marquee from 'react-fast-marquee'
import CardKnowledge from '../components/UI/CardKnowledge'
import Experiences from '../components/section/Experiences'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'aos/dist/aos.css'

import { Autoplay } from 'swiper/modules'
import { useEffect, useRef } from 'react'
import CardProject from '../components/UI/CardProject'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, type FormDto } from '../schema/Form'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import AOS from 'aos'

type Form = {
  company: string
  phone: string
  message: string
}

const Landing = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(FormSchema) })

  const onSubmit: SubmitHandler<FormDto> = data => {
    const serviceEmail = import.meta.env.VITE_SERVICE_EMAILJS
    const templateEmail = import.meta.env.VITE_TEMPLATE_EMAILJS
    const accountEmail = import.meta.env.VITE_ACCOUNT_EMAILJS

    const toastId = toast.loading('Enviando mensaje...')

    emailjs
      .send(serviceEmail, templateEmail, data, {
        publicKey: accountEmail,
      })
      .then(
        () => {
          toast.remove(toastId)
          console.log('SUCCESS!')
          toast.success('Mensaje enviado con éxito!')
        },
        error => {
          toast.remove(toastId)
          console.log('FAILED...', error.text)
          toast.error(`Error: ${error.text}`)
        },
      )
  }

  return (
    <main className="w-full font-poppins">
      <section id="home" className="w-full min-h-svh flex items-center pt-16 overflow-hidden">
        <div className="w-[90%] container mx-auto flex flex-col 2xl:w-full lg:flex-row gap-12">
          {/* TITULO */}
          <div className="w-full lg:w-1/2 h-[350px] md:h-[550px] flex flex-col">
            <div className="w-full flex gap-9 items-center justify-start">
              <Countdown prefix="+" from={0} to={30} title="Proyectos hechos" />
              <Countdown prefix="+" from={0} to={2} title="Años de exp." />
            </div>
            <div className="w-full h-full flex flex-col gap-3 justify-center" data-aos="fade-up">
              <h1 className="font-poppins font-light text-7xl md:text-9xl text-white uppercase">Hola,</h1>
              <div className="w-full flex items-center gap-2">
                <span className="block w-6 h-1 bg-[#D9D9D9]" />
                <TypingText
                  texts={['Soy Fabian Bermudez Tapia', 'Desarrollador Web Full Stack', 'Diseñador UI/UX']}
                  className="uppercase font-poppins text-lg xl:text-2xl font-light text-white"
                />
              </div>
              <div className="w-full flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1AHyxv8QTW/"
                  target="_blank"
                  className="text-xl md:text-2xl lg:text-xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/eddybermudez/"
                  target="_blank"
                  className="text-xl md:text-2xl lg:text-xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/dev_fabian20?igsh=MWY0ZHcwd2k3OGdweg=="
                  target="_blank"
                  className="text-xl md:text-2xl lg:text-xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Krooshair"
                  target="_blank"
                  className="text-xl md:text-2xl lg:text-xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* FOTO */}
          <div className="w-full lg:w-1/2 h-[450px] xl:h-[550px] relative flex justify-center items-center" data-aos="fade-up">
            <div className="absolute w-full h-full bg-radial from-light-blue to-background-blue to-70% animate-pulse"></div>
            <img src="/mi-foto.webp" alt="Fabian Bermudez Tapia" className="z-10 w-[650px]" />
          </div>
        </div>
      </section>

      <section id="about_me" className="w-full min-h-[550px] bg-dark-blue flex justify-center items-center py-16">
        <div className="w-[90%] 2xl:w-full container mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-6" data-aos="fade-right">
            <h2 className="uppercase text-white font-poppins font-semibold lg:font-medium text-4xl lg:text-6xl">
              Soluciones digitales con excelencia.
            </h2>
            <p className="text-white text-lg font-light">
              Desarrollador web full stack con 2 años de experiencia, apasionado por crear soluciones funcionales y
              escalables. Destaco por mi proactividad, buscando anticiparme a los desafíos y aplicar las mejores
              prácticas. Me motiva aprender, mejorar y aportar valor en cada proyecto.
            </p>
            <a
              href="https://wa.me/51985148351"
              target="_blank"
              className="w-fit btn-pulse-gradient uppercase px-6 py-2 font-poppins text-base text-white border border-light-blue rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all  duration-800 relative"
            >
              <span className="relative z-10">Conversermos</span>
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden" data-aos="fade-left">
            <svg viewBox="0 0 500 500" className="lg:size-[600px]">
              <path
                d="M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z"
                fill="#0062A3"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values="M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z;
                              M400.5,317.5Q328,385,231,418Q134,451,110,350.5Q86,250,116,159.5Q146,69,241,85Q336,101,404.5,175.5Q473,250,400.5,317.5Z;
                              M428.5,355Q371,460,252.5,455.5Q134,451,100,350.5Q66,250,106,160Q146,70,241.5,85Q337,100,411.5,175Q486,250,428.5,355Z;
                              M377.5,327.5Q340,405,244,416Q148,427,115,338.5Q82,250,114.5,161Q147,72,255,63.5Q363,55,389,152.5Q415,250,377.5,327.5Z;                                                                                          M406,333Q346,416,240.5,432.5Q135,449,73.5,349.5Q12,250,87.5,174.5Q163,99,268.5,67Q374,35,420,142.5Q466,250,406,333Z;
                              M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z;"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="20s"
                  repeatCount="indefinite"
                  from="0,250,250"
                  to="360,250,250"
                ></animateTransform>
              </path>
            </svg>
            <img
              src="/logotipo.webp"
              alt="Fabian Bermudez Tapia"
              title="Fabian Bermudez Tapia"
              loading="lazy"
              className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-dark-blue border-t border-t-white/5">
        <div className="w-[90%] 2xl:w-full container mx-auto pt-16 pb-32" data-aos="fade-up">
          <Marquee>
            <img
              src="/technology/nestjs.webp"
              alt="NestJs"
              title="Nestjs"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:drop-shadow hover:drop-shadow-red-500"
            />
            <img
              src="/technology/typescript.webp"
              alt="Typescript"
              title="Typescript"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:drop-shadow hover:drop-shadow-sky-500"
            />
            <img
              src="/technology/react.webp"
              alt="React"
              title="React"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100  hover:drop-shadow hover:drop-shadow-sky-500"
            />
            <img
              src="/technology/figma.webp"
              alt="Figma"
              title="Figma"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100  hover:drop-shadow hover:drop-shadow-white"
            />
            <img
              src="/technology/ubuntu.webp"
              alt="Ubuntu"
              title="Ubuntu"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:drop-shadow hover:drop-shadow-orange-400"
            />
            <img
              src="/technology/nodejs.webp"
              alt="NodeJs"
              title="NodeJs"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:drop-shadow hover:drop-shadow-green-400"
            />
            <img
              src="/technology/android.webp"
              alt="Android"
              title="Android"
              className="w-[200px] lg:w-[300px] h-20 object-center object-contain grayscale-100 opacity-50 hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:drop-shadow hover:drop-shadow-green-400"
            />
          </Marquee>
        </div>
      </section>

      <section className="w-full flex justify-center items-center py-16">
        <div className="w-[90%] 2xl:w-full container mx-auto h-[1400px] lg:h-[350px] flex flex-col lg:flex-row gap-12 justify-end lg:items-end">
          <CardKnowledge
            icon="/assets/disenio-ui.svg"
            title="Diseñador UI/UX"
            description="Diseño interfaces limpias y funcionales en Figma, creando experiencias intuitivas que conectan al usuario con el producto de forma natural."
          />
          <CardKnowledge
            icon="/assets/desarrollador.svg"
            title="Desarrollador web"
            description="Construyo aplicaciones modernas con React y TypeScript, APIs sólidas con Node.js y NestJS, y bases de datos eficientes con MySQL y Prisma. También creo soluciones flexibles en WordPress."
          />
          <CardKnowledge
            icon="/assets/devops.svg"
            title="DevOps"
            description="Gestiono despliegues en VPS y hostings, configurando servidores Ubuntu desde terminal. Instalo paneles de control, manejo DNS, servicios de correo y superviso el rendimiento de servidores virtuales para asegurar estabilidad y disponibilidad."
          />
        </div>
      </section>

      <section id="experiences" className="w-full flex justify-center items-center py-16 overflow-hidden">
        <div className="w-[90%] 2xl:w-full container mx-auto flex flex-col gap-9">
          <div className="w-full flex flex-col gap-1" data-aos="fade-up">
            <h2 className="text-5xl font-semibold uppercase text-white font-poppins">Experiencia</h2>
            <p className="text-white text-base font-light font-poppins">
              Te cueto mis distintas experiencias como desarrollador fullstack y diseñador UI/UX
            </p>
          </div>
          <Experiences />
        </div>
      </section>

      <section className="w-full bg-dark-blue py-16 flex justify-center items-center">
        <div className="w-[90%] 2xl:w-full container mx-auto flex justify-center items-center relative">
          <h2 className="font-poppins text-3xl lg:text-4xl font-semibold text-center text-white" data-aos="zoom-in">
            “Construyamos juntos tu próximo proyecto:
            <br /> tecnología sólida, diseño moderno y resultados reales.”
          </h2>
        </div>
      </section>

      <section id="projects" className="w-full flex justify-center items-center py-16">
        <div className="w-[90%] 2xl:w-full container mx-auto flex flex-col gap-9">
          <div className="w-full flex flex-col md:flex-row md:justify-between items-end gap-6">
            <div className="w-full flex flex-col gap-1" data-aos="fade-up">
              <h2 className="text-5xl font-semibold uppercase text-white font-poppins">Proyectos</h2>
              <p className="text-white text-base font-light font-poppins">
                Te presento algunos de los proyectos que he desarrollado como trabajador de la empresa TGH Technology
                Solution.
              </p>
            </div>
            <div className="w-full md:w-fit flex items-center justify-between md:justify-center gap-2" data-aos="fade-up">
              <button
                className="p-1 bg-[#073451] text-2xl text-white rounded-[55%] cursor-pointer hover:bg-light-blue transition-colors active:bg-dark-blue"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <HiChevronLeft />
              </button>
              <button
                className="p-1 bg-[#073451] text-2xl text-white rounded-[55%] cursor-pointer hover:bg-light-blue transition-colors active:bg-dark-blue"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <HiChevronRight />
              </button>
            </div>
          </div>
          <div className="w-full" data-aos="fade-up">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                720: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                }
              }}
              onBeforeInit={swiper => {
                swiperRef.current = swiper
              }}
              loop={true}
              autoplay={{
                delay: 3500,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CardProject
                  image="/project/cetpro.webp"
                  title="Intranet Folklorico AVG"
                  technologies={[
                    '/technology/react.webp',
                    '/technology/nodejs.webp',
                    '/technology/express.webp',
                    '/technology/prisma.webp',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProject
                  image="/project/albamar.webp"
                  title="App Movil | Escritorio Grupo Albamar"
                  technologies={[
                    '/technology/android.webp',
                    '/technology/csharp.webp',
                    '/technology/nestjs.webp',
                    '/technology/prisma.webp',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProject
                  image="/project/brl.webp"
                  title="Software de Inventario BRL Import"
                  technologies={[
                    '/technology/react.webp',
                    '/technology/nodejs.webp',
                    '/technology/express.webp',
                    '/technology/prisma.webp',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProject
                  image="/project/ancash.webp"
                  title="Migración de servidor GORE Ancash"
                  technologies={['/technology/ubuntu.webp']}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProject
                  image="/project/ein.webp"
                  title="Tienda Virtual EIN Global"
                  technologies={[
                    '/technology/react.webp',
                    '/technology/nodejs.webp',
                    '/technology/express.webp',
                    '/technology/prisma.webp',
                  ]}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full flex justify-center items-center py-16">
        <div className="w-[90%] 2xl:w-full container mx-auto flex flex-col gap-9">
          <div className="w-full flex flex-col gap-1" data-aos="fade-up">
            <h2 className="text-5xl font-semibold uppercase text-white font-poppins">Contáctame</h2>
            <p className="text-white text-base font-light font-poppins">
              Ahora que me conoces, creo que es tiempo de que me contactes
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <form className="w-full lg:w-1/2 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} data-aos="fade-up">
              <div className="w-full flex flex-col gap-1">
                <input
                  {...register('company', { required: true })}
                  name="company"
                  placeholder="Empresa"
                  type="text"
                  className="bg-white/5 border border-black rounded-lg p-3 outline-none text-white placeholder:text-[#C2C2C2]"
                />
                {errors.company && <span className="text-red-500">{errors.company.message}</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  {...register('phone', { required: true })}
                  name="phone"
                  placeholder="Teléfono"
                  type="text"
                  className="bg-white/5 border border-black rounded-lg p-3 outline-none text-white placeholder:text-[#C2C2C2]"
                />
                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
              </div>
              <div className="w-full flex flex-col gap-1">
                <textarea
                  {...register('message')}
                  name="message"
                  placeholder="Mensaje"
                  className="h-35 bg-white/5 border border-black rounded-lg p-3 outline-none text-white placeholder:text-[#C2C2C2]"
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              </div>
              <button
                type="submit"
                className="w-fit btn-pulse-gradient uppercase px-6 py-2 font-poppins text-base text-white border border-light-blue rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-800 relative"
              >
                <span className="relative z-10">Enviar mensaje</span>
              </button>
            </form>
            <div className="w-full lg:w-1/2 flex flex-col gap-9" data-aos="fade-up">
              <div className="w-full flex flex-col gap-3 text-white">
                <h3 className="text-2xl font-semibold">Teléfono</h3>
                <p className="font-light">+51 985 148 351</p>
              </div>
              <div className="w-full flex flex-col gap-3 text-white">
                <h3 className="text-2xl font-semibold">Correo</h3>
                <p className="font-light">eddybermudez200103@gmail.com</p>
              </div>
              <div className="w-full flex items-center gap-3 text-white">
                <a
                  href="https://www.facebook.com/share/1AHyxv8QTW/"
                  target="_blank"
                  className="text-2xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/eddybermudez/"
                  target="_blank"
                  className="text-2xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/dev_fabian20?igsh=MWY0ZHcwd2k3OGdweg=="
                  target="_blank"
                  className="text-2xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Krooshair"
                  target="_blank"
                  className="text-2xl text-white hover:drop-shadow hover:drop-shadow-light-blue hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
