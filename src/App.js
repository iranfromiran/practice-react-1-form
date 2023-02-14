import React from 'react';
import './App.css';

function App() {
const [formData,setFormData]=React.useState({
  email:"",
  password:"",
  confirmPass:"",
  isJoin:true
})
function handleChange(event){
  const {name, value,checked,type} =event.target;
  
  setFormData(prevForm =>{ return {
    ...prevForm,
    [name]:type==="checkbox"?checked:value
  }}
  )
}
function handleSubmit(event){
  event.preventDefault()
  
  if(formData.password===formData.confirmPass) {
    if(formData.isJoin) alert("thanks for signing up for our newsletter")
    else alert("successfully signed up!")
    
     }
  else alert("passwords do not match")
}



  return (
    <div className="App">
      <div className="white-box">
        <div className="form">
          <form onSubmit={handleSubmit}>

            <input type="email" 
            placeholder='enter your email'
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="email"/>
          <br/>
            <input type="password"
             placeholder='password'
             name="password"
             onChange={handleChange}
             value={formData.password}
             className="password"/>
          <br/>
            <input type="password"
             placeholder='confirm password'
             name="confirmPass"
             onChange={handleChange}
             value={formData.confirmPass}
             className="confirmPass"/>
            <br/>
            <input type="checkbox" 
            checked={formData.isJoin} 
            name="isJoin"
            onChange={handleChange}className="check"/>
            <label htmlFor='check' >do you want to join the newsletter?</label>
            <br/>
            <button className="submit">Sign up</button>
          </form>


        </div>
      </div>
    </div>
  );
}

export default App;
