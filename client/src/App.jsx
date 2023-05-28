import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MachineALaver from "./Pages/Maison/MachineALaver/MachineALaver";
import SecheLinge from "./Pages/Maison/SecheLinge/SecheLinge";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/maison/machine-a-laver" element={<MachineALaver />} />
        <Route path="/maison/seche-linge" element={<SecheLinge />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
