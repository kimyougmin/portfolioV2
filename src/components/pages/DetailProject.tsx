import ProjectTag from "../atoms/ProjectTag.tsx";
import SkillsDescription from "../molecule/SkillsDescription.tsx";
import DetailCard from "../molecule/DetailCard.tsx";
import type {DetailProjectType} from "../../types/DetailProjectType.ts";

interface DetailProjectProps {
  detailModalCloseHandler: () => void;
  dateSet: DetailProjectType;
}
function DetailProject({detailModalCloseHandler, dateSet}: DetailProjectProps) {

  return (
    <div onClick={detailModalCloseHandler} className="w-full h-full sm:px-24 sm:py-8 p-0 bg-black bg-opacity-50 absolute top-0">
      <div onClick={(e) => e.stopPropagation()} className="w-full h-full rounded-md overflow-scroll bg-white pb-8">
        <div className="absolute top-4 right-4">
          <div className="sticky top-0">
            <div onClick={detailModalCloseHandler} className="rounded-full bg-[#DCDCDC] w-fit p-3 opacity-50">
              <img src="/icons/Close.png" className="w-[24px] h-[24px]"/>
            </div>
          </div>
        </div>

        <div className="bg-[#CCDFFD] hidden sm:flex">
          <div className="flex gap-2 mx-4">
            <div onClick={detailModalCloseHandler}
                 className="w-[14px] h-[14px] bg-[#FD534F] my-auto rounded-full justify-items-center content-center">
              <img src="/icons/Close.png" className="w-[8px] h-[8px]"/>
            </div>
            <div onClick={detailModalCloseHandler} className="w-[14px] h-[14px] bg-[#FCB53B] my-auto rounded-full justify-items-center content-center">
              <img src="/icons/Minus.png" className="w-[8px] h-[1px]"/>
            </div>
            <div className="w-[14px] h-[14px] bg-[#2FBB4A] my-auto rounded-full justify-items-center content-center">
              <img src="/icons/Expansion.png" className="w-[8px] h-[8px]"/>
            </div>
          </div>
          <div className="bg-[url('/tab.png')] mt-1 w-[258px] h-[35px] flex justify-between px-4">
            <div></div>
            <p className="my-auto">{dateSet.title}</p>
            <img src="/icons/Close.png" className="w-[15px] h-[15px] my-auto"/>
          </div>
        </div>

        <div className="bg-[#F7F7F7] hidden sm:flex h-[52px]">
          <img src="/controller.png" className="h-[18px] my-auto px-2"/>
          <div className="flex h-[32px] border border-[#323232] my-auto w-full rounded-full">
            <img src="/icons/check.png" className="w-[18px] h-[18px] my-auto mx-2"/>
            <p className="my-auto text-sm">youngminKim.com/portfolio/{dateSet.title}</p>
          </div>
          <img src="/icons/setting.png" className="w-[55px] h-[18px] my-auto mx-6"/>
        </div>

        <div className="h-[258px] pt-10" style={{backgroundColor: dateSet.keyColor}}>
          <div className="mb-10">
            <p className="text-white text-5xl">{dateSet.title}</p>
            <p className="text-3xl">{dateSet.subtitle}</p>
          </div>
          <div className="mb-4">
            <div className="flex gap-2 justify-center">
              <p className="text-[#ECECEC]">{dateSet.period}</p>
              <p>{dateSet.personnel}</p>
            </div>
            <p>{dateSet.role}</p>
          </div>
          <div className="flex justify-between mb-2">
            <div/>
            <ProjectTag tags={dateSet.projectTag}/>
            <div/>
          </div>
          <div>
            <svg className="mx-auto" width="255" height="34" viewBox="0 0 255 34" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 0H255L250 17L246.059 28.5778C244.956 31.8199 241.911 34 238.486 34H16.7095C13.2935 34 10.2544 31.8311 9.14397 28.6006L5.5 18L0 0Z"
                fill={dateSet.keyColor}/>
            </svg>
            <div className="relative -top-8">
              <svg className="mx-auto" width="69" height="32" viewBox="0 0 69 32" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_307_561)">
                  <path d="M48.5 8L47.6963 6.66667L34.5 12.7733L21.3037 6.66667L20.5 8L34.5 15L48.5 8Z" fill="#E8E8E8"/>
                  <path d="M49 17L47.6963 15.4533L34.5 21.56L21.3037 15.4533L20 17L34.5 24L49 17Z" fill="#E8E8E8"/>
                </g>
                <defs>
                  <clipPath id="clip0_307_561">
                    <rect width="69" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="sm:px-24 px-4 grid gap-12">
            <div className="">
              <p className="text-black1">{dateSet.description}</p>
            </div>

            <div className="">
              <p className="text-left text-2xl font-bold mb-2">🎯 핵심 기능</p>
              <div className="grid gap-2">
                {dateSet.keyFeatures.map((item, index) => {
                  return (
                    <p className="text-left" key={`text-${index}`}>{item}</p>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="text-left text-2xl font-bold mb-2">⚙️ 사용 기술</p>
              <div>
                <SkillsDescription skills={dateSet.useSkills}/>
              </div>
            </div>

            <div>
              <p className="text-left text-2xl font-bold mb-2">📚 프로젝트 기여도</p>
              <div className="grid gap-4">
                {dateSet.projectContribution.map((item, index) => {
                  return (
                    <DetailCard key={`${item.title}-${index}`} title={item.title} description={item.description}/>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="text-left text-2xl font-bold mb-2">🚨 트러블 슈팅</p>
              <div className="grid gap-4">
                {dateSet.troubleshooting.map((item, index) => {
                  return (
                    <DetailCard key={`${item.title}-${index}`} title={item.title} description={item.description}/>
                  )
                })}
              </div>
            </div>

            <div className="pb-8">
              <p className="text-left text-2xl font-bold mb-2">🖥️ 프로젝트 이미지</p>
              <div className="grid grid-cols-3 gap-6">
                {dateSet.projectImages.map((item, index) => {
                  return (
                    <img className="w-[240px] h-[155px] border" key={`${dateSet.title}img-${index}`} src={item}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
