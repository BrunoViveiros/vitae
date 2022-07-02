import { SectionTitle } from "../SectionTitle";
import { Skill } from "./Skill";

import "./styles.scss";

export const ProfileSkills = ({ className }) => {
  return (
    <section className={`${className} profile-skills`}>
      <SectionTitle color="white">SKILLS:</SectionTitle>
      <ul className="skills-list">
        <Skill name="LANGUAGE1" level="2" />
        <Skill name="LANGUAGE2" level="4" />
        <Skill name="LANGUAGE3" level="6" />
        <Skill name="LANGUAGE4" level="8" />
      </ul>
      <ul className="skills-list">
        <Skill name="SKILL1" level="3" />
        <Skill name="SKILL2" level="5" />
        <Skill name="SKILL3" level="7" />
        <Skill name="SKILL4" level="9" />
      </ul>
    </section>
  );
};
