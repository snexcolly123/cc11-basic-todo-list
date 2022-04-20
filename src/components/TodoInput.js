import { useState } from "react";
import Button from "./UI/Button";

function TodoInput(props) {
  const [input, setInput] = useState({
    email: "",
    username: "",
    phoneNumber: ""
  });

  const [error , setError] = useState({});

  const handleChangeInput = event => {
    const oldInput = { ...input };
    oldInput[event.target.name] = event.target.value;
    //หาkeyที่ชื่อname (ที่ตั้งkeyเพิ่มชื่อname แทนที่จะใช้idที่ชื่อเดียวกัน เพราะมันใช้คนละจุดป)
    setInput(oldInput);
  }

  const handleSubmitForm = event =>{
    event.preventDefault();

    const newError = {};
    if(!input.email){
      newError.email = 'Email is require';
    }

    if(!input.username){
      newError.username = 'Username is require';
    }
    if(!input.phoneNumber){
      newError.phoneNumber = 'Phone number is require';
    }else if (input.phoneNumber.length !== 10){
      newError.phoneNumber = 'Invalid phone number format';
    }

    if(Object.keys(newError).length > 0){
      setError(newError);
    }else{
      setError({});
    }
  }


  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
        {error.email && <small className="text-danger">
          {error.email}
        </small> }
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
        {error.username && <small className="text-danger">
          {error.username}
        </small> }
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChangeInput}
        />
        {error.phoneNumber && <small className="text-danger">
          {error.phoneNumber}
        </small> }
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <button type="button" className="btn btn-success ms-3">
        Cancel
      </button>
    </form>
  );
}
export default TodoInput;

// onChange={() => setInput({...input, event.target.value})
