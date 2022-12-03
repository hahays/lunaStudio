import MainPage from "../containers/Pages/MainPage/MainPage";
import WhyWeACool from "../containers/Pages/WhyWeACool/WhyWeACool";
import Calculator from "../containers/Pages/Calculator/Calculator";
import CotactUs from "../containers/Pages/ContactUs/CotactUs";
import AboutUs from "../containers/Pages/AboutUs/AboutUs";
import Team from "../containers/Pages/Team/Team";
import Comments from "../containers/Pages/Comments/Comments";
import ElseComments from "../containers/Pages/ElseComments/ElseComments";
import Answers from "../containers/Pages/Answers/Answers";
import Vacancies from "../containers/Pages/Vacancies/Vacancies";
import Gifts from "../containers/Pages/Gifts/Gifts";
import TesLuna from "../containers/Pages/TestLuna/TesLuna";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    href: "#",
    component: MainPage,
  },
  {
    screen_name: "WhyWeACool",
    href: "#whyWeACool",
    component: WhyWeACool,
  },
  {
    screen_name: "Calculator",
    href: "#calculator",
    component: Calculator,
  },
  {
    screen_name: "ContactUs",
    href: "#contactUs",
    component: CotactUs,
  },
  {
    screen_name: "AboutUs",
    href: "#aboutUs",
    component: AboutUs,
  },
  {
    screen_name: "Team",
    href: "#team",
    component: Team,
  },
  {
    screen_name: "Comments",
    href: "#comments",
    component: Comments,
  },
  {
    screen_name: "ElseComments",
    href: "#elseComments",
    component: ElseComments,
  },
  {
    screen_name: "Answers",
    href: "#answers",
    component: Answers,
  },
  {
    screen_name: "Vacancies",
    href: "#vacancies",
    component: Vacancies,
  },
  {
    screen_name: "Gifts",
    href: "#gifts",
    component: Gifts,
  },
  {
    screen_name: "TestLuna",
    href: "#testLuna",
    component: TesLuna,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
