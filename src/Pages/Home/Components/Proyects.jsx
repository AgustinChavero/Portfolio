import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import Pet0 from "../../../Assets/Proyects/pet.jpg";
import Pet1 from "../../../Assets/Proyects/pet1.jpg";
import Pet2 from "../../../Assets/Proyects/pet2.jpg";
import Pet3 from "../../../Assets/Proyects/pet3.jpg";
import Pet4 from "../../../Assets/Proyects/pet4.jpg";
import Pet5 from "../../../Assets/Proyects/pet5.jpg";
import Pet6 from "../../../Assets/Proyects/pet6.jpg";

function Proyects() {
  const proyect = [
    {
      name: "Memorias NFT",
      description:
        "Crear, basado en web3, un sistema donde los excombatientes de Malvinas, con un relato concreto, puedan generar NFTs del cual puedan obtener un redito mediante su venta a coleccionistas o interesados en la historia.",
      goals:
        "Lograr que aquellas historias que no estan plasmadas en imagenes, puedan estarlo.",
      attainment:
        "Alcance a desarrollar en tiempo record el frontend y su respectivo responsive junto a un diseño interactivo y sencillo",
      images: [Pet0, Pet1, Pet2, Pet3, Pet4, Pet5, Pet5, Pet6],
      link: "https://github.com/jenamoradoc/MemoriesInNFT-Front",
    },
    {
      name: "Pet Friendly Universe",
      description:
        "Se creo un Ecommerce, con dos secciones para venta de productos y prestacion de servicios, mas un blog con posteos de adopciones de mascotas. Donde se pudiesen registrar usuarios para poder sus productos o servicios habilitandose para ello, y mediante la pasarela de pagos un porcentaje de las ventas sea destinado a distintas ONGs protectoras de animales",
      goals:
        "Dar visibilidad a las protectoras de animales y apoyo mediante las ganancias de la pagina como donativos.",
      attainment:
        "Logre reclutar una ONG para participar del proyecto, desarrollar mis habilidades en el backend y llevar el control efectivo de los registros y validaciones mas un porcentaje del responsive de la web.",
      images: [Pet0, Pet1, Pet2, Pet3, Pet4, Pet5, Pet5, Pet6],
      link: "https://github.com/PetFriendlyUniverse/Henry-Pf",
    },
    {
      name: "Pokemon App",
      description:
        "Genere una web app, enfocada en el consumo de la Api de Pokemon, para que sirviera como Pokedex, en la cual tambien se podian registrar Pokemons y ordenarlos a traves de los filtros combinados",
      goals:
        "Aplicar conocimientos basicos para consumo de Apis y manejo de Backend.",
      attainment:
        "Logre aprender como llevar adelante un backend de forma optima.",
      images: [Pet0, Pet1, Pet2, Pet3, Pet4, Pet5, Pet5, Pet6],
      link: "https://github.com/AgustinChavero/PokemonPI",
    },
  ];

  return (
    <>
      {proyect.map((e, i) => {
        return (
          <article
            key={i}
            className="text-white w-4/5 flex justify-center my-10 px-10 rounded-sm bg-slate-900"
          >
            <div>
              <div className="flex justify-center ">
                <h6 className="font-light text-xl md:text-5xl sm:text-2xl text-left p-5">
                  {e.name}
                </h6>
              </div>
              <div>
                <div className="py-5">
                  <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                    Descripcion del Proyecto: {e.description}
                  </p>
                  <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                    Metas: {e.goals}
                  </p>
                  <p className="text-left font-light px-2 md:px-5 sm:text-xl">
                    Logros: {e.attainment}
                  </p>
                </div>

                <div className="h-[700px] w-full">
                  <Carousel>
                    {e.images.map((e, i) => {
                      return <img src={e} alt="image" key={i} />;
                    })}
                  </Carousel>
                </div>
              </div>
              <div className="flex justify-center">
                <a href={e.link} target="_blank">
                  <p>Link GitHub</p>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default Proyects;
