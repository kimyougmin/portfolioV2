import ProjectTag from "../atoms/ProjectTag.tsx";

interface ProjectCardProps {
  title: string;
  content: string;
  image: string;
  tags: string[];
  detailModalOpenHandler: (title: string) => void;
}

function ProjectCard({ title, content, tags, image, detailModalOpenHandler }: ProjectCardProps) {
  return (
    <div className="bg-[#3D3D3D] rounded-lg overflow-hidden hover:drop-shadow-2xl hover:translate-y-[-5px]">
      <div className="absolute opacity-0 px-4 py-12 h-[393px] hover:opacity-100 hover:block hover:z-10 bg-[#3D3D3D]">
        <p className="text-white font-bold text-2xl mb-2">{title}</p>
        <p className="text-[#8F8F8F] text-left text-lg mb-8">{content}</p>
        <div className="grid gap-2">
          <p
            onClick={() => detailModalOpenHandler(title)}
            className="text-[#E8E8E8] text-lg py-3 hover:text-black1 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">프로젝트
            설명</p>
          <p
            className="text-[#E8E8E8] text-lg py-3 hover:text-black1 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">Github 보기</p>
          <p
            className="text-[#E8E8E8] text-lg py-3 hover:text-black1 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">배포 URL</p>
        </div>
      </div>
      <div className="hover:opacity-0">
        <img src={image} alt={title} className="rounded-sm w-full h-[210px] object-cover"/>
        <div className="mt-4 p-4">
          <p className="text-white text-left font-bold text-xl mb-2">{title}</p>
          <p className="text-[#8F8F8F] text-left text-sm mb-10 h-[40px]">{content}</p>
          <ProjectTag tags={tags}/>
        </div>
      </div>
    </div>
  )
    ;
}

export default ProjectCard;
