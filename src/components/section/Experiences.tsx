import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

type Experiencies = {
  id: number
  title: string
  list: string[]
  logo: string
  company: string
  description: string
}

const Experiences = () => {
  const [viewExperiences, setViewExperiences] = useState<number>(1)

  const handleExperiences = (id: number) => {
    setViewExperiences(id)
  }

  const experiences: Experiencies[] = [
    {
      id: 1,
      title: 'Coordinador TI | Ene. 2024 - Dic. 2025',
      list: [
        'Trabaje 2 años en la empresa TGH Technology Solution.',
        'Liderazgo y gestión completa de proyectos tecnológicos.',
        'Comunicación directa y manejo de clientes.',
        'Implementación de nuevas tecnologías y metodologías de trabajo.',
        'Desarrollo de páginas web, ecommerce, software a medida y apps móviles nativas.',
        'Despliegue de proyectos en hostings compartidos y VPS Linux.',
        'Capacitación a clientes y formación de practicantes.',
        'Diseño UI/UX y modernización de interfaces.',
        'Instalación y configuración de paneles de control (VirtualMin, Webmin, CyberPanel, HestiaCP).',
        'Configuración de servicios de correo (SOGo, iRedAdmin, Webmail, RoundCube).',
        'Administración de recursos tecnológicos (dominios, hostings, VPS, etc).',
      ],
      logo: '/company/tgh.webp',
      company: 'TGH Technology Solution',
      description:
        'Soy un desarrollador con experiencia en TGH Technology Solution, donde durante dos años lideré la planificación y entrega de proyectos web y software. He desarrollado páginas web, ecommerce, aplicaciones móviles no nativas y sistemas a medida, además de gestionar despliegues en hostings y VPS Linux.\n También he dirigido equipos, capacitado clientes, formado practicantes y diseñado interfaces UI/UX. Tengo experiencia en migraciones de servidores y correos corporativos, así como en la instalación de paneles y servicios de correo. Me especializo en implementar nuevas tecnologías y optimizar procesos para lograr proyectos eficientes y de calidad.',
    },
    {
      id: 2,
      title: 'Diseñador UI/UX | Feb. 2023 - Ago. 2023',
      list: [
        'Estuve 6 meses realizando mis practicas.',
        'Fui lider de mi área.',
        'Gestionaba al equipo para cumplir con las tareas programadas.',
        'Encargado de realizar las entregas de diseños.',
        'Comunicación y trabajo en equipo.',
        'Capacitación a los nuevos integrantes del área.',
      ],
      logo: '/company/devdatep.webp',
      company: 'Dev Datep Consulting',
      description:
        'Durante mis prácticas, que se extendieron por 6 meses, asumí el rol de líder de área, coordinando al equipo para asegurar el cumplimiento de las tareas programadas. Estuve a cargo de la entrega de diseños y mantuve una comunicación constante con los integrantes para garantizar un trabajo fluido y colaborativo. Además, apoyé la integración de nuevos miembros mediante capacitaciones y acompañamiento, fortaleciendo el crecimiento del equipo.',
    },
    {
      id: 3,
      title: 'Desarrollador Web | Jul. 2022 - Dic. 2022',
      list: [
        'Estuve 6 meses realizando mis practicas.',
        'Participe junto al equipo en la creación de un software para la empresa.',
        'Fui co-líder, la cual mi labor fue ayudar con los entregables al líder y en gestionar las tareas para el área de frontend.',
        'Desarrolle con técnología como HTML, CSS, Javascript y PHP',
        'Comunicación y trabajo en equipo.',
      ],
      logo: '/company/jhardsystex.webp',
      company: 'Jhard Sytex',
      description:
        'Durante mis 6 meses de prácticas, participé junto al equipo en la creación de un software interno para la empresa. Fui co-líder del proyecto, apoyando al líder principal con los entregables y gestionando las tareas del área de frontend. Desarrollé funcionalidades utilizando HTML, CSS, JavaScript y PHP, manteniendo siempre una comunicación fluida y un trabajo colaborativo con el equipo.',
    },
  ]

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:p-6">
      <div className="w-full lg:w-1/2 flex flex-col gap-4" data-aos="fade-up" >
        {experiences.map(exp => (
          <div className="w-full flex flex-col gap-4" key={exp.id}>
            <div
              className={`w-full flex items-center gap-3 cursor-pointer ${
                viewExperiences == exp.id ? 'text-white' : 'text-[#003659]'
              }`}
              onClick={() => handleExperiences(exp.id)}
            >
              <h2 className={`w-full text-2xl font-poppins font-semibold`}>{exp.title}</h2>
              {viewExperiences == exp.id ? (
                <HiChevronUp className="text-base" />
              ) : (
                <HiChevronDown className="text-base" />
              )}
            </div>
            <ul
              className={`list-disc flex flex-col gap-1 text-[#AAAAAA] font-light font-poppins ml-4 ${
                viewExperiences == exp.id ? 'h-fit lg:h-80 transition-all duration-500' : 'h-0 transition-all duration-800'
              } overflow-hidden`}
            >
              {exp.list.map((itm, i) => (
                <li key={i}>{itm}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-up" >
        {experiences.map(exp => (
          <div className={`${viewExperiences == exp.id ? 'flex flex-col animate-fade' : 'hidden'}`} >
            <div className={`w-full flex justify-center items-center relative overflow-hidden `}>
              <svg viewBox="0 0 500 500" className="size-[400px]">
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
                src={exp.logo}
                alt={exp.company}
                title={exp.company}
                loading="lazy"
                className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[200px]"
              />
            </div>
            <div className="w-full flex flex-col gap-9">
              <p className="text-white font-poppins">{exp.description}</p>
              <a
                href="https://wa.me/51985148351"
                target="_blank"
                className="w-fit btn-pulse-gradient uppercase px-6 py-2 font-poppins text-base text-white border border-light-blue rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all  duration-800 relative"
              >
                <span className="relative z-10">Contáctame</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
