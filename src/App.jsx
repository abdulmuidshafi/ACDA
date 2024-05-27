import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Education from "./projects/Education";
import Health from "./pages/Health";
import Healthproject from "./projects/Healthproject";
import RehabilationPage from "./pages/RehabilationPage";
import Rehabilation from "./projects/Rehabilation";
import Water from "./pages/Water";
import WaterSupply from "./projects/WaterSupply";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="health" element={<Health />}>
              <Route index element={<Healthproject />} />
            </Route>
            <Route path="rehabilation" element={<RehabilationPage />}>
              <Route index element={<Rehabilation/>} />
            </Route>
            <Route path="water" element={<Water />}>
              <Route index element={<WaterSupply/>} />
            </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
