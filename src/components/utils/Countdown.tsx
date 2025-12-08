import { animate } from 'motion'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect } from 'react'

type Props = {
  prefix?: string
  from: number
  to: number
  title: string
}

const Countdown = ({ title, prefix, from, to }: Props) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, {duration: 2, ease: 'easeOut'})
    return controls.stop
  }, [to, count])

  return (
    <div className="flex flex-col" data-aos="fade-up" >
      <h3 className="font-poppins font-light text-4xl text-white">
        {prefix}
        <motion.span>{rounded}</motion.span>
      </h3>
      <p className="font-poppins font-light uppercase text-base text-white">{title}</p>
    </div>
  )
}

export default Countdown
