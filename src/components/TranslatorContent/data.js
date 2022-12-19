import CardI1 from "../../img/picture-1.svg";
import CardI2 from "../../img/picture-2.svg";
import CardI3 from "../../img/picture-3.svg";
import CardI4 from "../../img/picture-4.svg";
import CardI5 from "../../img/picture-5.svg";
import CardI6 from "../../img/picture-6.svg";

export const filters = [
  {
    id: "all",
  },
  {
    id: "javaScript",
  },
  {
    id: "Python",
  },
  {
    id: "React",
  },
  {
    id: "HTML5",
  },
  {
    id: "CSS3",
  },
  {
    id: "Bootstrap",
  },
];

export const COURSES_ARR = [
  {
    filter: "javaScript",
    name: "Курс по JavaScript",
    imageSrc: CardI1,
    pushUrl: "/JavaScript",
  },
  {
    filter: "HTML5",
    name: "Курс HTML5 ",
    imageSrc: CardI2,
    pushUrl: "/html",
  },
  {
    filter: "CSS3",
    name: "Курс по CSS3",
    imageSrc: CardI3,
    pushUrl: "/css",
  },
  {
    filter: "Bootstrap",
    name: "Курс Bootstrap",
    imageSrc: CardI4,
    pushUrl: "/bootstrap",
  },
  {
    filter: "React",
    name: "Курс React",
    imageSrc: CardI5,
    pushUrl: "/react",
  },
   {
    filter: "Python",
    name: "Курс Python",
    imageSrc: CardI6,
    pushUrl: "/python",
  },
];
