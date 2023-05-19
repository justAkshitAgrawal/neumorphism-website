import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Favicon from "react-favicon";

function App() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 ">
      <Favicon url="https://em-content.zobj.net/thumbs/160/apple/33/personal-computer_1f4bb.png" />
      <div className="fixed sm:block hidden top-0 left-0 w-full h-[10vh] z-30 bg-gray-900"></div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
