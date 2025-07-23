export interface ProjectTagProps {
  tags: string[];
}
function ProjectTag({tags}: ProjectTagProps) {
  return (
    <div className="flex gap-1">
      {tags.map((item) => {
        return (
          <p className="text-[10px] text-white px-4 bg-[#282828] rounded">{item}</p>
        )
      })}
    </div>
  );
}

export default ProjectTag;
