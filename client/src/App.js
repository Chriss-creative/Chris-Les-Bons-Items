import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MachineALaver from "./Pages/MachineALaver/MachineALaver";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={"ze"} />
        <Route path="/maison/machine-a-laver" element={<MachineALaver />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
