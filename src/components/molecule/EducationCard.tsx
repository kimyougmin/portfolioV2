interface EducationCard {
  title: string;
  description: string;
  period: string;
  content: string[];
}
function EducationCard({title, description, period, content}: EducationCard) {
  return (
    <div className="flex-grow flex-shrink basis-[calc(50%-0.5rem)] min-w-[300px] bg-[#383838] p-8 box-border">
      <p className="text-xl text-left text-[#EFEFEF] font-bold">{title}</p>
      <p className="text-md text-left text-[#EFEFEF] mb-2">{description}</p>
      <p className="text-sm text-left text-[#C0C0C0] mb-6">{period}</p>
      {content.map((item, idx) => (
        <p key={idx} className="text-left text-white text-sm mb-2">{item}</p>
      ))}
      <img
        src={"/public/prgrms.png"}
        alt="프로그래머스 로고"
        className="mt-10 w-auto max-w-[150px] h-auto"
      />
    </div>
  );
}

export default EducationCard;
