 import{NavLink } from"react-router-dom"

 function Sidebar(){
       return(
              <nav>
              <NavLink to ="/dashboard/students">
              students
              </NavLink>
              <NavLink to ="/dashboard/courses ">
              courses
              </NavLink>
              
       )
 }