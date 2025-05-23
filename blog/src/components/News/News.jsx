import { NavLink } from 'react-router-dom'
import './News.css'


export const News=({design,ui,admin, admintext,heading})=>{
    return(
        <>
        <div className='news1'>
            <div className='news-text'>
            <NavLink>{design} <span > / </span></NavLink>  
          <NavLink>{ui}<span>/</span></NavLink> 
          <NavLink>{admin}</NavLink>

          <NavLink> <span>{admintext}</span> </NavLink>
          <h3> <NavLink>{heading}</NavLink> </h3>
            </div>
         
        </div>
        
        </>
    )
}

