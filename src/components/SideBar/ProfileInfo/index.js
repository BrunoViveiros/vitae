import { SectionTitle } from "../SectionTitle";
import { StrongText } from "../StrongText";

import "./styles.scss";

export const ProfileInfo = ({ className }) => {
  return (
    <section className={`${className} profile-info`}>
      <SectionTitle color="white">PROFILE</SectionTitle>
      <div className="profile-info__info">
        <StrongText color="white">STREET NAME</StrongText>
        <StrongText color="white">POSTAL CODE/ CITY NAME</StrongText>
      </div>
      <div className="profile-info__info">
        <StrongText color="white">DATE BIRTH</StrongText>
      </div>
      <div className="profile-info__info">
        <StrongText color="white">NATIONALITY</StrongText>
        <StrongText color="white">NATURALITY</StrongText>
      </div>
      <div className="profile-info__info">
        <StrongText color="white">PHONE NUMBER</StrongText>
      </div>
      <div className="profile-info__info">
        <StrongText color="white">E-MAIL ADDRESS</StrongText>
      </div>
      <div className="profile-info__info">
        <StrongText color="white">WEBSITE</StrongText>
      </div>
    </section>
  );
};
