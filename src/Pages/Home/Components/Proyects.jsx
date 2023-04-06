import React from "react";

function Proyects() {
  const proyect = [
    {
      name: "Memorias en NFT",
      description:
        "Crear mediante web3 un sistema donde los excombatientes de Malvinas, con un relato concreto, puedan generar NFTs del cual puedan obtener un redito mediante su venta a coleccionistas o interesados en la historia.",
      goals:
        "Lograr que aquellas historias que no estan plasmadas en imagenes, puedan estarlo.",
      attainment:
        "Alcance a desarrollar en tiempo record el frontend y su respectivo responsive junto a un diseño interactivo y sencillo",
      images: [],
    },
    {
      name: "Pet Friendly Universe",
      description:
        "Se creo un Ecommerce, con dos secciones para venta de productos y prestacion de servicios, mas un blog con posteos de adopciones de mascotas. Donde se pudiesen registrar usuarios para poder sus productos o servicios habilitandose para ello, y mediante la pasarela de pagos un porcentaje de las ventas sea destinado a distintas ONGs protectoras de animales",
      goals:
        "Dar visibilidad a las protectoras de animales y apoyo mediante las ganancias de la pagina como donativos.",
      attainment:
        "Logre reclutar una ONG para participar del proyecto, desarrollar mis habilidades en el backend y llevar el control efectivo de los registros y validaciones mas un porcentaje del responsive de la web.",
      images: [],
    },
    {
      name: "Pokemon App",
      description:
        "Genere una web app, enfocada en el consumo de la Api de Pokemon, para que sirviera como Pokedex, en la cual tambien se podian registrar Pokemons y ordenarlos a traves de los filtros combinados",
      goals:
        "Aplicar conocimientos basicos para consumo de Apis y manejo de Backend.",
      attainment:
        "Logre aprender como llevar adelante un backend de forma optima.",
      images: [],
    },
  ];

  return (
    <>
      {proyect.map((e, i) => {
        return (
          <article key={i}>
            <div>
              <h6>{e.name}</h6>
            </div>
            <div>
              <p>Descripcion del Proyecto: {e.description}</p>
              <p>Metas: {e.goals}</p>
              <p>Logros: {e.attainment}</p>
            </div>
            <div></div>
          </article>
        );
      })}
    </>
  );
}

export default Proyects;
