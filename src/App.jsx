import Background from "./components/Background";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 h-[300vh]">
      <Nav />
      {/* <Background /> */}
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
