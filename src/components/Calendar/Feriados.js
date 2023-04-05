import {
  FaEgg,
  FaMask ,
  FaHeart,
  FaFlag,
  FaGhost,
  FaCross,
  FaTree,
  FaFemale,
  FaHandshake,
  FaUserTie  
} from "react-icons/fa";
import { TiMortarBoard } from "react-icons/ti";
import { MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiBrazilFlag, GiFireworkRocket, GiBabyFace } from "react-icons/gi";

const getFeriadosByYear = (year) => {
  const feriados = [
    { name: "Ano Novo", date: `${year}-01-01`, icon: <GiFireworkRocket /> },
    { name: "Carnaval", date: `${year}-02-28`, icon: <FaMask  /> },
    { name: "Dia das Crianças", date: `${year}-10-12`, icon: <GiBabyFace /> },
    {
      name: "Dia do Professor",
      date: `${year}-10-15`,
      icon: <TiMortarBoard />,
    },
    { name: "Sexta-feira Santa", date: `${year}-04-07`, icon: <FaCross /> },
    { name: "Páscoa", date: `${year}-04-09`, icon: <FaEgg /> },
    { name: "Dia do Trabalho", date: `${year}-05-01`, icon: <MdWork /> },
    { name: "Corpus Christi", date: `${year}-06-15`, icon: <FaCross  /> },
    {
      name: "Independência do Brasil",
      date: `${year}-09-07`,
      icon: <GiBrazilFlag />,
    },
    { name: "Dia dos Namorados", date: `${year}-06-12`, icon: <FaHeart /> },
    { name: "Dia do Amigo", date: `${year}-07-20`, icon: <FaHandshake /> },
    { name: "Dia dos Pais", date: `${year}-08-14`, icon: <FaUserTie   />},
    {
      name: "Nossa Senhora Aparecida",
      date: `${year}-10-12`,
      icon: <IoIosPeople />,
    },
    { name: "Finados", date: `${year}-11-02`, icon: <FaGhost /> },
    {
      name: "Proclamação da República",
      date: `${year}-11-15`,
      icon: <FaFlag />,
    },
    { name: "Natal", date: `${year}-12-25`, icon: <FaTree /> },
    {
      name: "Dia Internacional da Mulher",
      date: `${year}-03-08`,
      icon: <FaFemale />,
    },
  ];

  return feriados;
};

export default getFeriadosByYear;
