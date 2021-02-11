import {useState} from 'react'

function Registration() {

  let [person,setPerson]=useState({name:'',email:'',password:''})
  let [blankValue,setBlankValue]=useState({name:'',email:'',password:''})

  const handleChange=(e)=>{
    let objName=e.target.name;
   // console.log(objName)
    let data=e.target.value;
    setPerson({...person,[objName]:data})
   // console.log(person)

  }
  const handleSubmit=(e)=>{

    e.preventDefault();
    let data={name:'',email:'',password:''}
    console.log(blankValue)
    setBlankValue({name:'',email:'',password:''})

    if(person.name&&person.email&&person.password)
    {
      alert('all owk')
    }
    else{
      if(person.name==='')
      {
        data.name='please enter your name'
          
          //console.log(blankValue)
         // alert('name')
      }
      if(person.email==='')
      {
        data.email='please enter your email'
          //setBlankValue({...blankValue,'email':'please enter your email'})
         // alert('email')
      }
      if(person.password==='')
      {
        data.password='please enter password'
         // setBlankValue({...blankValue,'password':'please enter password'})
      }
      
    }
    setBlankValue(data)
    console.log(blankValue)
  }

  return (
    <div>


      <form className="col-sm-6 offset-sm-3 mt-5">

        <input type='text' onChange={handleChange} value={person.name} id='name' name='name' placeholder='name' className='form-control' /> 
        <label>{blankValue.name}</label><br/>
        <input type='text' onChange={handleChange} value={person.email} id='email' name='email' placeholder='email' className='form-control' /> 
        <label>{blankValue.email}</label><br/>
        <input type='password' onChange={handleChange} value={person.password} id='password' name='password' placeholder='password' className='form-control' /> 
        <label>{blankValue.password}</label><br/>
        <input type='password' id='c_password' name='c_password' placeholder='Confirm password' className='form-control' /> 
      

        <button onClick={handleSubmit}  className='form-control btn btn-primary' type='submit'>Sign Up</button>

      </form>


    </div>

  )
}
export default Registration