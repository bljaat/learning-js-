import React from 'react'
import myImage from '../images/image.jpg' 

function Profile({myImage,name, age, email}) {
  return (
    <div className='profile'  style={{border: "solid 1px #000", borderRadius: "1rem" , padding: "1rem"}}>
        <img src={myImage} alt="" style={{width: "40%", borderRadius: "100px"}} />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>{email}</p>
      </div>
  )
}


export default Profile
