const FormInput = ({ label, title, onChange, value }) => {
  return (
    <p>
      <label htmlFor={label}>{title}</label>
      <input
        type="number"
        id={label}
        onChange={onChange}
        value={value}
      />
    </p>
  );
};

export default FormInput;
