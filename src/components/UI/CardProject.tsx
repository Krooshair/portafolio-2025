type Props = {
  image: string
  title: string
  technologies: string[]
}

const CardProject = ({ image, title, technologies }: Props) => {
  return (
    <div className="w-full flex overflow-hidden font-poppins animate-fade">
      <div className="w-full h-[350px] flex flex-col justify-end p-3 gap-2 rounded-xl bg-linear-180 from-black/0 from-50% to-black overflow-hidden relative group">
        <img src={image} alt={title} title={title} loading="lazy" className="w-full h-full absolute top-0 left-0 object-top object-cover -z-10 group-hover:scale-105 transition-all duration-500" />
        <h2 className="uppercase text-white font-bold text-2xl">{title}</h2>
        <div className="flex gap-2">
          <span className="text-white font-light">Tecnologías</span>
          {technologies.map(tch => (
            <img src={tch} loading="lazy" className="size-6" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardProject
