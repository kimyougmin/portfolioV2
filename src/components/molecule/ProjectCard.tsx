import ProjectTag from "../atoms/ProjectTag.tsx";

interface ProjectCardProps {
  title: string;
  content: string;
  image: string;
  tags: string[];
}

function ProjectCard({ title, content, tags, image }: ProjectCardProps) {
  return (
    <div className="bg-[#3D3D3D] rounded-lg overflow-hidden hover:drop-shadow-2xl hover:translate-y-[-5px]">
      <div className="absolute opacity-0 px-4 py-12 w-full h-full hover:opacity-100 hover:z-10 bg-[#3D3D3D]">
        <p className="text-white font-bold text-2xl mb-2">{title}</p>
        <p className="text-[#8F8F8F] text-left text-lg mb-8">{content}</p>
        <div className="grid gap-2">
          <div className="rounded-lg border-2 py-3 border-[#E8E8E8]">
            <p className="text-[#E8E8E8] text-lg">프로젝트 설명</p>
          </div>
          <div className="rounded-lg border-2 py-3 border-[#E8E8E8]">
            <p className="text-[#E8E8E8] text-lg">Github 보기</p>
          </div>
          <div className="rounded-lg border-2 py-3 border-[#E8E8E8]">
            <p className="text-[#E8E8E8] text-lg">배포 URL</p>
          </div>
        </div>
      </div>
      <div className="hover:opacity-0">
        <img src={image} alt={title} className="rounded-sm w-full h-auto object-cover"/>
        <div className="mt-4 p-4">
          <p className="text-white text-left font-bold text-xl mb-2">{title}</p>
          <p className="text-[#8F8F8F] text-left text-sm mb-16">{content}</p>
          <ProjectTag tags={tags}/>
        </div>
      </div>
    </div>
  )
    ;
}

export default ProjectCard;
