import "./App.css";
import Navibar from "./containers/Navibar/Navibar";
import MainPage from "./containers/Pages/MainPage/MainPage";
import WhyWeACool from "./containers/Pages/WhyWeACool/WhyWeACool";
import CotactUs from "./containers/Pages/ContactUs/CotactUs";
import AboutUs from "./containers/Pages/AboutUs/AboutUs";
import Team from "./containers/Pages/Team/Team";
import Answers from "./containers/Pages/Answers/Answers";
import Gifts from "./containers/Pages/Gifts/Gifts";
import Vacancies from "./containers/Pages/Vacancies/Vacancies";
import Comments from "./containers/Pages/Comments/Comments";
import ElseComments from "./containers/Pages/ElseComments/ElseComments";
import Calculator from "./containers/Pages/Calculator/Calculator";
import TesLuna from "./containers/Pages/TestLuna/TesLuna";
import Footer from "./containers/Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./containers/Pages/FirstPage";
import SecondPage from "./containers/Pages/SecondPage";
import ThirdPage from "./containers/Pages/ThirdPage";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/contactUs" element={<FirstPage />} />
        <Route path="/" element={<FirstPage />} />
        {/* <Route path="/main" element={<FirstPage />} /> */}
        <Route path="/vacancies" element={<SecondPage />} />
        <Route path="/test" element={<ThirdPage />} />
      </Routes>
      {/* <WhyWeACool />
      <Calculator />
      <Team />
      <CotactUs />
      <Comments />
      <ElseComments /> */}
      <Footer />
    </div>
  );
}

export default App;
