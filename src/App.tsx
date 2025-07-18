import './App.css'
import Intro from "./components/pages/Intro.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import NavigationBar from "./components/molecule/NavigationBar.tsx";
import Projects from "./components/pages/Projects.tsx";
import Education from "./components/pages/Education.tsx";
import Footer from "./components/pages/Footer.tsx";

function App() {

  return (
    <div className="w-full">
      <Intro/>
      <section className="bg-[#282828] p-10 sm:flex gap-16">
        <div className="sticky top-0 z-50 bg-[#282828]">
          <NavigationBar/>
        </div>
        <div className="gap-y-16">
          <AboutMe/>
          <Projects/>
          <Education />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
