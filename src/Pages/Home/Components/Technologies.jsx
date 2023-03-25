import TypeScript from "../../../Assets/Technologies/typescript.svg";
import JavaScript from "../../../Assets/Technologies/javascript.svg";
import Python from "../../../Assets/Technologies/python.svg";
import Sql from "../../../Assets/Technologies/sql.svg";
import TheCSS from "../../../Assets/Technologies/css.svg";
import TheHTML from "../../../Assets/Technologies/html.svg";
import NextJS from "../../../Assets/Technologies/nextjs.svg";
import ReactJS from "../../../Assets/Technologies/react.svg";

import Tailwind from "../../../Assets/Technologies/tailwind.svg";
import Sequelize from "../../../Assets/Technologies/sequelize.svg";
import PostgreSQL from "../../../Assets/Technologies/postgresql.svg";

import NodeJS from "../../../Assets/Technologies/node.svg";

function Technologies() {
  return (
    <div>
      <div>
        <h1>Tecnologias</h1>
      </div>
      <div>
        <div>
          <h2>Lenguajes</h2>
        </div>
        <div>
          <img src={JavaScript} alt="javascript" />
          <img src={Sql} alt="sql" />
          <img src={ReactJS} alt="reactjs" />
          <img src={TheHTML} alt="html" />
          <img src={TheCSS} alt="css" />
        </div>
      </div>
      <div>
        <div>
          <h2>Frameworks</h2>
        </div>
        <div>
          <img src={Tailwind} alt="tailwind" />
          <img src={Sequelize} alt="sequelize" />
          <img src={PostgreSQL} alt="postgresql" />
        </div>
      </div>
      <div>
        <div>
          <h2>Entorno</h2>
        </div>
        <div>
          <img src={NodeJS} alt="nodejs" />
        </div>
      </div>
      <div>
        <div>
          <h2>Aprendiendo</h2>
        </div>
        <div>
          <img src={Python} alt="python" />
          <img src={TypeScript} alt="typescript" />
          <img src={NextJS} alt="nextjs" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
