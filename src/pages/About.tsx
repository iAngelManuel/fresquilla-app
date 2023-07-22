import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function About (): JSX.Element {
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%', transition: { duration: 0.5 } }}
    >
      <header className="mb-20">
        <Hero
          title="Acerca de"
          color="Fresquilla"
          desc="En este apartado vas a encontrar información sobre nosotros"
          width="40"
        />
      </header>
    </motion.article>
  )
}
