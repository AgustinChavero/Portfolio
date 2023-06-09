import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="bg-iam w-full shadow-2xl text-white bg-contain bg-no-repeat sm:bg-cover sm:bg-fixed"
    >
      <div className="backdrop-blur-sm bg-black/70 w-full">
        <div className="pt-20 lg:pt-[540px] xl:pt-[580px]">
          <div className="md:p-5">
            <h3 className="font-bold text-yellow-500 text-center text-4xl md:text-6xl sm:text-5xl">
              Agustin Daniel Orellano Chavero
            </h3>
          </div>
          <div className="pb-10 w-[100%] flex justify-center">
            <div className="md:w-[50%]">
              <div className="flex-col justify-center">
                <p className="text-center text-amber-200 px-2 sm:text-xl lg:text-3xl">
                  Developer
                </p>
              </div>
              <p className="text-center px-2 text-amber-300 py-2 sm:text-xl lg:text-3xl ">
                REACT | JAVASCRIPT | TAILWIND | SEQUELIZE
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 lg:flex lg:justify-center">
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl sm:text-2xl text-left p-5">
              PERSPECTIVA DE USUARIO
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Durante la fase de investigacion, recopilo informacion sobre lo
                que hacen, piensan y quieren tus usuarios, para tomar mejores
                decisiones.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl sm:text-2xl text-left p-5">
              SOLUCIONES DIGITALES
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Hay múltiples formas de alcanzar metas. Mi objetivo es encontrar
                el que beneficie a sus usuarios y reduzca costos.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl  sm:text-2xl text-left p-5">
              MANEJO WEB/APP INTUITIVO
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Se trata de hacer que las soluciones aplicadas sean faciles de
                manejar, para que se pueda administrar de forma independiente.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl  sm:text-2xl text-left p-5">
              CONTROL DE GASTOS PREVISTOS
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Trato de tener en cuenta de forma constante los costos venideros
                tanto del proyecto como de los clientes al manejar los
                proyectos, para optimizar gastos y aumentar beneficios.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="pt-10 lg:flex lg:justify-center">
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl  sm:text-2xl text-left p-5">
              RECLUTAMIENTO LABORAL
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Capaz de tomar la iniciativa en el reclutamiento de personas
                capacez con las cuales trabajar y que generen un buen ambiente
                laboral.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl sm:text-2xl text-left p-5">
              BUEN AMBIENTE LABORAL
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Logro formar una energia positiva en el trabajo a través de la
                cooperación, dedicación, sacrificio y compromiso.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl  sm:text-2xl text-left p-5">
              PROACTIVIDAD Y MOTIVACION
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Llevo al maximo mis esfuerzos para cumplir mis metas,
                motivandome tanto a mi como a mis compañeros a dar el 110% de
                esfuerzo
              </p>
            </div>
          </motion.div>
          <motion.div
            className="pb-10 lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h4 className="font-light text-xl md:text-5xl  sm:text-2xl text-left p-5">
              COMUNICACION INTERPERSONAL
            </h4>
            <div className="flex justify-center">
              <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                Busco un buen trato de forma constante tanto con clientes, como
                con compañeros o superiores, con la finalidad de lograr alcanzar
                todas las metas y objetivos propuestas, y seguir manteniendo las
                relaciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
