import { FaCalendarAlt } from 'react-icons/fa';
import img from '../../assets/images/testImg4.jpeg';
import { TbCaretUpDownFilled } from 'react-icons/tb';
import Swal from 'sweetalert2';

const ReservationForm = () => {
  const handleBookings = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const reservationDate = form.reservationDate.value;
    const totalPeople = form.totalPeople.value;
    const message = form.message.value;
    Swal.fire({
      title: `Bookings confirmed for ${name}`,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    form.reset()

    
    console.log('Booking Details:',  name, email, reservationDate, totalPeople, message );
  };
  return (
    <div className="relative h-[600px]  w-full max-w-[100%] mx-auto booking-form-container">
      <div className="w-full h-full">
        <img src={img} className="w-full h-full object-cover" alt="Booking Background" />
      </div>
      <div className="absolute top-0 md:top-10 left-2 lg:left-[120px] 2xl:left-[150px] z-[999] text-white rounded-lg p-4 md:p-8 lg:p-12 2xl:p-16 w-full md:w-1/2 lg:w-[450px] 2xl:w-[500px]">
      <div className="flex items-center pt-2 lg:pt-2 gap-2  mb-2 lg:mb-4">
            <div className="w-2 h-2 lg:w-3 lg:h-3" style={{ background: 'rgba(189, 31, 23, 1)' }}></div>
            <p className="text-[14px] lg:text-[16px] font-sans" style={{ color: 'rgba(189, 31, 23, 1)' }}>Book now</p>
        </div>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4">Book Your Table</h2>
        <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base 2xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie velit.
        </p>
        <form className="lg:space-y-4 w-full" onSubmit={handleBookings}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              name='name'
              style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
              className="w-full border p-2 booking-text focus:outline-none bg-transparent text-sm md:text-base 2xl:text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name='email'
              className="w-full border p-2 booking-text focus:outline-none bg-transparent text-sm md:text-base 2xl:text-lg"
              style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-center border p-2"
              style={{ border: '1px solid rgba(229, 231, 235, 1)' }}>
              <input
                type="date"
                placeholder="Reservation Date"
                name="reservationDate"

                className="w-full booking-text bg-transparent focus:outline-none text-sm md:text-base 2xl:text-lg"
              />
              <FaCalendarAlt className="text-white text-sm md:text-base 2xl:text-lg" />
            </div>
            <div className="flex items-center border p-2"
              style={{ border: '1px solid rgba(229, 231, 235, 1)' }}>
              <input
                type="number"
                placeholder="Total people"
                name="totalPeople"

                className="w-full booking-text bg-transparent focus:outline-none text-sm md:text-base 2xl:text-lg"
              />
              <TbCaretUpDownFilled className="text-white text-sm md:text-base 2xl:text-lg" />
            </div>
          </div>
          <textarea
            placeholder="Message"
            name="message"

            className="w-full border p-2 booking-text focus:outline-none bg-transparent text-sm md:text-base 2xl:text-lg h-20 md:h-24 2xl:h-28"
            style={{ border: '1px solid rgba(229, 231, 235, 1)' }}
          ></textarea>
          <button
            type="submit"
            className="btn-class w-full md:w-full text-sm md:text-base 2xl:text-lg  2xl:px-8 2xl:py-3"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
