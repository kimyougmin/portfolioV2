import NavigationButton from "../atoms/NavigationButton.tsx";
import type {SectionType} from "../../App.tsx";

interface NavigationBarProps {
  selectedSection: SectionType;
  onSelect: (section: SectionType) => void;
}
function NavigationBar({selectedSection, onSelect}: NavigationBarProps) {
  const sections: SectionType[] = ["About Me", "Projects", "Education"];
  return (
    <div className="sm:sticky sm:block top-0 flex justify-between sm:px-8 py-4">
      {sections.map((section) => (
        <NavigationButton
          key={section}
          title={section}
          isSelected={selectedSection === section}
          onClick={() => onSelect(section)}
        />
      ))}
    </div>
  );
}

export default NavigationBar;
