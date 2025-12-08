type Props = {
  icon: string
  title: string
  description: string
}

const CardKnowledge = ({ icon, title, description }: Props) => {
  return (
    <div className="w-full" data-aos="fade-up" >
      <div className="w-full h-[480px] flex flex-col justify-center p-9 gap-4 bg-[#091C2B] rounded-sm hover:bg-light-blue hover:-translate-y-1 transition-all">
        <img src={icon} alt={title} title={title} loading="lazy" className="size-16" />
        <div className="w-full flex flex-col gap-1">
          <h2 className="font-poppins text-2xl font-semibold text-white">{title}</h2>
          <p className="font-poppins font-light text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardKnowledge
