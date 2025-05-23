
import './CardIcon.css';
export const CardIcon=({
    icon,
  
    headinHfour,
    para
})=>{
   return(
    <>
    <div className="card-icon">
    {icon}

     {headinHfour && <h4>{headinHfour}</h4>}  
      {para &&  <p>{para}</p>}
    </div>
    </>
   ) 
}