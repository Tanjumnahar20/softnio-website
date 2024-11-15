/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import img from '../../assets/images/testImg2.jpeg';
import img1 from '../../assets/images/testImg5.png'
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { PiMedal, PiPackage } from 'react-icons/pi';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [progressPercentage, setProgressPercentage] = useState(50);

  return (
    <section className="mt-6 sm:mt-6 lg:py-24 2xl:py-32">
      <div className="container mx-auto lg:px-16 2xl:px-32 flex flex-col lg:flex-row justify-between gap-8">
      
      <div className="relative w-full lg:pl-20">
      {/* Overlay Box */}
      {/* <div className="absolute top-7 w-[200px] h-[auto] left-[90px] bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
       

         <div className="relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#e0e0e0"
          strokeWidth="4"
          fill="none"
        />

        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#fbbf24"
          strokeWidth="4"
          strokeDasharray="170"
          style={{
            strokeDashoffset: 130 - (130 * progressPercentage) / 100,
            transition: 'stroke-dashoffset 0.5s ease',
          }}
          fill="none"
        />

        <circle
          cx="25"
          cy="5"
          r="3"
          stroke="#fbbf24"
          strokeWidth="2"
          fill="none"
          transform-origin="25px 25px"
          style={{
            transform: `rotate(${progressPercentage * 8}deg)`,
            transition: 'transform 0.5s ease',
          }}
        />
      </svg>

      <span className="absolute font-bold text-xs md:text-sm lg:text-base 2xl:text-lg">
        50+
      </span>
    </div>


        <div className="text-left">
          <p className="text-lg font-semibold">Market Experiences</p>
        </div>
      </div> */}

<div className="absolute top-7 w-[128px] h-[73px] md:w-[220px] lg:w-[260px] 2xl:w-[300px] lg:h-auto left-[30px] md:left-[80px] lg:left-[100px] bg-white p-3 md:p-4 rounded-lg shadow-lg flex items-center space-x-3 md:space-x-4">
  {/* Progress Circle */}
  <div className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 50 50">
      {/* Background Circle */}
      <circle cx="25" cy="25" r="20" stroke="#e0e0e0" strokeWidth="4" fill="none" />

      {/* Progress Circle */}
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="#fbbf24"
        strokeWidth="4"
        strokeDasharray="170"
        style={{
          strokeDashoffset: 130 - (130 * progressPercentage) / 100,
          transition: 'stroke-dashoffset 0.5s ease',
        }}
        fill="none"
      />

      {/* Small Circle Indicator */}
      <circle
        cx="25"
        cy="5"
        r="3"
        stroke="#fbbf24"
        strokeWidth="2"
        fill="none"
        transform-origin="25px 25px"
        style={{
          transform: `rotate(${progressPercentage * 8}deg)`,
          transition: 'transform 0.5s ease',
        }}
      />
    </svg>

    {/* Centered Text */}
    <span className="absolute font-bold text-[10px] md:text-xs lg:text-sm 2xl:text-base">50+</span>
  </div>

  {/* Text Content */}
  <div className="text-left">
    <p className="text-[9px] md:text-base lg:text-lg 2xl:text-xl font-semibold">Market Experiences</p>
  </div>
</div>

      
      {/* Background Image */}
      <img src={img} alt="Food and Drink" className="w-full rounded-lg" />
    </div>

        {/* Tabs Section */}
        <div className="tabs-container lg:w-full">
          {/* Tab Buttons */}
          <div className="tabs flex mb-8" style={{ borderBottom: '1px solid #B52B1D' }}>
            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold 2xl:px-6 2xl:py-3 ${
                activeTab === 'about' ? 'text-white bg-[#B52B1D]' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold 2xl:px-6 2xl:py-3 ${
                activeTab === 'experience' ? 'text-white bg-[#B52B1D]' : 'text-black'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`tab-item px-2 py-1 lg:px-4 lg:py-2 font-semibold 2xl:px-6 2xl:py-3 ${
                activeTab === 'contact' ? 'text-white bg-[#B52B1D]' : 'text-black'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-base md:text-lg 2xl:text-xl">
            {activeTab === 'about' && (
              <div>
                <p className="capitalize font font-bebas text-lg 2xl:text-2xl">
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
                    <p className='btn-class capitalize text-base 2xl:text-lg'>About more</p>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <div className='text-red-900'>
                      <FiPhoneCall />
                    </div>
                    <div className='font-sans font-bold text-sm 2xl:text-lg'>
                      +88 3426 739 485
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div>
                <p className="capitalize font font-bebas text-lg 2xl:text-2xl">Our Experience</p>
                <br />
                <p>
                  We have years of experience in delivering exceptional culinary experiences. Our
                  team of experts is dedicated to bringing you the best flavours from around the world.
                </p>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <p className="capitalize font font-bebas text-lg 2xl:text-2xl">Get in Touch</p>
                <br />
                <p>
                  Have any questions? Feel free to reach out to us! We’d love to hear from you and
                  discuss how we can make your dining experience unforgettable.
                </p>
              </div>
            )}
          </div>

          {/* Decorative Image */}
          <div className="hidden sm:block lg:absolute lg:right-0 lg:-bottom-[680px] lg:transform translate-x-1/4 lg:translate-x-28 rotate-[30deg] lg:rotate-[300deg]">
            <img
              src={img1}
              alt="Decorative"
              className="w-40 h-40 2xl:w-52 2xl:h-52 object-cover"
              style={{
                maxWidth: '100%', 
              }}
            />
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="mt-16 lg:pl-7 lg:px-32 2xl:px-48 flex flex-col items-center justify-center lg:flex-row gap-20">
        <div className='flex gap-4'>
          <div className="icon">
            <FiShoppingBag className="text-red-800 text-2xl 2xl:text-3xl" />
          </div>
          <div>
            <p className='font-bebas capitalize icon-header text-lg 2xl:text-xl'>Fast Delivery</p>
            <p className='text-sm 2xl:text-base'>Within 30 minutes</p>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className="icon">
            <PiMedal className="text-red-800 text-2xl 2xl:text-3xl" />
          </div>
          <div>
            <p className='font-bebas capitalize icon-header text-lg 2xl:text-xl'>Absolute Dining</p>
            <p className='text-sm 2xl:text-base'>Best buffet restaurant</p>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <div className="icon">
            <PiPackage className="text-red-800 text-2xl 2xl:text-3xl" />
          </div>
          <div>
            <p className='font-bebas capitalize icon-header text-lg 2xl:text-xl'>Pickup Delivery</p>
            <p className='text-sm 2xl:text-base'>Grab your food order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
