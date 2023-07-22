import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import HamburgerNav from './HamburgerNav'
import { InstagramIcon } from '../svg/SvgIcons'
import { NAVIGATION } from '../data/navigationItems'

export default function Header (): JSX.Element {
  return (
    <article className="flex justify-between fixed z-10 w-full px-3 py-1">
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 hover:transition-all hover:translate-y-1"
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src="../../public/img/logo.png"
            alt="Logotipo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl text-[#FF0D48] font-extrabold underline">Fresquilla</h1>
        </Link>
      </motion.section>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex md:items-center md:gap-5"
      >
        {NAVIGATION.map(item => (
          <Navigation
            key={item.path}
            item={item}
          />
        ))}
      </motion.nav>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex gap-5 justify-center items-center md:hidden"
      >
        {/* Navbar */}
        <HamburgerNav />
      </motion.nav>
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex items-center gap-3"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fresquilla_bq/">
          <InstagramIcon />
        </a>
      </motion.section>
    </article>
  )
}