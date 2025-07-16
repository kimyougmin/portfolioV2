interface InterViewCardProps {
  title: string;
  description: string;
}
function InterViewCard({title, description}: InterViewCardProps) {
  return (
    <div className="bg-[#545454] rounded-2xl p-8">
      <p className="text-left text-white font-bold text-3xl mb-2">{title}</p>
      <p className="text-left text-white text-10">{description}</p>
    </div>
  );
}

export default InterViewCard;
