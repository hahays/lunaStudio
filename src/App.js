import "./App.css";
import Navibar from "./containers/Navibar/Navibar";
import Footer from "./containers/Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./containers/Pages/FirstPage";
import SecondPage from "./containers/Pages/SecondPage";
import ThirdPage from "./containers/Pages/ThirdPage";
import "normalize.css";
import FourthPage from "./containers/Pages/FourthPage";
function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/contact-us" element={<FirstPage />} />
        <Route path="/" element={<FirstPage />} />
        <Route path="/vacancies" element={<SecondPage />} />
        <Route path="/test" element={<ThirdPage />} />
        <Route path="/404" element={<FourthPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
