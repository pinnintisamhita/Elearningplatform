import React from 'react'
import './Courses.css'

const courses = (props) => {
  console.log(props) 
  return (
    <div>
    {  props.tab  === props.course.id ? ( <div id='course-div'>
  course Name: {props.course.courseName}
  <br/>
  duration:{props.course.duration}
 </div>): null}
 </div>
  
    
  )
}

export default courses