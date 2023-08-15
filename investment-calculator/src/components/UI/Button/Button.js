const Button = ({ type, className, title }) => {
  return (
    <button className={className} type={type}>
      {title}
    </button>
  );
};

export default Button;
