// import { useEffect, useState } from "react";
import working_img from '../young_women_working_with_laptop.png';
import app_view1 from '../QWL_landing.png';
import NavBar from '../components/NavBar';

// import ScrollAnimation from 'react-animate-on-scroll';
const Homepage = () => {
    // const [lanscapeFirst, setLandsacpeFirst] = useState(window.innerWidth / window.innerHeight);
    // useEffect(() => {
    //     setLandsacpeFirst(window.innerWidth / window.innerHeight);
    //     console.log(window.innerWidth / window.innerHeight);
    // }, [window.innerWidth, window.innerHeight]);
    return (
        <div className="App">
            {/* <NavBar /> */}
            <div className='first'>
                <div className="relative pt-16 pb-32 overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>

                                    <div className="mt-6">
                                        <h2 className="text-5xl text-left font-extrabold tracking-tight text-gray-900">
                                            “The key is not to prioritize what’s on your schedule, but to schedule your priorities.”
                                        </h2>
                                        <p className="mt-4 text-xl text-left text-gray-500">
                                            – Stephen Covey
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                        className="w-fit lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={working_img}
                                        alt="Working"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white pb-52">
                <div className=" lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg:min-h-fit">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>

                            <div className="mt-6 lg:pt-48">
                                

                                    <h2 className="text-6xl font-extrabold tracking-tight text-gray-900">
                                        Measure Your Work Life Quality
                                    </h2>
                                
                                <div className="mt-6">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.qwl.teacher_qwl1&pcampaignid=web_share"
                                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm btn-secondary "
                                    >
                                        Download App
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:absolute lg:h-full pt-4">
                            {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
                                <img
                                    className="md:px-8 w-fit lg:absolute lg:left-0 lg:h-auto lg:w-auto lg:max-w-none"
                                    src={app_view1}
                                    alt="App View"
                                />
                            {/* </ScrollAnimation> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;