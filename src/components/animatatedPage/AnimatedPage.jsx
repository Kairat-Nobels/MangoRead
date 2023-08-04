import { motion } from 'framer-motion'
const variants = {
  open: { opacity: 0 },
  animate: { opacity: 1 },
  closed: { opacity: 0 }
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={variants}
      initial='open'
      animate='animate'
      exit='closed'
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
