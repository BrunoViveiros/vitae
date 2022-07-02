import { ProfileDescription } from "./ProfileDescription";
import { ProfileInfo } from "./ProfileInfo";
import { ProfilePhoto } from "./ProfilePhoto";
import { ProfileSkills } from "./ProfileSkills";

import "./styles.scss";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <ProfilePhoto className="side-bar__photo"/>
      <ProfileInfo className="side-bar__section" />
      <ProfileDescription className="side-bar__section" />
      <ProfileSkills className="side-bar__section" />
    </div>
  );
};
