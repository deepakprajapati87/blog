import { NavLink } from 'react-bootstrap';
import './AllBanner.css';

export const AllBanner=({
    upperTeext,
    midleText,
    bottomTextOne,
    bottomTextTwo
})=>{
    return(
        <>
        <div className='all-banner'>
            <span>{upperTeext}</span>
            <h1 className='text-capitalize mb-4 text-lg'>{midleText}</h1>
            <nav aria-label="breadcrumb" className=''>
            <ol class="breadcrumb ">
            <li class="breadcrumb-item"><NavLink>{bottomTextOne}</NavLink></li>
            <li class="breadcrumb-item active" aria-current="page">{bottomTextTwo}</li>
            </ol>
            </nav>
        </div>
        </>
    )
}