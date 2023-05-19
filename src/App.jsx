import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 ">
      <div className="fixed sm:block hidden top-0 left-0 w-full h-[10vh] bg-gray-900"></div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
