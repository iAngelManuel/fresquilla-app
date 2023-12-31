import { motion, AnimatePresence } from 'framer-motion'
import useFresh from '../hook/useFresh'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import ClaimsForm from '../components/ClaimsForm'
import SwitchForm from '../components/SwitchForm'
import AtroposCard from '../components/AtroposCard'
import 'atropos/css'

const formAnimation = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.7 } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.5 } }
}

export default function Contact (): JSX.Element {
  const { isClaimsForm } = useFresh()
  return (
    <motion.article
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: '100%' }}
    >
      <header className="mb-5">
        <Hero
          title="¿Tienes dudas o deseas comunicarte con nosotros?"
          color="¡Contáctanos!"
          desc="Por este medio podrás contactarnos y te responderemos lo más pronto posible con un correo electrónico"
          width="40"
        />
      </header>
      <main className="md:w-full md:flex md:flex-col md:items-center my-10">
        <AtroposCard />

        <article className="w-full flex gap-5 md:gap-0 flex-col items-center md:block px-5 md:w-1/2 mt-10">
          <section className="flex gap-5 flex-col items-center">
            <p className="inline-block pl-[0.15rem] hover:cursor-pointer text-center font-semibold">
              {isClaimsForm
                ? '¿Quieres contactarte con nosotros? Cambia el modo del formulario'
                : '¿Tienes alguna queja o reclamo? Cambia el modo del formulario'
              }
            </p>
            <SwitchForm />
          </section>
          <AnimatePresence>
            {isClaimsForm
              ? (
                  <motion.div
                    variants={formAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="claimsForm"
                  >
                    <ClaimsForm />
                  </motion.div>
                )
              : (
                  <motion.div
                    variants={formAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="contactForm"
                  >
                    <ContactForm />
                  </motion.div>
                )}
          </AnimatePresence>
        </article>
      </main>
    </motion.article>
  )
}
