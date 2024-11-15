import '../../App.css'
import img1 from './../../assets/images/testImg1.jpeg';
import vector from './../../assets/images/vector.png';

const Cover = () => {
    return (
        <section className=" text-white relative py-5 sm:py-16" style={{ background: 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)'}}>
          
            <div className="container mx-auto w-full px-4 md:px-6 lg:px-16 2xl:px-32">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 lg:pl-20 relative">
                        <div className="relative lg:absolute lg:top-[-120px] 2xl:top-[-140px] lg:w-[600px] 2xl:w-[750px] lg:z-10">
                            <h1
                                className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl mb-4 md:mb-6 lg:py-2 lg:pr-4"
                                style={{
                                    fontFamily: 'Bebas Neue',
                                    background: 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
                                }}
                            >
                                Taste the Authentic Saudi Cuisine
                            </h1>
                            <p
                                className="text-base md:text-lg 2xl:text-xl mb-6 md:mb-8 max-w-[350px] md:max-w-[400px] 2xl:max-w-[500px]"
                                style={{ fontFamily: 'Roboto' }}
                            >
                                Among the best Saudi chefs in the world, serving you something beyond flavor.
                            </p>
                            <button
                                className="w-full md:w-auto bg-[#FEBF00] text-black px-6 md:px-8 2xl:px-12 py-3 md:py-4 2xl:py-5 capitalize font-bold"
                                style={{ fontFamily: 'Roboto' }}
                            >
                                EXPLORE MENU
                            </button>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-[400px] lg:w-[600px] 2xl:w-[750px] mt-8 lg:mt-0 relative">
                        <img
                            src={vector}
                            alt="Decorative"
                            className="w-8 md:w-10 2xl:w-12 h-8 md:h-10 2xl:h-12 rounded-lg absolute top-[-20px] md:top-[-27px] right-[17px]"
                        />
                        <img
                            src={img1}
                            alt="Delicious Saudi Food"
                            className="w-full rounded-lg scale-x-[-1]"
                        />
                        <div className="absolute bottom-0 right-[-42px] w-16 md:w-20 2xl:w-24 h-16 md:h-20 2xl:h-24 rounded-full bg-yellow-400 text-center flex justify-center items-center">
                            <p className="rounded-full pt-2 w-[56px] md:w-[70px] 2xl:w-[80px] h-[56px] md:h-[70px] 2xl:h-[80px] border-2 border-dotted border-[#BD1F17] text-black font-bold text-sm md:text-base 2xl:text-lg">
                                TODAY OFFER
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cover;
