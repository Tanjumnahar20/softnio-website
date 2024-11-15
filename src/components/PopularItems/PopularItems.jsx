import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PopularItem from "./PopularItem";


const PopularItems = () => {
    const popularItems = [
        {
          id: 1,
          title: "Vegetables Burger",
          foodName: "Barbecue Italian cuisine pizza",
          image: "https://i.ibb.co/N3XrM2P/burger.jpg"
        },
        {
          id: 2,
          title: "Special Pizza",
          foodName: "Barbecue Italian cuisine pizza",
          image: "https://i.ibb.co/VpzzHrj/pizza.png"
        },
        {
          id: 3,
          title: "Special French Fries",
          foodName: "Barbecue Italian cuisine",
          image: "https://i.ibb.co/XZq5v0N/fry.jpg"
        },
        {
          id: 4,
          title: "Cuisine Chicken",
          foodName: "Japanese Cuisine Chicken",
          image: "https://i.ibb.co/54gvyjb/chiken.jpg"
        },
      ];
      
    return (
       
<section className="">
    <div className="container mt-8 md:mt-8 lg:py-24 2xl:py-32 mx-auto px-4 lg:px-16 xl:px-24 2xl:px-32" style={{ background: 'rgba(251, 247, 242, 1)' }}>
        
        {/* Section Header */}
        <div className="flex items-center pt-8 lg:pt-2 gap-2  mb-2 lg:mb-4">
            <div className="w-2 h-2 lg:w-3 lg:h-3" style={{ background: 'rgba(189, 31, 23, 1)' }}></div>
            <p className="text-[14px] lg:text-[16px] font-sans" style={{ color: 'rgba(189, 31, 23, 1)' }}>Crispy, Every Bite Taste</p>
        </div>

        {/* Main Title and Navigation Buttons for Larger Screens */}
        <div className="flex items-center justify-between mb-4 lg:mb-8">
            <p className="font-bebas text-[28px] lg:text-[40px] 2xl:text-[48px] leading-[40px] lg:leading-[55px]">POPULAR FOOD ITEMS</p>
            <div className="hidden lg:flex space-x-4">
                <button className="p-2 rounded-full shadow-xl">
                 
                <IoIosArrowBack />

                </button>
                <button className="p-2 rounded-full shadow-xl">
                <IoIosArrowForward className="text-red-900" />
                    
                </button>
            </div>
        </div>

      
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {popularItems.map(popularItem => (
                <PopularItem
                    key={popularItem.id}
                    popularItem={popularItem}
                />
            ))}
        </div>
 



       {/* formobile navigation */}
        <div className="flex justify-center mt-6 space-x-4 pb-6">
  {/* Left Arrow Button */}
  <button className="p-2 rounded-full shadow-xl">
  
    <IoIosArrowBack className="text-black"/>
  </button>

  {/* Right Arrow Button */}
  <button className="p-2 rounded-full shadow-xl ">
   
      <IoIosArrowForward className="text-red-900" />

  </button>
</div>

    </div>
</section>


    );
};

export default PopularItems;
