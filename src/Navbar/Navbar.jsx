import  './../App.css'
const Navbar = () => {
    const menuItems= <>
    <li>Home</li>
    <li>About</li>
    <li>portfolio</li>
    <li>clients</li>
    <li>blog</li>
    <li>contact</li>
    </>

    return (
        <div className="navbar bg-base-100 nav sticky top-0 z-50 lg:pl-[150px] lg:pt-[15px] lg:pb-[15px]">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow flex items-center gap-2 text">
       {menuItems}
      </ul>
    </div>
    <a style={{ fontFamily: 'Poppins' }} className=" text-[28.44px] font-semibold mr-7">Restau<span className="font-normal">rant</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  w-[484px] h-[18] flex items-center gap-4 text ">
      {menuItems}
    </ul>
  </div>
  <div className="hidden lg:block  navbar-end  ">
    <a className="btn" >Book a table</a>
  </div>
</div>
    );
};

export default Navbar;