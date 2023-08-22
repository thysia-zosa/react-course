const SimpleInput = (props) => {
  return (
    <form>
      <div className='formControl'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="formActions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
