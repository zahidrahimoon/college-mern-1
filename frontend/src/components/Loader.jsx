import { motion } from "framer-motion"

const Loader = () => {
  return (
    <motion.div
      className="w-16 h-16 bg-gradient-to-r from-soothing-blue to-soothing-purple rounded-full shadow-lg"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

export default Loader

