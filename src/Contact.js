import React from 'react'
import Header from './components/Header'


const Contact = () => {
  return (
    <div>
    <Header/>
   <center>
     
     </center>
     <div id='from-div'>
      <h3>
        Welcome To Contact Page
      </h3>
     <form id='form'>
      <input type='text' placeholder='name'/><br/>
      <input type='password' placeholder='password'/><br/>
      <button id='btn'>register</button>
      
      
     </form>
     </div>

    </div>
  )
}

export default Contact