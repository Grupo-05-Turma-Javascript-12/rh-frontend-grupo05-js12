import {
  AnimatePresence,
  motion,
  type Easing,
  type Variants,
} from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const EASE_OUT: Easing = [0.16, 1, 0.3, 1];

const navbarIn: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const menuWrap: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    height: 0,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.3, ease: EASE_OUT },
  },
};

const listStagger: Variants = {
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item: Variants = {
  closed: { opacity: 0, y: -6 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      variants={navbarIn}
      initial="hidden"
      animate="show"
      className="dark:bg-slate-800 relative border-b border-gray-200 dark:border-blue-400"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#home">
              <span className="sr-only">Home</span>
              <img src="/logoelevva.png" className="w-13" alt="" />
            </a>
          </div>

          <div className="hidden md:block mx-auto">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#sobreempresa"
                  >
                    Sobre a Empresa
                  </a>
                </li>
                <li>
                  <a
                    className="dark:text-slate-50 dark:hover:text-white/75"
                    href="#valores"
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <Link to={"/sobrenos"}>
                    <a
                      className="dark:text-slate-50 dark:hover:text-white/75"
                    >
                      Sobre Nós
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen((v) => !v)}
              className="text-slate-800 dark:text-white focus:outline-none"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              aria-label="Abrir menu"
              aria-expanded={isOpen}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuWrap}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute z-50 w-full left-0 text-center bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-blue-400 overflow-hidden"
          >
            <nav className="px-4 py-4">
              <motion.ul
                variants={listStagger}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-4 text-sm"
              >
                <motion.li variants={item}>
                  <a
                    className="block dark:text-slate-50 dark:hover:text-white/75"
                    href="#home"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </motion.li>

                <motion.li variants={item}>
                  <a
                    className="block dark:text-slate-50 dark:hover:text-white/75"
                    href="#sobre"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre a Empresa
                  </a>
                </motion.li>

                <motion.li variants={item}>
                  <a
                    className="block dark:text-slate-50 dark:hover:text-white/75"
                    href="#valores"
                    onClick={() => setIsOpen(false)}
                  >
                    Valores
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a
                    className="block dark:text-slate-50 dark:hover:text-white/75"
                    href="#sobrenos"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre Nós
                  </a>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
