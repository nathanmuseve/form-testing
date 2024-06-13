import React, { useState } from "react"; //import react to use it in our component Form

//declare states at the root parent component
function Form() {
  const [inputs, setInputs] = useState("");
  const [select, setSelected] = useState("");
  const [checkbox, setCheckbox] = useState("Football");
  const [textarea, setTextarea] = useState("");

  //const handleChange = (event) => {
   //const name = target.name; //set all similar input to name
    //const value = target.value; //set value to the current state value to be updated by the state function
      //setInputs(values => ({ ...values, [name]: value })); //a callback function to update state. ...values means that on updating the next state the cureent one should not be deleted.That is it should be retained until all states have been updated
  //};

  //this finctions update respectives dinstict states
  // const handleSelected = () => { return setSelected(select)};
  // const handleCheckbox = ()=> { return setCheckbox(checkbox) };
  // const handleTextarea = () => { return setTextarea(textarea)};
  // const handleTextarea1 = () => { return setTextarea1(textarea1)};

  //this function prevent default refreshing
  const handleSubmit = (event) => {
    console.log(inputs);
    console.log(select);
    console.log(checkbox);
    console.log(textarea);
    event.preventDefault();

    //after submitting empty the fields. That is restore the fields to default states
    setInputs("");
    setSelected("");
    setCheckbox("Football");
    setTextarea("");  
  }

  const handleSubmittedSuccessfully =() => {
    function Success () {
      return (
        <div>
        <h2>Your details have been successfully submitted!</h2>
        <h2>Thank you for taking your time to fill in your details. Have a great day</h2>
      </div>
      );
    };

    function Failed() {
      return (
        <div>
          <h2>Sorry, your details could not be submitted. Please try again!</h2>
        </div>
      );
    };
    const submit = true;
   submit? <Success />: <Failed />;

  }

  return (
    <div>
      <h1>Registration form</h1>
      <p>Please fill the form below to register your details in our database</p>
      <form onSubmit={handleSubmit} id="myForm" multiple>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="FirstName" value={inputs} onChange={(event) => {setInputs(event.target.value)}} placeholder="first name" required />
        </div>

          <div>
          <label htmlFor="midName">Middle Name</label>
          <input type="text" id="midName" name="MiddleName" value={inputs} onChange={(event) => {setInputs(event.target.value)}} placeholder="middle name" required />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="LastName" value={inputs} onChange={(event) => {setInputs(event.target.value)}} placeholder="last name" required />
        </div>

        <div>
          <label htmlFor="date">Date of Birth</label>
          <input type="date" id="date" name="DateofBirth" value={inputs} onChange={(event) => {setInputs(event.target.value)}} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age"min={25} max={64} name="Age" value={inputs} onChange={(event) => {setInputs(event.target.value)}} />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <select id="loaction" onChange={(event) =>{setSelected(event.target.value)}} >
            <option value={select} >Nairobi</option>
            <option value="Kisumu" >Kisumu</option>
            <option value="Nakuru" >Nakuru</option>
            <option value="Mombasa" >Mombasa</option>
            <option value="Kakamega" >Kakamega</option>
            <option value="Bungoma" >Bungoma</option>
            <option value="Other" >Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="hobbies">What are your Hobbies? 
          <p>Please check in the below boxes.</p>
          </label>
          <input type="checkbox" id="hobbies" value={checkbox} name="Football" onChange={(event) =>{setCheckbox(event.target.value)}} />Football

          <input type="checkbox" id="hobbies" value="Music" name="Music" onChange={(event) =>{setCheckbox(event.target.value)}} />Music

          <input type="checkbox" id="hobbies" value="Reading" name="Reading" onChange={(event) =>{setCheckbox(event.target.value)}} /> Reading

          <input type="checkbox" id="hobbies" value="Other" name="Other" onChange={(event) =>{setCheckbox(event.target.value)}} />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="Email" value={inputs} name="Emali" onChange={(event) => {setInputs(event.target.value)}} placeholder="email" required />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" min={0} max={10} name="PhoneNumber" value={inputs} onChange={(event)=>{setInputs(event.target.value)}} />
        </div>

        <div>
        <label htmlFor="describe" >Please give a brief description about yourself.</label>
        <textarea value={textarea} onChange={(event) =>{setTextarea(event.target.value)}} id="describe" name="Description" placeholder="Please briefly describe yourself" ></textarea>
        </div>

        <div>
          <button type="submit" onSubmit={handleSubmittedSuccessfully}>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;