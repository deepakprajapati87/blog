
import { AllBanner } from '../components/AllBanner/AllBanner';
import { Heading } from '../components/Heading/Heading';
import PortfolioGallery from '../components/lightbox/LightBox';
import './page.css'
export const Portfolio = () => {
    return (
        <>
            {/* start banner  Portfolio */}

            <section className='page-title bg-1"'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <AllBanner upperTeext='Latest works' midleText='Portfolio' bottomTextOne='Home' bottomTextTwo='Latest works' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end banner Portfolio */}

            <section className='section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 text-center'>
                            <Heading titleSpan='Our works' headingHone='We have done lots of works, lets check some' />
                        </div>
                    </div>

                    
                  <PortfolioGallery/>
                 
                </div>
            </section>
        </>
    );
}