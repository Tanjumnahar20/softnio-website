import About from '../About/About';
import Bookings from '../Bookings/Bookings';
import Cover from '../Cover/Cover';
import PopularItems from '../PopularItems/PopularItems';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='home-content'>
            <Cover />
            <About/>
            <PopularItems/>
            <Bookings/>
            <Testimonial/>
        </div>
    );
};

export default Home;









