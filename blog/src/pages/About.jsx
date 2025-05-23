import { AllBanner } from '../components/AllBanner/AllBanner';
import { Button } from '../components/button/button';
import { Heading } from '../components/Heading/Heading';
import './page.css'
import image1 from '../../public/aboutRight.jpg';
import { Mission } from '../components/Mission/Mission';
import { CounterUp } from '../components/counterUp/CounterUp';
import { IoCheckmark } from "react-icons/io5";
import { TfiFlag } from "react-icons/tfi";
import { TfiLayers } from "react-icons/tfi";
import { TfiMedall } from "react-icons/tfi";
import { CardSlider } from '../components/CardSlide/CardSlider';
import {ImageCard} from '../components/OurTeam/OurTeam';
// import CardOne from '../components/OurTeam/Card';
// import team1 from '../../public/team-1.jpg';
// import team2 from '../../public/team-2.jpg';
// import team3 from '../../public/team-3.jpg';
// import team4 from '../../public/team-4.jpg';
// import team5 from '../../public/team-5.jpg';
// import team6 from '../../public/team-6.jpg';


const imageData = [
    { id: 1, title: "Justin hammer" , dec: "Digital Marketer", image: "../../public/team-1.jpg" },
    { id: 2, title: "Jason roy",  dec: "UI/UX Designer", image: "../../public/team-2.jpg" },
    { id: 3, title: "Henry oswald",  dec: "Developer",  image: "../../public/team-3.jpg" },
    { id: 4, title: "David Williams",  dec: "Senior Marketer", image: "../../public/team-4.jpg" },
    { id: 5, title: "Peter Odin", dec: "App Developer", image: "../../public/team-5.jpg" },
    { id: 6, title: "David Spensor",   dec: "Project Manager", image: "../../public/team-6.jpg" },
  ]; 



export const About = () => {
    return (
        <>
            {/* start banner about us */}

            <section className='page-title bg-1"'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <AllBanner upperTeext='About Us' midleText='Our Company' bottomTextOne='Home' bottomTextTwo='About Us' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end banner about us */}

            {/* start What we are */}

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                            <div className='about-left'>
                                <Heading titleSpan='What we are' headingHone='We are dynamic team of creative people' para='We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.' />
                                <Button className="" buttonBtn='Get Start' />

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                            <div className='about-right'>
                                <img src={image1} alt="aboutRight" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end What we are */}

            {/* start Mission box */}

            <section className=''>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <Mission spanNo='01.' Headingthree='Our Mission' para='llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <Mission spanNo='02.' Headingthree='Vission' para='llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <Mission spanNo='03.' Headingthree='Our Approach' para='llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end Mission box */}


            {/* start counter */}
            <section className='bg-counter section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box2'>
                                <CounterUp icon={<IoCheckmark />} start='0' end='1730' project='Project Done' iconPlus='+' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box2'>
                                <CounterUp icon={<TfiFlag />} start='0' end='125' project='User Worldwide ' iconPlus='M' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box2'>
                                <CounterUp icon={<TfiLayers />} start='0' end='39' project='Availble Country' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box2'>
                                <CounterUp icon={<TfiMedall />} start='0' end='14' project='Award Winner ' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end counter */}

  {/* start our team  */}

  <section className='mt-5 mb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 text-center'>
                            <Heading titleSpan='Clients testimonial' headingHone='Check whats our clients say about us' />

                        </div>
                    </div>
                   
                </div>
                <div className="container">
      <div className="row">
        {imageData.map((item) => (
          <ImageCard key={item.id} title={item.title} dec={item.dec} image={item.image} />
        ))}
      </div>
    </div>
            </section>

            {/* end our team  */}

            {/* start testimonial */}

            <section className='section testimonial bg-gray'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7 text-center'>
                            <Heading titleSpan='Clients testimonial' headingHone='Check whats our clients say about us' />
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='cards-slider m-2'>
                            <CardSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* end testimonial */}

          
        </>


    );
}