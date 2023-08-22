const BasicForm = (props) => {
  return (
    <form>
      <div className='controlGroup'>
        <div className='formControl'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='formControl'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='formControl'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='formActions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
