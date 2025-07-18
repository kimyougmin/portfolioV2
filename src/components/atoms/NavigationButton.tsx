import type {SectionType} from "../../App.tsx";


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
      window.scrollTo({
        top: section.offsetTop - 64,
        behavior: "smooth"
      });
    }
    onClick();
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
