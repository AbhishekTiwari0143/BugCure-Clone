import "./App.css";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Workflow from "./Components/Workflow";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Testimonials />
      <Workflow />
      <Portfolio />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
