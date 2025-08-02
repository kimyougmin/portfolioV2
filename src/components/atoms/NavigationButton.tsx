import type {SectionType} from "../../types/SectionType.ts";


interface NavigationButtonProps {
  title: SectionType;
  isSelected: boolean;
  onClick: () => void;
}

function NavigationButton({ title, isSelected, onClick }: NavigationButtonProps) {
  const scrollToSection = () => {
    const idMap: Record<SectionType, string> = {
      "About Me": "about",
      "Projects": "projects",
      "Education": "education"
    };

    const section = document.getElementById(idMap[title]);
    if (section) {
      const targetY = section.offsetTop + window.innerHeight - 20;

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });

      // 스크롤이 완료될 때까지 기다린 후 onClick 실행
      const scrollListener = () => {
        // 오차 범위 내 도달했는지 확인
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - targetY) < 5) {
          window.removeEventListener("scroll", scrollListener);
          onClick(); // 선택된 섹션 변경
        }
      };

      window.addEventListener("scroll", scrollListener);
    }
  };

  return (
    <p
      onClick={scrollToSection}
      className={`cursor-pointer ${isSelected ? "text-black9" : "text-black3"} text-left mb-1 text-xl sm:text-5xl font-bold`}
    >
      {title}
    </p>
  );
}

export default NavigationButton;
