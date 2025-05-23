import './Heading.css';

export const Heading =({
    titleSpan,
    headingHone,
    para,
    icon,
    headinHthree
})=>{
    return(
        <>
        <div className="heading-all">
         { titleSpan && <span className="title-span">{titleSpan}</span>} 
         {headingHone &&  <h1 className="heading-1">{headingHone}</h1>} 
        {para && <p>{para}</p>} 
       
       <h3>{icon} <span>{headinHthree}</span></h3>
        </div>
        </>
    )
}