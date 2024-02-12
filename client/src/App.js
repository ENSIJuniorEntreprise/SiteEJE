import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { News } from "./pages/news/News";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about us/About";
import { Events } from "./pages/events/Events";
import { Services } from "./pages/services/Services";
import { Login } from "./pages/login/Login";
import  Dash  from "./pages/Dash";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";
import RequireAuth from "./RequireAuth";
import PersistLogin from "./components/Persistlogin"

function App() {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/dash" element={<Dash />} />
          </Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
