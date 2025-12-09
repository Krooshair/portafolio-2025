import { FaWhatsapp } from 'react-icons/fa'

const FloatWhatsapp = () => {
  return (
    <a href='https://wa.me/51985148351' target='_blank' className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-[55%] z-9999 cursor-pointer hover:-translate-y-2 transition-all duration-700">
      <div className="animate-ping absolute top-0 left-0 w-full h-full bg-green-600 rounded-[55%] -z-10" />
      <FaWhatsapp className="text-4xl" />
    </a>
  )
}

export default FloatWhatsapp
