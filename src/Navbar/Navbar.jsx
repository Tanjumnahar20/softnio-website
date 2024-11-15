import { ImSpoonKnife } from 'react-icons/im';
import './../App.css';

const Navbar = () => {
  const menuItems = (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Clients</li>
      <li>Blog</li>
      <li>Contact</li>
    </>
  );

  return (
    <div className="navbar  nav sticky top-0 z-50 lg:pl-[150px] lg:pt-[15px] lg:pb-[15px] 2xl:pl-[200px] 2xl:pt-[20px] 2xl:pb-[20px]" style={{background: 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)' }}>
      <div className="navbar-start flex flex-row-reverse justify-end items-center">
      <div className="dropdown ml-[150px] lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-7 w-7 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow flex items-center gap-2 text">
            {menuItems}
          </ul>
        </div>
        <div className='flex justify-center items-center gap-1'>
  <div className="flex items-center justify-center w-14 h-14 lg:w-14 lg:h-14 rounded-full"style={{background: 'rgba(254,191,0, 1)'}}>
         <div className='  rounded-full border-[1px] lg:border-[1px] border-red-900'>
         <ImSpoonKnife className='text-red-900 rounded-full border-red-900 text-[50px] p-2  border-[1px] lg:text-[48px] lg:border-[1px] lg:p-2'/>
         </div>
      
    </div>
        <a
          style={{ fontFamily: 'Poppins' }}
          className="text-[28.44px] xl:text-[32px] 2xl:text-[36px] font-semibold mr-7 xl:mr-10 2xl:mr-12 text-white"
        >
          Restau<span className="font-normal  " style={{ fontFamily: 'Poppins' }} >rant</span>
        </a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-[484px] xl:w-[600px] 2xl:w-[700px] flex items-center gap-4 xl:gap-6 2xl:gap-8 text">
          {menuItems}
        </ul>
      </div>
      <div className="hidden lg:block navbar-end">
        <a className="btn-class text-[14px] xl:text-[16px] 2xl:text-[18px] px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4">
          Book a table
        </a>
      </div>
    </div>
  );
};

export default Navbar;
