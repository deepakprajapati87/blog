import { AllBanner } from '../components/AllBanner/AllBanner';
import { ContactForm } from '../components/Form/Form';
import './page.css'
export const Contact =()=>{
    return(
        <>
          <section className='page-title bg-1"'>
                               <div className='container'>
                                   <div className='row'>
                                       <div className='col-md-12'>
                                           <AllBanner upperTeext='Contact Us' midleText='Enqury Now' bottomTextOne='Home' bottomTextTwo='Contact Us' />
                                       </div>
                                   </div>
                               </div>
                           </section>
                            <section className='section bg-gray'>
                                   <div className='container'>
                                       <div className='row'>
                                           <ContactForm/>
                                       </div>
                                   </div>
                                
                                  </section>
        </>
    );
}