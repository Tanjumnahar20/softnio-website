

import { useState } from 'react';
import img from '../../assets/images/testImg2.jpeg';
import img1 from '../../assets/images/testImg5.png'
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { PiMedal, PiPackage } from 'react-icons/pi';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section className="mt-6 sm:mt-6  lg:py-24 ">
      <div className="container mx-auto lg:px-16 flex flex-col lg:flex-row  justify-between gap-8">
        {/* Image Section */}
        <div className="w-full lg:pl-20  ">
          <img src={img} alt="About" />
        </div>
 {/* Tabs Section */}
        <div className="tabs-container lg:w-full ">
          {/* Tab Buttons */}
          <div className="tabs flex mb-8" style={{ borderBottom: '1px solid #B52B1D' }}>
            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold ${
                activeTab === 'about' ? 'text-white bg-[#B52B1D]' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
      

            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold ${
                activeTab === 'experience' ? 'text-white bg-[#B52B1D]' : 'text-black'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold ${
                activeTab === 'contact' ? 'text-white bg-[#B52B1D]' : 'text-black'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </div>

          {/* Tab Content */}
          <div className=" ">
            {activeTab === 'about' && (
              <div>
                <p className="capitalize font font-bebas">
                  Exceptional culinary experience and delicious food
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste maxime
                  ipsum tenetur quo aspernatur animi minima maiores eos omnis officiis illo quos
                  excepturi dolorum fugiat, nam ea debitis temporibus.
                </p>
                
                <div className='flex gap-4 mt-4'>
                  <div className=''>
                    <p className='btn-class capitalize'>about more</p>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    
                    <div className='  text-red-900' >
                    <FiPhoneCall  />
                    </div>
                   
                    <div className='font-sans font-bold'>
                    +88 3426 739 485
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <p className="capitalize font font-bebas"
                 >Our Experience</p>
                  <br />
                <p>
                  We have years of experience in delivering exceptional culinary experiences. Our
                  team of experts is dedicated to bringing you the best flavors from around the world.
                </p>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <p className="capitalize font font-bebas">Get in Touch</p>
                <br />
                <p>
                  Have any questions? Feel free to reach out to us! We’d love to hear from you and
                  discuss how we can make your dining experience unforgettable.
                </p>
              </div>
            )}
          </div>
          {/* <div className="absolute -inset-9   -right-[50px] transform -bottom-[680px]  rotate-[30deg] lg:rotate-[180deg] overflow-hidden  ">
  <img
    src={img1}
    alt="Decorative"
    className="w-40 h-40  object-cover"
    style={{  clipPath: 'inset(0 34.5% 35% 10%)' }} 

  />
</div> */}
      <div className="absolute right-0 -bottom-[680px] transform translate-x-1/4 lg:translate-x-28 rotate-[30deg] lg:rotate-[300deg] ">
  <img
    src={img1}
    alt="Decorative"
    className="w-40 h-40 object-cover "
    style={{
      
      maxWidth: '100%', 
    }}
  />
</div>
        </div>
  

      </div>
    

          <div className='  mt-16 lg:pl-7 lg:px-32 flex flex-col items-center justify-center lg:flex-row gap-20  '>

        <div className='flex gap-4'>
          <div className="icon">
            <FiShoppingBag className="text-red-800 text-2xl" />
          </div>
          <div >
            <p className='font-bebas capitalize icon-header '>fast delivery</p>
            <p className='text-sm'>Within 30 minutes</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className="icon">
            <PiMedal className="text-red-800 text-2xl" />
          </div>
          <div >
            <p className='font-bebas capitalize icon-header '>absolute dining</p>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className="icon">
            <PiPackage className="text-red-800 text-2xl" />
          </div>
          <div >
            <p className='font-bebas capitalize icon-header '>pickup delivery</p>
            <p>Grab your food order</p>
          </div>
        </div>
        </div>
  

    </section>
  );
};

export default About;
