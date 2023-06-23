import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import About from "./components/About";
import Samples from "./components/Samples";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <div className="flex flex-col mx-auto max-w-5xl gap-4 p-4 pt-20">
        <About />
        <Education />
        <Samples />
        <Contact />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
