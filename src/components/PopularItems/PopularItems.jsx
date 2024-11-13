import PopularItem from "./PopularItem";

const PopularItems = () => {
    const popularItems = [
        {
          id: 1,
          title: "Vegetables Burger",
          foodName: "Barbecue Italian cuisine pizza",
          image: "https://i.ibb.co.com/N3XrM2P/burger.jpg"
        },
        {
          id: 2,
          title: "Special Pizza",
          foodName: "Barbecue Italian cuisine pizza",
          image: "https://i.ibb.co.com/VpzzHrj/pizza.png"
        },
        {
          id: 3,
          title: "Special French Fries",
          foodName: "Barbecue Italian cuisine",
          image: "https://i.ibb.co.com/XZq5v0N/fry.jpg"
        },
        {
          id: 4,
          title: "Cuisine Chicken",
          foodName: "Japanese Cuisine Chicken",
          image: "https://i.ibb.co.com/54gvyjb/chiken.jpg"
        },
      ];
      
      
    return (
        <section className="">
             <div className=" container mt-6 sm:mt-6  lg:py-24 mx-auto lg:px-24" style={{ background: 'rgba(251, 247,242, 1)' }}>
              
                <div className="flex  lg:flex-row items-center gap-1">
                    <div className="w-2 h-2 " style={{background: 'rgba(189, 31, 23, 1)'}}></div>
                    <p className="text-[14px] font-sans" style={{color: 'rgba(189, 31, 23, 1)'}}>Crispy, Every Bite Taste</p>
                </div>
          <p className="font-bebas leading-[55px] text-[40px] mb-4">POPULAR FOOD ITEMS</p>
                
              
           
                <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 " >
                    {
                        popularItems.map(popularItem => <PopularItem
                            key={popularItem.id}
                            popularItem={popularItem}
                        ></PopularItem>)
                    }
                </div>
            </div>
        </section>
    
    );
};

export default PopularItems;