import "./styles.scss";

export const SectionTitle = ({ color, children }) => {
  return (
    <h3 className={`section-title section-title__${color}`}>
      {children}
    </h3>
  );
};
