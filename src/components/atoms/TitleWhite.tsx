interface TitleWhiteProps {
  text: string;
}
function TitleWhite({text} : TitleWhiteProps) {
  return (
    <p className="text-black9 text-left mb-8 text-5xl font-bold">{text}</p>
  );
}

export default TitleWhite;
