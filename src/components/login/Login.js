import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from 'react'
import './Login.css'

function Login()
{

  let [user,setUser]=useState({userEmail:'',userPassword:''})
  let [blankValue,setBlankValue]=useState({user:'',password:''})

  const handleChange=(e)=>{

    let name=e.target.name
    let data=e.target.value

    setUser({...user,[name]:data})


  }


  const handleSubmit=(e)=>{

    e.preventDefault()
    let blankData={user:'',password:''}


    if(user.userEmail&&user.userPassword)
    {
      alert('all owk')
    }
    else{

      if(user.userEmail==='')
      {
        blankData.user='please enter a user email'
      }
      if(user.userPassword==='')
      {
        blankData.password='please enter a password';
      }
      


    }

    setBlankValue(blankData)


  }

  return(

    <div>

    

    <form className={'col-sm-6 offset-3 mt-5 '} >
   

     <input value={user.userEmail} onChange={handleChange} className='form-control'  id='userEmail' name='userEmail' placeholder='user email' type='text'></input>

     <label>{blankValue.user}</label>

     <br/>


     <input value={user.userPassword} onChange={handleChange}  className='form-control' id='userPassword' name='userPassword' placeholder='user password' type='text'></input>
     
     <label>{blankValue.password}</label>

     <br/>


     <button onClick={handleSubmit} className={'btn btn-primary form-control'} type='submit' >Login</button>

    


    </form>

    <div className={'sign-up'}>

      <span>Not Registered,yet?</span>
<Link to='/registration'>Sign Up</Link>

    </div>






    </div>
  )
}


export default Login