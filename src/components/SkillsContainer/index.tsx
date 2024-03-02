import { skillsIcon } from "@/service/skillsIcon";
import SkillsLevelCard from "../SkillsLevelCard";
import styles from "./styles.module.scss";

export default function SkillsContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      {skillsIcon.map((skill) => (
        <SkillsLevelCard key={skill.name} level={skill.level}>
            {skill.icon}
        </SkillsLevelCard>
      ))}
    </div>
  );
}
