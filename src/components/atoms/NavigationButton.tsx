interface NavigationButtonProps {
  title: "About Me" | "Projects" | "Education";
  isSelected: boolean;
}
function NavigationButton({title, isSelected}: NavigationButtonProps) {
  return (
    <p className={`${isSelected ? "text-black9" : "text-black3"} text-left mb-1 text-5xl font-bold`}>{title}</p>
  );
}

export default NavigationButton;
