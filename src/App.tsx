import './App.css'
import Intro from "./components/pages/Intro.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import NavigationBar from "./components/molecule/NavigationBar.tsx";

function App() {

  return (
    <div className="w-full top-0">
      <Intro />
      <section className="bg-[#282828] p-10 flex gap-16">
        <NavigationBar />
        <AboutMe />
      </section>
    </div>
  )
}

export default App
