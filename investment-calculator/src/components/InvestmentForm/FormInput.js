const FormInput = ({label, title}) => {
  return (
    <p>
      <label htmlFor={label}>{title}</label>
      <input type="number" id={label} />
    </p>
  )
}

export default FormInput;