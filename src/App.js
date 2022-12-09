import "./App.css";
import Navibar from "./containers/Navibar/Navibar";
import Footer from "./containers/Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./containers/Pages/FirstPage";
import SecondPage from "./containers/Pages/SecondPage";
import ThirdPage from "./containers/Pages/ThirdPage";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/contactUs" element={<FirstPage />} />
        <Route path="/" element={<FirstPage />} />
        <Route path="/vacancies" element={<SecondPage />} />
        <Route path="/test" element={<ThirdPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
