import SignUp from "./components/Sign-Up"
import Login from "./components/Login"
import { use } from "react"
function App() {

  let isUserLoogedin = true
  let userName = "Bhanwar lal"

  if(isUserLoogedin) return (
    <>
  <p>Wellcome to the website </p>
  {(userName) &&  <span>Log Out</span>}

  </>
  
  )


  return(
    <>
    <Login/>
    <SignUp/>
    </>
  )
}

export default App

