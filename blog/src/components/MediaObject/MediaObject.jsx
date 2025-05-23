import './MediaObject.css';


export const MediaObject =({
    icon,
    headingHfour,
    icon2,
    para
})=>{
    return(
        <>
        <div className='about-content'>
        <div class="d-flex">
  <div class="flex-shrink-0">
     {icon}
    <span >{icon2}</span> 

  </div>
  <div class="flex-grow-1 ms-3">
    <h4>{headingHfour}</h4>
   <p>{para}</p>
   
  </div>
</div>
        </div>
        </>
    )
}