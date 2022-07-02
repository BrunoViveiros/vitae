import "./styles.scss";

export const Skill = ({ name, level }) => {
  return (
    <li className="skill">
      <p className="skill__name">{name}</p>
      <span className={`skill__level skill__level--${level}`}></span>
    </li>
  );
};
