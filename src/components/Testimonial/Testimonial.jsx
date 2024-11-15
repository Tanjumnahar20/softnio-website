

import tomato from '../../assets/images/tomato.png';
import grass from '../../assets/images/12.png';
import avatar from '../../assets/images/Image (1).png';
import vector from '../../assets/images/vector.png';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Testimonial = () => {
    return (
        <section className="w-full py-12 lg:py-16 2xl:py-24 bg-white relative">

            <div className="absolute top-[100px] left-[-95px] w-[200px] h-[200px] z-[999] 2xl:w-[250px] 2xl:h-[350px] sm:block hidden">
                <img src={tomato} alt="Decorative Tomato" className="w-full h-auto transform rotate-[280deg]" />
            </div>
            <div className="container mx-auto px-4 lg:px-36 2xl:px-48 relative">
                {/* Header */}
                <div className="mb-8 lg:mb-12 2xl:mb-16">
                    <div className="flex items-center gap-2 mb-2 lg:mb-4">
                        <div className="w-2 h-2 lg:w-3 lg:h-3" style={{ background: 'rgba(189, 31, 23, 1)' }}></div>
                        <p className="text-[14px] lg:text-[16px] font-sans" style={{ color: 'rgba(189, 31, 23, 1)' }}>Crispy, Every Bite Taste</p>
                    </div>
                    <h2 className="text-42xl md:text-3xl 2xl:text-6xl  font-bebas text-gray-900">
                        WHAT SOME OF MY CUSTOMERS SAY
                    </h2>
                </div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto,1fr] gap-0">
                    {/* Left Column - Testimonial Content */}
                    <div className="relative bg-yellow-400 h-[380px] lg:w-[450px] md:h-[380px] lg:h-auto p-8 md:p-12 2xl:p-16 flex flex-col justify-between overflow-hidden">
                        <div>
                            <RiDoubleQuotesL />
                            <blockquote className="text-[15px] font-[400] md:text-xl 2xl:text-3xl mb-6 2xl:mb-8 font-sans pl-5" style={{ color: 'rgba(10, 20, 37, 1)' }}>
                                You can not go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.
                            </blockquote>

                            <div className="flex flex-row-reverse w-[250px] md:w-[360px] h-[80px] justify-between items-center absolute bottom-[50px] left-[20px] px-5 md:px-2">
                                <div className="flex-shrink-0">
                                    <img
                                        src={avatar}
                                        alt="Customer"
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold font-bebas 2xl:text-xl" style={{ color: 'rgba(10, 20, 37, 1)' }}>KHALID AL DAWSRY</p>
                                    <p className="font-sans 2xl:text-lg" style={{ color: 'rgba(51, 51, 51, 1)' }}>Jeddah, Saudi</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute bottom-[50px] left-[-20px] overflow-hidden">
                            <img src={vector} alt="Decorative" className="w-12 h-12 2xl:w-16 2xl:h-16" />
                        </div>
                    </div>

                    {/* Right Column - Video */}
                    <div className="relative overflow-hidden h-[400px] md:h-[500px] 2xl:h-[600px]">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/e-qA3AF7xjQ?autoplay=1&mute=1&loop=1&playlist=e-qA3AF7xjQ"
                            style={{ border: "none" }}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M8 5v10l7-5-7-5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:absolute top-2 right-[100px] 2xl:right-[150px] flex justify-center lg:justify-end mt-6 space-x-4">
                    <button className="p-2 rounded-full shadow-xl">
                        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full shadow-xl">
                        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Decorative Right Grass Image */}
            <div className="absolute bottom-[150px] right-0  w-[190px] h-[190px] z-[999] 2xl:w-[250px] 2xl:h-[350px] sm:block hidden">
                <img src={grass} alt="Decorative Grass" className="w-full h-full object-cover rotate-[-5deg]" />
            </div>
        </section>
    );
};

export default Testimonial;

