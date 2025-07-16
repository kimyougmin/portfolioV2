import NavigationButton from "../atoms/NavigationButton.tsx";

function NavigationBar() {
  return (
    <div className="sticky">
      <NavigationButton title={"About Me"} isSelected={true}/>
      <NavigationButton title={"Projects"} isSelected={false}/>
      <NavigationButton title={"Education"} isSelected={false}/>
    </div>
  );
}

export default NavigationBar;
