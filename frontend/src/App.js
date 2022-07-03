import "./App.css";
import About from "./components/About";
import Dentists from "./components/Dentists";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Dentists />
      <About />
    </>
  );
}

export default App;
