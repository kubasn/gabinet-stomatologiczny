import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Dentists from "./components/Dentists";
import Location from "./components/Location";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Dentists />
      <About />
      <Contact />
      <Location />
    </>
  );
}

export default App;
