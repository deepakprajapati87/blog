import { AllBanner } from '../components/AllBanner/AllBanner';
import { MediaObject } from '../components/MediaObject/MediaObject';
import { TfiDesktop } from "react-icons/tfi";
import { TfiLayers } from "react-icons/tfi";
import { BsBarChartLine } from "react-icons/bs";
import { TfiVector } from "react-icons/tfi";
import { IoLogoAndroid } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import './page.css'
import { Heading } from '../components/Heading/Heading';
import { Button } from '../components/button/button';
export const Services = () => {
    return (
        <>
            {/* start banner  Services */}

            <section className='page-title bg-1"'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <AllBanner upperTeext='Our services' midleText='What We Do' bottomTextOne='Home' bottomTextTwo='Our Services' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end banner Services */}


            {/* start our services */}

            <section className='section-1 mt-5'>
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

            <section className='mt-5'>
                <div className='container'>
                    <div className='cta-block p-5 rounded'>
                        <div className='row rounded'>
                            <div className='col-md-7'>
                                <div className='outer-div'>
                                    <div className='left-professionals text-white'>
                                        {/* <Professionals/> */}
                                        <Heading style={{ fontSize: '17px' }} className='text-white' titleSpan='For Every type business' headingHone='Entrust Your Project to Our Best Team of Professionals' />

                                    </div> 

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='right-professionals'>
                                    <Button className="mt-5" buttonBtn='Contact Us' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}