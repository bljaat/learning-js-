 
import './App.css'
import Profile from './component/Profile'
import myImage from '../images' 


function App() {

  return (
    <>
     <div className='profiles' style={{display: "flex", gap: "10px", width: "100%", flexWrap: "wrap"}}>
      <Profile name="bhanwar lal" age="18" email="bhanwar@gmail.com"/>
      <Profile name="lokesh" age="19" email="lokesh@gmail.com"/>
      <Profile name=" mohan" age="20" email="mohan@gmail.com"/>
      <Profile name="rohit" age="21" email="rohit@gmail.com"/>
      <Profile name="roshan" age="24" email="roshan@gmail.com"/>
      <Profile name="ravi" age="25" email="ravi@gmail.com"/>
      <Profile name="rakesh" age="26" email="rakesh@gmail.com"/>
      <Profile name="rahul" age="27" email="rahul@gmail.com"/>
      <Profile name="sagar" age="28" email="sagar@gmail.com"/>
      <Profile name="yash" age="29" email="yash@gmail.com"/>
     </div>
    </>
  )
}

export default App
