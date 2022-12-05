import Q2_1 from "./assets/q2_1.png";
import Q2_2 from "./assets/q2_2.png";
import Q2_3 from "./assets/q2_3.png";
import Q2_4 from "./assets/q2_4.png";
import Q2_5 from "./assets/q2_5.png";
import Q3_1 from "./assets/q3_1.png";
import Q3_2 from "./assets/q3_2.png";
import Q3_3 from "./assets/q3_3.png";
import Q3_4 from "./assets/q3_4.png";
import Q3_5 from "./assets/q3_5.png";
import Q5_1 from "./assets/q5_1.png";
import Q5_2 from "./assets/q5_2.png";
import Q5_3 from "./assets/q5_3.png";
import Q5_4 from "./assets/q5_4.png";
import Q5_5 from "./assets/q5_5.png";

export const questions = [
  {
    type: "text",
    questionText: "Что из этого самое вкусное?",
    answerOptions: [
      {
        answerText: "Принглз",
        value: 4,
      },
      {
        answerText: "Дорогое вино",
        value: 2,
      },

      {
        answerText: "Борщец",
        value: 1,
      },

      {
        answerText: "Зеленый салат",
        value: 5,
      },
      {
        answerText: "Пирожные из Вольчека:3",
        value: 3,
      },
    ],
  },
  {
    type: "image",
    questionText: "Выбери аксессуар!",
    answerOptions: [
      {
        src: Q2_1,
        answerText: "Очки топ",
        value: 1,
      },
      {
        src: Q2_3,
        answerText: "Пирсинг",
        value: 4,
      },
      {
        src: Q2_5,
        answerText: "Мне диадему, пожалуйста",
        value: 5,
      },
      {
        src: Q2_4,
        answerText: "Кольцо! ничто не может быть лучше ювелирки",
        value: 2,
      },
      {
        src: Q2_2,
        answerText: "Серьги-кольца на все случаи жизни",
        value: 3,
      },
    ],
  },
  {
    type: "image",
    questionText: "Выбери верх наряда!",
    answerOptions: [
      {
        src: Q3_4,
        answerText: "Что-то дерзкое из кожи",
        value: 4,
      },
      {
        src: Q3_1,
        answerText: "Базовая водолазка",
        value: 1,
      },
      {
        src: Q3_5,
        answerText: "Прозрачная блуза",
        value: 5,
      },
      {
        src: Q3_2,
        answerText: "Долой топы, носите лифчики",
        value: 2,
      },
      {
        src: Q3_3,
        answerText: "Долой футболки, носите топы",
        value: 3,
      },
    ],
  },
  {
    type: "text",
    questionText: "Как бы тебя описала подруга?",
    answerOptions: [
      {
        answerText: "Отзывчивая",
        value: 3,
      },
      {
        answerText: "Денежный магнат",
        value: 1,
      },
      {
        answerText: "Уверенная в себе",
        value: 2,
      },
      {
        answerText: "Слегка крейзи",
        value: 5,
      },

      {
        answerText: "Настоящий фрик",
        value: 4,
      },
    ],
  },
  {
    type: "image",
    questionText: "Выбери туфли!",
    answerOptions: [
      {
        src: Q5_5,
        answerText: "Лабутены",
        value: 5,
      },

      {
        src: Q5_3,
        answerText: "Лодочки",
        value: 3,
      },
      {
        src: Q5_1,
        answerText: "Аккуратные и без каблука",
        value: 1,
      },
      {
        src: Q5_4,
        answerText: "Широкая платформа",
        value: 4,
      },

      {
        src: Q5_2,
        answerText: "Стрипы",
        value: 2,
      },
    ],
  },
  {
    type: "text",
    questionText: "Как ты красишься?",
    answerOptions: [
      {
        answerText: "Яркая помада - любимый элемент мейкапа",
        value: 1,
      },
      {
        answerText: "Каждый день по-разному, под настроение",
        value: 2,
      },
      {
        answerText: "Наношу немного румян и блеск",
        value: 3,
      },
      {
        answerText: "Люблю яркие брови и выразительные глаза",
        value: 4,
      },
      {
        answerText: "Я профи, наношу все, что у меня есть",
        value: 5,
      },
    ],
  },
];
