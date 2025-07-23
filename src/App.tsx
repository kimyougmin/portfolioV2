import React, { useEffect, useState } from "react";
import './App.css'
import Intro from "./components/pages/Intro.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import NavigationBar from "./components/molecule/NavigationBar.tsx";
import Projects from "./components/pages/Projects.tsx";
import Education from "./components/pages/Education.tsx";
import Footer from "./components/pages/Footer.tsx";
import DetailProject from "./components/pages/DetailProject.tsx";

export type SectionType = "About Me" | "Projects" | "Education";

function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>("About Me");
  const [detailModal, setDetailModal] = React.useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds: Record<SectionType, string> = {
        "About Me": "about",
        "Projects": "projects",
        "Education": "education",
      };

      const currentScroll = window.scrollY;
      let currentSection: SectionType = "About Me";

      for (const sectionName in sectionIds) {
        const element = document.getElementById(sectionIds[sectionName as SectionType]);
        if (element && element.offsetTop - 100 <= currentScroll) {
          currentSection = sectionName as SectionType;
        }
      }

      setSelectedSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const detailModalOpenHandler = (title: string) => {
    setDetailModal(true);
  }
  const detailModalCloseHandler = () => {
    setDetailModal(false);
  }
  return (
    <div className="w-full">
      <Intro/>
      <section className="bg-[#282828] p-10 sm:flex gap-16">
        <div className="sticky top-0 z-50 bg-[#282828]">
          <NavigationBar
            selectedSection={selectedSection}
            onSelect={setSelectedSection}/>
        </div>
        <div className="gap-y-16">
          <AboutMe/>
          {detailModal && (<div className="absolute z-100 top-0 w-full h-full">
            <DetailProject detailModalCloseHandler={detailModalCloseHandler}/>
          </div>)}
          <Projects/>
          <Education/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
