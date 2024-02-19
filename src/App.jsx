import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Header, Footer } from "./Components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings (optional)

      duration: 1000, // Animation duration
      easing: "ease", // Easing function for animation
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
