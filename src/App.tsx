import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Destination from "./routes/Destinations";
import Packegs from "./routes/Packegs";
import Experiences from "./routes/Experiences";
import About from "./routes/About";
import Contact from "./routes/Contact";
import PackageDetailsData from "./components/PackageDetailsData";
import BookNow from "./routes/Booknow";
import ExperienceDetails from "./components/ExperienceDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/packages" element={<Packegs />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages/:id" element={<PackageDetailsData />} />
        <Route path="/booking" element={<BookNow />} />
        <Route path="/experiences/:id" element={<ExperienceDetails />} />
      </Routes>
    </div>
  );
}
