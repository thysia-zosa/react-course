import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({submitCallback}) {
  return (
    <div className='new-expense'>
      <ExpenseForm submitCallback={submitCallback} />
    </div>
  );
}

export default NewExpense;