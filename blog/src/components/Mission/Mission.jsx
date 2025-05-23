import './Mission.css';

export const Mission=({
    spanNo,
    Headingthree,
    para
})=>{
    return(
        <>
        <div className='missionbox'>
            <h3 className='mb-3'>
                <span className='text-color mr-2 text-md '> {spanNo} </span>

               {Headingthree}
            </h3>
            <p>{para}</p>
        </div>
        </>
    )
}