import './App.css'
import Intro from "./components/pages/Intro.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import NavigationBar from "./components/molecule/NavigationBar.tsx";

function App() {

  return (
    <div className="w-full">
      {/* Intro 영역 */}
      <Intro/>

      {/* 데스크탑용 사이드 Navigation + AboutMe */}
      <section className="bg-[#282828] p-10 hidden sm:flex gap-16">
        <NavigationBar/>
        <AboutMe/>
      </section>

      {/* 모바일용 상단 고정 Navigation + AboutMe */}
      <section className="bg-[#282828] flex flex-col gap-8 sm:hidden">
        {/* 모바일 전용 sticky nav */}
        <div className="sticky top-0 z-50 bg-[#282828]">
          <NavigationBar/>
        </div>
        <div className="p-8">
          <AboutMe/>
        </div>
      </section>
    </div>
  )
}

export default App
