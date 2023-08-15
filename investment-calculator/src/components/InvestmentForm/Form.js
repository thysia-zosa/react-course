import Button from '../UI/Button/Button';
import styles from './Form.module.css';
import FormInput from './FormInput';
import FormInputGroup from './FormInputGroup';

const Form = () => {
  return (
    <form className={styles.form}>
      <FormInputGroup>
        <FormInput label={'currentSavings'} title={'Current Savings ($)'} />
        <FormInput label={'yearlyContribution'} title={'Yearly Savings ($)'} />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput label={'expectedReturn'} title={'Expected Interest (%, per year)'} />
        <FormInput label={'duration'} title={'Investment Duration (years)'} />
      </FormInputGroup>
      <p className={styles.actions}>
        <Button className={styles.buttonAlt} type='reset' title={'Reset'} />
        <Button className={styles.button} type='submit' title={'Calculate'} />
      </p>
    </form>
  )
}

export default Form;