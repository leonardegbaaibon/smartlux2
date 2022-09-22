import "./App.css";
import { Route, BrowserRouter, Routes,} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Project from "./Pages/Project";
import Layout from "./Pages/Layout"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />              
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;
