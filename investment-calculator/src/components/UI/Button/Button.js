const Button = ({ type, className, title, clickHandler }) => {
  return (
    <button className={className} type={type} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;
