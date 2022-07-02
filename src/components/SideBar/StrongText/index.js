import "./styles.scss";

export const StrongText = ({ color, children }) => {
  return (
    <p className={`strong-text strong-text__${color}`}>
      {children}
    </p>
  );
};
