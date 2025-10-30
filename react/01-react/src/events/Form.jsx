import React, { useState } from 'react'

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState()
    const [email, setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log(firstName, lastName, age , email)
        setFirstName("")
        setLastName("")
        setAge("")
        setEmail("")
    }

    // function handelChange(e){
    //     setFirstName(e.target.value)
    // }

  return (
    <div className='form'>
        <h2>Create Account</h2>
      <form>
        {/* <input placeholder='Enter your firstName...' type='text' onChange={handelChange} value={firstName}/> */}
        <input placeholder='Enter your firstName...' type='text' onChange={(e) => setFirstName(e.target.value.toUpperCase())} value={firstName}/>
        <input placeholder='Enter your lastName...' type='text'  onChange={(e) => setLastName(e.target.value.toUpperCase())} value={lastName}/>
        <input placeholder='Enter your age...' type='text' onChange={(e) => setAge(e.target.value.toUpperCase())} value={age}/>
        <input placeholder='Enter your email...' type='text'  onChange={(e) => setEmail(e.target.value)} value={email}/>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default Form
