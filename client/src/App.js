import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { News } from "./pages/news/News";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about us/About";
import { Events } from "./pages/events/Events";
import { Services } from "./pages/services/Services";
import  Navbar  from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
