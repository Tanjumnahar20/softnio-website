import img from '../../assets/images/testImg2.jpeg'
const About = () => {
    return (
        <section className=' py-24'>
            <div className='container mx-auto px-16 flex items-center justify-between gap-8 lg:w-[1000px]' >
                <div className='w-full  lg:w-[1000px]'>
                    <img src={img} alt="" />
                </div>
                <div className="tabs-container">
  <div className="tabs flex border-b border-gray-200">
    <button className="tab-item px-4 py-2 font-semibold bg-brown-500 text-black border-b-4 border-brown-600">
      About
    </button>
    <button className="tab-item px-4 py-2 font-semibold text-gray-600">
      Experience
    </button>
    <button className="tab-item px-4 py-2 font-semibold text-gray-600">
      Contact
    </button>
  </div>

  <div className=" text-black">
    <p className='capitalize'>Experience the market value</p>
    <br />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam iste maxime ipsum tenetur quo aspernatur animi minima maiores eos omnis officiis illo quos excepturi dolorum fugiat, nam ea debitis temporibus.</p>
  </div>
</div>

            </div>
        </section>
    );
};

export default About;