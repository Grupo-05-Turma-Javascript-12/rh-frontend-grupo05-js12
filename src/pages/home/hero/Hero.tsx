import {
  CrownIcon,
  SealCheckIcon,
  StarIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { easeOut, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const floaty = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

function Hero() {
  return (
    <section className="relative bg-linear-to-br from-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="flex w-fit gap-2 items-center mb-6 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mx-auto lg:mx-0"
            >
              <CrownIcon size={20} color="#4287f5" weight="fill" />
              Plataforma Líder em Talentos Remotos
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Ache talentos que{" "}
              <span className="text-blue-500">Literalmente não</span> se
              encontra em qualquer lugar!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              A ELEVVA é a solução completa de RH digital para pequenas empresas
              que precisam contratar com estratégia, reduzir erros e ganhar
              eficiência. <br /> Cuidamos do seu processo de recrutamento,
              organização de pessoas e estruturação de RH para que você possa
              focar no crescimento do seu negócio.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
              >
                Contrate agora!
              </motion.button>

              <motion.button
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="text-white hover:text-blue-400"
              >
                Aplicar como talento
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-sm text-gray-400"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <UsersThreeIcon size={24} color="#4287f5" weight="fill" />
                <span>31K+ Talentos</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center gap-2">
                <SealCheckIcon size={20} color="#42f57e" weight="fill" />
                <span>Perfis verificados!</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-center gap-2">
                <StarIcon size={18} color="#d4f339" weight="fill" />
                <StarIcon size={18} color="#d4f339" weight="fill" />
                <StarIcon size={18} color="#d4f339" weight="fill" />
                <StarIcon size={18} color="#d4f339" weight="fill" />
                <StarIcon size={18} color="#d4f339" weight="fill" />
                <span>4.8/5 Avalição</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden xl:flex justify-center lg:justify-start"
            variants={floaty}
            initial="hidden"
            animate="show"
          >
            <motion.img
              src="hero-img2.png"
              alt=""
              className="w-full max-w-162.5 lg:max-w-187.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
