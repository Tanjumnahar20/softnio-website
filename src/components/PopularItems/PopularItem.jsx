/* eslint-disable react/prop-types */

const PopularItem = ({popularItem}) => {
    const {title,foodName,image} = popularItem;
    return (
        <div className="card bg-base-100  h-[180px] shadow-xl  ">
  <figure className=" ">
    <img 
      src={image}
      alt="popular item"
      className=" w-[70px] h-[70px] mt-4" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="leading-8 font-bebas text-[17px]">{title}</h2>
    <p className="font-sans text-[12px]">{foodName}</p>
    
  </div>
</div>
    );
};

export default PopularItem;