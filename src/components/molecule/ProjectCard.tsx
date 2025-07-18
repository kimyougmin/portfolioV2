import ProjectTag from "../atoms/ProjectTag.tsx";

interface ProjectCardProps {
  title: string;
  content: string;
  image: string;
  tags: string[];
}

function ProjectCard({ title, content, tags, image }: ProjectCardProps) {
  return (
    <div className="bg-[#3D3D3D] rounded-sm">
      <img src={image} alt={title} className="rounded-sm w-full h-auto object-cover"/>
      <div className="mt-4 p-4">
        <p className="text-white text-left font-bold text-xl mb-2">{title}</p>
        <p className="text-[#8F8F8F] text-left text-sm mb-16">{content}</p>
        <ProjectTag tags={tags}/>
      </div>
    </div>
  )
    ;
}

export default ProjectCard;
