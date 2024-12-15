"use client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Pricing from './pages/Pricing';
import Login from './pages/Login';

export default function Page() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
