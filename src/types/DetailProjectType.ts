import type {SkillType} from "./SkillType.ts";
import type {DetailCardProps} from "../components/molecule/DetailCard.tsx";

export interface DetailProjectType {
  keyColor: "#5D99FF" | "#DC3644" | "#FFC95D" | "#9B5DFF" | "#5DFF83";
  title: string;
  subtitle: string;
  Period: string;
  Personnel: string;
  role: string;
  projectTag: SkillType["type"][];
  description: string;
  keyFeatures: string[];
  useSkills: SkillType["type"][];
  projectContribution: DetailCardProps[];
  troubleshooting: DetailCardProps[];
  projectImages: string[];
}
