import React from 'react'
import Header from './components/Header'
import TabButton from './components/TabButton'
import Courses from './components/Courses'
import './index.css'
import './components/TabButton.css'
import './components/Header.css'
import {useState} from 'react'



const Home = (props) => {
  const [tab,setTab]=useState(0);
  const courses=[{
    courseName:'Gate',
    duration:'1 year',
    id:0
  },
  {
    courseName:'Cat',
    duration:'1 year',
    id:1
  },
  {
    courseName:'Ies',
    duration:'1 year',
    id:2
  },
]
  return (
    <>
    <div className='Home-div'>
      <Header/>
     
       <div id='quote'>
      <h3 >
         Only You Know how Far You Have Truly Come...
          Please Dont Ever Let That Go Unnoticed!!
       </h3>
      </div>
      
      </div>
      <h1 className='heading'>courses that we offer</h1>
      <TabButton tab={tab}  setTab={setTab}/>
      { 
        courses.map((course,index)=>{
          return <Courses course={course} tab={tab} index={index}/>
          
        })
      }
      
      
     </>
  )
}

export default Home