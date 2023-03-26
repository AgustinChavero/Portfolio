import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="bg-[#181433]/40 shadow-2xl shadow-black text-white rounded-xl m-1 p-2 max-w-7xl backdrop-blur-3xl"
    >
      <div className="flex justify-center md:justify-start md:p-5">
        <h3 className="font-bold text-4xl md:text-6xl sm:text-5xl">Sobre mi</h3>
      </div>
      <div className="pb-10">
        <h4 className="font-semibold text-xl md:text-3xl sm:text-2xl text-center md:text-left md:p-5 py-2">
          ¿Quien soy?
        </h4>
        <p className="text-center px-2 md:text-left md:px-5 sm:text-xl">
          Me presento, mi nombre es Agustin Daniel Orellano Chavero y soy un
          full stack developer, originario de Mendoza-Argentina. Por capacidad
          actual me inclino por el frontend pero por sueños y ambición me siento
          mas afinado al backend.
        </p>
      </div>
      <div className="pb-10">
        <h4 className="font-semibold text-xl md:text-3xl sm:text-2xl text-center md:text-left md:p-5 py-2">
          ¿Que ofrezco con mis tech skills?
        </h4>
        <p className="text-center px-2 md:text-left md:px-5 sm:text-xl">
          Desde el punto de vista técnico con mi experiencia previa en Comercio
          Internacional, Atención al Cliente, y el conocimiento de Ful Stack
          Development, puedo ayudar en el incremento de ganancias y mejorar la
          presencia en línea a través de ideas innovadoras y la optimización de
          gastos.
        </p>
      </div>
      <div className="pb-10">
        <h4 className="font-semibold text-xl md:text-3xl sm:text-2xl text-center md:text-left md:p-5 py-2">
          ¿Que ofrezco con mis soft skills?
        </h4>
        <p className="text-center px-2 md:text-left md:px-5 sm:text-xl">
          Puedo lograr formar equipos desde cero y mantener una buena relación
          con los clientes. Tomo la iniciativa en el reclutamiento de personas
          con las cuales trabajar, generando un buen ambiente de trabajo con
          energía positiva a través de la cooperación, dedicación, sacrificio y
          compromiso.
        </p>
      </div>
      <div className="pb-10">
        <h4 className="font-semibold text-xl md:text-3xl sm:text-2xl text-center md:text-left md:p-5 py-2">
          ¿Cuales son mis metas, objetivos y sueños?
        </h4>
        <p className="text-center px-2 md:text-left md:px-5 sm:text-xl">
          Busco poder desarrollarme como profesional en el campo del desarrollo
          web, asentarme en un trabajo que me permita poder hacer crecer mis
          conocimientos y capacidades, estoy en busca de un buen ambiente del
          trabajo que me permita no solo todo lo anterior sino tambien estar
          comodo y conforme con donde este. Y yendo mas alla, Mi sueño es poder
          ser un desarrollador de videojuegos y lograr plasmar en la realidad
          todas las ideas que tengo en mi mente.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
