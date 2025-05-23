import { Button } from '../components/button/button';
import { CardIcon } from '../components/Card-Icon/CardIcon';
import { Heading } from '../components/Heading/Heading';
import { Text } from '../components/text/text';
import { TfiDesktop } from "react-icons/tfi";
import { TfiMedall } from "react-icons/tfi";
import { TfiLayersAlt } from "react-icons/tfi";
import { FaDiagramSuccessor } from "react-icons/fa6";
import './page.css'
import { MediaObject } from '../components/MediaObject/MediaObject';
import { RxTriangleRight } from "react-icons/rx";
import { CounterUp } from '../components/counterUp/CounterUp';
import { TfiLayers } from "react-icons/tfi";
import { BsBarChartLine } from "react-icons/bs";
import { TfiVector } from "react-icons/tfi";
import { IoLogoAndroid } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { TfiMobile } from "react-icons/tfi";
import { CardSlider } from '../components/CardSlide/CardSlider';
import { News } from '../components/News/News';
import { FaUser } from "react-icons/fa";
import images1 from '../../public/1.jpg';
import images2 from '../../public/2.jpg';
import images3 from '../../public/3.jpg';

export const Home = () => {
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='banner-text'>
                                <Text />
                                <h1>Our work is <br />presentation of our <br />capabilities.</h1>
                                <Button buttonBtn='Get Start' icon={<RxTriangleRight />} />

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* start We are creative & expert people  */}

            <section className='business-provide'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <Heading titleSpan='We are creative & expert people' headingHone='We work with business & provide solution to client with their business problem' />

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <div className='card-business'>
                                <CardIcon icon={<TfiDesktop />} headinHfour='Modern & Responsive design' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.' />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <div className='card-business'>
                                <CardIcon icon={<TfiMedall />} headinHfour='Awarded licensed company' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.' />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <div className='card-business'>
                                <CardIcon icon={<TfiLayersAlt />} headinHfour='Build your website Professionally' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end We are creative & expert people  */}


            {/* start We are dynamic team of creative people */}

            <section className='section about position-relative'>
                <div className='bg-about'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 offset-lg-6 offset-md-0'>
                            <div className='dynamic-team'>
                                <Heading titleSpan='What we are' headingHone='We are dynamic team of creative people' />
                                <MediaObject icon={<FaDiagramSuccessor />} headingHfour='We are dynamic team of creative people' para='We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.' />
                                <div className='btn-right'>
                                    <Button className="" buttonBtn='Get Start' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end We are dynamic team of creative people */}

            {/* Start counterUp */}


            <section className='section about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box'>
                                <CounterUp start='0' end='1730' project='Project Done' iconPlus='+' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box'>
                                <CounterUp start='0' end='125' project='User Worldwide ' iconPlus='M' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box'>
                                <CounterUp start='0' end='39' project='Availble Country' />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='couter-box'>
                                <CounterUp start='0' end='14' project='Award Winner ' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            {/* end counterUp */}

            {/* start our services */}

            <section className='section-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <div className='text-center'>
                                <Heading titleSpan='Our Services' headingHone='We provide a wide range of  creative services ' />
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<TfiDesktop />} headingHfour='Web development.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<TfiLayers />} headingHfour='Interface Design.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<BsBarChartLine />} headingHfour='Business Consulting.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<TfiVector />} headingHfour='Branding.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<IoLogoAndroid />} headingHfour='App development.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <MediaObject icon2={<HiMiniPencilSquare />} headingHfour='Content creation.' para='A digital agency isn t here to replace your internal team, were here to partner' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end our services */}

            {/* Start Entrust Your Project to Our Best Team of Professionals */}

            <section className=' cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5' id='professionals'>
                            <div className='bg-white p-4 rounded'>
                                <Heading titleSpan='We create for you' headingHone='Entrust Your Project to Our Best Team of Professionals' para='Have any project on mind? For immidiate support :' icon={<TfiMobile />} headinHthree='+23 876 65 455' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end Entrust Your Project to Our Best Team of Professionals */}

            {/* start testimonial */}

              <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                        <Heading titleSpan='Clients testimonial' headingHone='Check whats our clients say about us' />
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='cards-slider m-2'>
                            <CardSlider/>
                        </div>
                    </div>
                </div>
              </section>

            {/* end testimonial */}


            {/* start news */}

            <section className='section-1 latest-blog bg-2'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <div className='text-center text-white bg-zindex'>
                                <Heading className='' titleSpan='Latest News' headingHone='Latest articles to enrich knowledge' />
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                   <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='news'>
                           <img src={images1} alt="images1" />
                             <News design='Design' ui='Ui/Ux' admin={<FaUser/>} admintext='admin' heading='How to improve design with typography?' />
                             <Button className="" buttonBtn='Get Start' />

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='news'>
                            <img src={images2} alt="images2" />
                             <News design='Design' ui='Ui/Ux' admin={<FaUser/>} admintext='admin' heading='How to improve design with typography?' />
                             <Button className="" buttonBtn='Get Start' />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='news'>
                            <img src={images3} alt="images3" />
                             <News design='Design' ui='Ui/Ux' admin={<FaUser/>} admintext='admin' heading='How to improve design with typography?' />
                             <Button className="" buttonBtn='Get Start' />
                        </div>
                    </div>
                   </div>


                </div>
            </section>

            {/* end news */}

            {/* start Entrust Your Project to Our Best Team of Professionals */}


                <section>
                <div className='container'>
                    <div className='row rounded' id='bg-professional'>
                        <div className='col-md-7'>
                            <div className='outer-div'>
                              <div className='left-professionals'>
                              {/* <Professionals/> */}
                              <Heading  style={{fontSize:'17px'}}  className='' titleSpan='For Every type business' headingHone='Entrust Your Project to Our Best Team of Professionals' />

                              </div>
                             
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='right-professionals'>
                            <Button className="" buttonBtn='Contact Us' />
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                
               {/* end Entrust Your Project to Our Best Team of Professionals */}

               
        </>
    );
}