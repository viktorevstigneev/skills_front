import jsPDF from "../../books/js.pdf";
import htmlPDF from "../../books/HTML5.pdf";
import python from "../../books/python.pdf";
import css from "../../books/css.pdf";
import reactPDF from "../../books/react.pdf";

export const BOOKS_ARRAY = [
  {
    name: "HTML5 Карманный правочник",
    book: htmlPDF,
  },
  {
    name: "JavaScript основы",
    book: jsPDF,
  },
  {
    name: "Бэрри П Изучаем программирование на Python 2017",
    book: python,
  },
  {
    name: "Основы CSS 2019",
    book: css,
  },
  {
    name: "Путь к изучению React 2018",
    book: reactPDF,
  },
];
