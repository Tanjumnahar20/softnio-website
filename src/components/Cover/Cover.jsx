import '../../App.css'
import img1 from './../../assets/images/testImg1.jpeg';
import vector from './../../assets/images/vector.png';
const Cover = () => {
    return (
        <section className="bg-red-500 text-white lg:py-24">
            <div className="container mx-auto lg:px-16">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className='lg:w-1/2 lg:pl-20 relative'>
                        <div className="lg:absolute lg:top-[-120px] lg:w-[600px] lg:z-10">
                            <h1 className="text-4xl lg:text-7xl  mb-6 lg:py-2 lg:pr-4" style={{
                                  fontFamily: 'Bebas Neue',
                                background: 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',}}>
                            Taste the Authentic Saudi Cuisine
                            </h1>
                            <p className="text-lg mb-8 lg:max-w-[400px]" style={{ fontFamily: 'Roboto',}}>
                            Among the best Saudi chefs in the world, serving you something beyond flavor.
                            </p>
                            <button className="bg-[#FEBF00] text-black px-8 py-4 capitalize font-bold " style={{ fontFamily: 'Roboto',}}>
                            EXPLORE MENU
                            </button>
                        </div>
                    </div>
                <div className="lg:w-[750px] mt-8 lg:mt-0 relative ">
                    <img src={vector} alt="Delicious Saudi Food" className="w-10 h-10 rounded-lg absolute top-[-27px] right-[17px]" />

                        <img src={img1} alt="Delicious Saudi Food" className="lg:w-[600px] rounded-lg scale-x-[-1]" />
                        <div className='absolute bottom-0 right-[-4px] w-20 h-20 rounded-full bg-yellow-400 text-center flex justify-center items-center'>
                        
                        <p className='rounded-full pt-2 w-[70px] h-[70px] border-2 border-dotted border-[#BD1F17] text-black font-bold'>TODAY OFFER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cover;