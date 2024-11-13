/* eslint-disable no-undef */
// import img from '../../assets/images/testImg4.jpeg';

// const Bookings = () => {
//     return (
//        <section 
//            className="relative h-[490px] w-full object-cover object-top" 
//            style={{ backgroundImage: `url(${img})` }}
//        >
//            {/* Overlay */}
//            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
           
//            {/* Form */}
//            <div className="relative z-10 flex justify-center items-center h-full">
//                <form className="w-[90%] max-w-[635px] max-h-[548px] lg:w-[520px] lg:h-[450px] p-6 rounded-lg shadow-lg">
//                    <h2 className="text-2xl font-semibold text-white mb-4 text-center">Book Your Reservation</h2>
                   
//                    <div className="flex flex-col md:flex-row gap-4 mb-4">
//                        {/* Name Field */}
//                        <div className="flex-1">
//                            <input
//                                type="text"
//                                className="w-full border rounded-md p-2 focus:outline-none booking-text  bg-transparent "
//                                placeholder="Your Name *"
//                                required
//                                style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
//                            />
//                        </div>

//                        {/* Email Field */}
//                        <div className="flex-1">
//                            <input
//                                type="email"
//                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none booking-text bg-transparent"
//                                placeholder="Your Email"
//                                style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
//                            />
//                        </div>
//                    </div>

//                    {/* Reservation Date and Total People Fields */}
//                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
//                        <div>
//                            <input
//                                type="text"
//                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none  booking-text bg-transparent"
//                                placeholder="Reservation Date"

//                                style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
//                            />
//                        </div>
//                        <div>
//                            <input
//                                type="text"
//                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none booking-text   bg-transparent"
//                                placeholder="Number of People"
//                                style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
//                            />
//                        </div>
//                    </div>

//                    {/* Message Field */}
//                    <div className="mb-4">
//                        <textarea
//                            className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none booking-text  bg-transparent"
//                            placeholder="Your Message"
//                            style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
//                        />
//                    </div>

//                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-200">
//                        Submit
//                    </button>
//                </form>
//            </div>
//        </section>
//     );
// };

// export default Bookings;


import { FaCalendarAlt, FaLock, FaSortNumericDownAlt } from 'react-icons/fa';
import img from '../../assets/images/testImg4.jpeg';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { TbCaretUpDownFilled } from 'react-icons/tb';

const ReservationForm = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative h-[490px] w-full">
        <div className='w-full h-full'>
            <img src={img} className='w-full h-full object-cover' />
        </div>
      <div className="absolute top-0 left-[120px] z-[999] text-white rounded-lg p-8 md:w-1/2 w-full">
        <h2 className="text-3xl font-bold mb-4">Book Your Table</h2>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie velit.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              style={{ border: '1px solid rgba(229, 231, 235, 1)'}}
              className="w-full border p-2 booking-text focus:outline-none  
              bg-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 booking-text focus:outline-none  
              bg-transparent"
              style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
           
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border p-2 "
             style={{ border: '1px solid rgba(229, 231, 235, 1)' }}>
             
            
            <input
                type="text"
                placeholder="Reservation Date"
                className="w-full booking-text bg-transparent focus:outline-none"
            />
                        <FaCalendarAlt className="text-white " />

        </div>
        <div className="flex items-center border p-2 "
             style={{ border: '1px solid rgba(229, 231, 235, 1)' }}>
             
            
            <input
                type="text"
                placeholder="Total people"
                className="w-full booking-text bg-transparent focus:outline-none"
            />
<TbCaretUpDownFilled className='text-white' />

        </div>
          </div>
          <textarea
            placeholder="Message"
            className="w-full border p-2 booking-text focus:outline-none  
            bg-transparent"
            style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
          ></textarea>
          <button
            type="submit"
            className="btn-class"
          >
            Book Now
          </button>
        </form>
       
    </div>
    </div>
  );
};

export default ReservationForm;
