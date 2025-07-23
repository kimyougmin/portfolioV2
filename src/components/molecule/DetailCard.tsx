export interface DetailCardProps {
  title: string;
  description: string[];
}
function DetailCard({title, description}: DetailCardProps) {
  return (
    <div className="bg-[#E7E7E7] rounded-xl overflow-hidden">
      <div className="bg-[#D9D9D9] py-2 px-4">
        <p className="text-left text-xl">{title}</p>
      </div>
      <div className="py-3 px-4">
        {description.map((item) => {
          return (
            <li className="text-left">{item}</li>
          )
        })}
      </div>
    </div>
  );
}

export default DetailCard;
