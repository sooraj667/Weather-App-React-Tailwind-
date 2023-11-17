import { useState } from "react";
import MobileBar from "./components/MobileBar";
import Navbar from "./components/Navbar";
import HomeContext from "./contexts/HomeContext";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchWeather from "./components/SearchWeather";
import HomePage from "./pages/HomePage";
function App() {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <div className="overflow-x-hidden overflow-y-auto w-screen max-w-full overflow-hidden">
      <HomeContext.Provider value={{ menuBar, setMenuBar }}>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<HomePage />} />
          
            <Route path="search/" element={<SearchWeather />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </HomeContext.Provider>
    </div>
  );
}

export default App;
