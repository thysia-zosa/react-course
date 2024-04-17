import styles from './FormInputGroup.module.css';

const FormInputGroup = ({className, children}) => {
  return (
    <div className={styles.inputGroup}>
      {children}
    </div>
  )
}

export default FormInputGroup;