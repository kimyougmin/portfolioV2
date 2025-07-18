import NavigationButton from "../atoms/NavigationButton.tsx";

function NavigationBar() {
  return (
    <div className="sm:sticky sm:block top-0 flex justify-between  sm:px-8 py-4">
      <NavigationButton title={"About Me"} isSelected={true}/>
      <NavigationButton title={"Projects"} isSelected={false}/>
      <NavigationButton title={"Education"} isSelected={false}/>
    </div>
  );
}

export default NavigationBar;
