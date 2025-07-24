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
      <div className="pt-4 px-4">
        {description.map((item, index) => {
          return (
            <div key={`${title}-${index}`} className="flex mb-4">
              <li className="text-left"></li>
              <p className="text-left">{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default DetailCard;
