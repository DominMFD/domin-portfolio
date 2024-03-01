import { BiLogoTypescript, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoAngular, BiLogoJava } from "react-icons/bi"
import { SiCsharp } from "react-icons/si";
import SkillsLevelCard from "../SkillsLevelCard";
import styles from "./styles.module.scss";

export default function SkillsContainer() {
  return (
    <div className={styles.container}>
      <SkillsLevelCard level={70}>
        <BiLogoHtml5 color="#E44D26" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={70}>
        <BiLogoCss3  color="#006BC0" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={60}>
        <BiLogoJavascript  color="#F7E018" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={60}>
        <BiLogoTypescript  color="#2D79C7" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={55}>
        <BiLogoReact  color="#2D79C7" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={50}>
        <BiLogoReact  color="#2D79C7" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={50}>
        <BiLogoAngular  color="#DE002D" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={40}>
        <BiLogoJava color="#F39110" size="50px" />
      </SkillsLevelCard>
      <SkillsLevelCard level={40}>
        <SiCsharp  color="#876CE3" size="50px" />
      </SkillsLevelCard>
    </div>
  );
}
