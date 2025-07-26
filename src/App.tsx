import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Intro from "./components/pages/Intro.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import NavigationBar from "./components/molecule/NavigationBar.tsx";
import Projects from "./components/pages/Projects.tsx";
import Education from "./components/pages/Education.tsx";
import Footer from "./components/pages/Footer.tsx";
import DetailProject from "./components/pages/DetailProject.tsx";
import {type DetailProjectType, dopDang, coinAi, rideOn, realTimeChat, textClassification} from "./types/DetailProjectType.ts";
import type {SectionType} from "./types/SectionType.ts";
import DockBar from "./components/molecule/DockBar.tsx";

function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>("About Me");
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [projectDateSet, setProjectDateSet] = useState<DetailProjectType>(dopDang);
  const scrollYRef = useRef<number>(0);

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
    scrollYRef.current = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    if (title === "돕당") setProjectDateSet(dopDang);
    else if (title === "CoinAi") setProjectDateSet(coinAi);
    else if (title === "RideOn") setProjectDateSet(rideOn);
    else if (title === "RealTimeChat") setProjectDateSet(realTimeChat);
    else if (title === "TextClassification API") setProjectDateSet(textClassification);

    setDetailModal(true);
  };

  const detailModalCloseHandler = () => {
    setDetailModal(false);

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    document.body.style.width = '';

    window.scrollTo({ top: scrollYRef.current, behavior: 'instant' });
  };

  return (
    <div className="w-full">
      <Intro />
      <section className="relative bg-[#282828] p-10 gap-16 flex-col">
        <div className="sm:flex">
          <div className="sticky top-0 z-50 bg-[#282828]">
            <NavigationBar
              selectedSection={selectedSection}
              onSelect={setSelectedSection}
            />
          </div>
          <div className="gap-y-16">
            <AboutMe/>
            <Projects detailModalOpenHandler={detailModalOpenHandler}/>
            <Education/>
          </div>
        </div>

        <DockBar/>
      </section>

      {detailModal && (
        <div
          className="absolute z-[100] left-0 w-full h-[100%]"
          style={{top: `${scrollYRef.current}px`}}
        >
          <DetailProject
            detailModalCloseHandler={detailModalCloseHandler}
            dateSet={projectDateSet}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;

