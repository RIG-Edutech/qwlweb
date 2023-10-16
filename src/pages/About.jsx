import history from '../img/history.png'
import positive_work from '../img/positive_work.png'
import face_recog from '../img/face_recog.png'
import recomendation from '../img/recomendation.png'
import website_download from '../img/website_download.jpg'
import register_form from '../img/register_form.jpg'
import login_form from '../img/login_form.jpg'
import nav_bar from '../img/nav_bar.png'
import start_testing from '../img/start_testing.jpg'
import face_capture from '../img/face_capture.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ScrollAnimation from 'react-animate-on-scroll'

const benefits = [
    {
        title: 'Real-Time Emotional Insight',
        description: 'This application provides users with immediate and accurate feedback on their current emotional state through face recognition technology. By offering real-time insights, individuals can gain a deeper understanding of their emotions, fostering self-awareness and emotional intelligence.',
        imageUrl:
            face_recog,
    },
    {
        title: 'Personalized Well-Being Recommendations',
        description: "Based on the analyzed facial expressions, the app generates personalized suggestions to improve the user's current emotional state. Whether it's recommending a quick stress-relief exercise, suggesting a mindfulness activity, or providing tips for better work-life balance, the app actively contributes to enhancing the user's well-being.",
        imageUrl:
            recomendation,
    },
    {
        title: 'Historical Tracking for Continuous Improvement',
        description: 'The application maintains a history page, allowing users to track their emotional well-being over time. This feature enables individuals to identify patterns, track progress, and make informed decisions to enhance their overall quality of work life. It encourages a proactive approach to mental health and continuous self-improvement.',
        imageUrl:
            history,
    },
    {
        title: 'Promotes a Positive Work Culture',
        description: "By incorporating a tool that prioritizes and monitors employees' emotional well-being, organizations can send a strong message about the importance of mental health. This contributes to fostering a positive work culture that values the holistic health of its workforce, leading to increased employee satisfaction, engagement, and productivity.",
        imageUrl:
            positive_work,
    },
]

export default function About() {
    return (
        <>
            <div className='p-4 py-8 bg-amber-100'>
                <h1 className='text-2xl pl-4 pb-8'>Application benefits</h1>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">

                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="relative rounded-lg border border-sky-100 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-sky-200"
                        >
                            <div className="flex-shrink-0">
                                <img className="h-fit w-24" src={benefit.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <h3 className="text-lg">{benefit.title}</h3>
                                    <p className=" text-gray-500 pt-5">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='tutorial-section pt-12'>
                <h1 className='text-4xl pl-4 pb-8 text-center'>How to use application</h1>
                <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <Carousel className="rounded-2xl px-32 " transitionTime={2000} animationHandler={"fade-slide"} infiniteLoop={true} showArrows={true}  useKeyboardArrows={true} interval={2000} swipeable={true} renderArrowNext={(clickHandler, hasNext) => {
                        return (
                            hasNext && (
                                <button className="next-button-container" onClick={clickHandler}>
                                    <p  className='text-6xl'>&gt;</p>
                                </button>
                            )
                        );
                    }}
                        renderArrowPrev={(clickHandler, hasNext) => {
                            return (
                                hasNext && (
                                    <button onClick={clickHandler} className="prev-button-container">
                                        <p className='text-6xl'>&lt;</p>
                                    </button>
                                )
                            );
                        }}>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 1</h3>
                            <div className="text-xl mt-4 space-y-4">
                                Go to the official website www.mbejaji.com Click on the download button that will redirect to play store.
                            </div>
                            <div className="space-y-4 w-full flex justify-center">
                                <div className='w-6/9 border-neutral-400 mt-4  space-y-4 px-4 '>
                                    <img className='rounded-xl' src={website_download} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col align-start'>
                            <h3 className="text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 2</h3>
                            <div className="text-xl mt-4 space-y-4">
                                Register to app by inputing your personal data.
                            </div>
                            <div className="space-y-4 w-full flex justify-center">
                                <div className='w-2/9 border-neutral-400 mt-4  space-y-4 px-4 '>
                                    <img className='rounded-xl' src={register_form} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 3</h3>
                            <div className="text-xl mt-4 space-y-4">
                                Login to application using registered email and password.
                            </div>
                            <div className=" w-full flex justify-center">
                                <div className='w-1/3  border-neutral-400 mt-4  space-y-4 px-4 '>
                                    <img className='rounded-xl' src={login_form} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 4</h3>
                            <div className="text-xl mt-4 space-y-4">
                                On the navigation bar open testing menu (the menu with camera icon).
                            </div>
                            <div className="space-y-4 w-full flex justify-center">
                                <div className='w-1/3 border-neutral-400 mt-4  space-y-4 px-4 '>
                                    <img className='rounded-xl' src={nav_bar} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 5</h3>
                            <div className="text-xl mt-4 space-y-4">
                                Press "Capture Image" button to continue open device camera.
                            </div>
                            <div className="space-y-4 w-full flex justify-center">
                                <div className='w-1/3 border-neutral-400 mt-4 mb-8 space-y-4 px-4 '>
                                    <img className=' rounded-xl' src={start_testing} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 6</h3>
                            <div className="text-xl mt-4 space-y-4">
                                Point the camera at the face and press the camera button to capture the current face.
                            </div>
                            <div className="space-y-4 w-full flex justify-center">
                                <div className='w-2/9 border-neutral-400 mt-4 space-y-4 px-4 '>
                                    <img className='rounded-xl' src={face_capture} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    </ScrollAnimation>
                </div>
                
                {/* <div className="pl-12 pr-12 grid grid-cols-1 lg:grid-cols-3 gap-12 xl:col-span-2">
                    <div className="md:grid md:gap-4">
                        <div>
                            
                            <div className="relative">
                                <div className="pt-4 absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-500" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="md:grid md:gap-4">
                        <div>
                            
                            <div className="relative">
                                <div className="pb-4 absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-500" />
                                </div>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 4</h3>
                            <ul className="text-xl mt-4 space-y-4">
                                On the navigation bar open testing menu (the menu with camera icon).
                            </ul>
                            <ul className="space-y-4 w-full flex justify-center">
                                <img className='border border-neutral-400 mt-4 mb-8 space-y-4 p-x-4 w-1/2 rounded-xl' src={nav_bar} alt="" />
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid  md:gap-4">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 5</h3>
                            <ul className="text-xl mt-4 space-y-4">
                                Press "Capture Image" button to continue open device camera.
                            </ul>
                            <ul className="space-y-4 w-full flex justify-center">
                                <img className='border border-neutral-400 mt-4 mb-8 space-y-4 p-x-4 w-1/2 rounded-xl' src={start_testing} alt="" />
                            </ul>
                            <div className="relative">
                                <div className="pb-4 absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-500" />
                                </div>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800 tracking-wider uppercase">Step 6</h3>
                            <ul className="text-xl mt-4 space-y-4">
                                Point the camera at the face and press the camera button to capture the current face.
                            </ul>
                            <ul className="space-y-4 w-full flex justify-center">
                                <img className='border border-neutral-400 mt-4 mb-8 space-y-4 p-x-4 w-1/2 rounded-xl' src={face_capture} alt="" />
                            </ul>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
            
        </>
    )
}