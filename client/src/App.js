import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import { Home } from "./pages/home/Home";
import { News } from "./pages/news/News";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about us/About";
import Events from "./pages/events/Events";
import { Services } from "./pages/services/Services";
import { Article } from "./pages/news/Article/Article";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/article" element={<Article />} />
              <Route path="/events" element={<Events />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<div>404 not found</div>} />
            </Routes>
          </Router>
          <Newsletter />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
