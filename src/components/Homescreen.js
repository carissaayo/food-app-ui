import React from "react";
import sortIcon from "../assets/imgs/sort-icon.svg";
import searchIcon from "../assets/imgs/search-icon.svg";
import expandIcon from "../assets/imgs/expand-more.svg";
import image1 from "../assets/imgs/image1.jpg"
import Card from "./Card";




const Homescreen = () => {
  return (
    <section className="bg-[#E7EBE7] w-full h-full px-[5%] py-8">
      <div className="flex justify-between mb-4">
        <img src={sortIcon} className="w-7 cursor-pointer" alt="" />
        <img src={searchIcon} className="w-7 cursor-pointer" alt="" />
      </div>
      <div className="mb-[40px]">
        <h1 className="text-2xl">
          Work Place{" "}
          <img
            src={expandIcon}
            className="inline-flex w-7 cursor-pointer"
            alt=""
          />
        </h1>
        <p className="text-sm">Choose your delicious meal</p>
      </div>

      <div className="flex justify-between items-center mb-[40px]">
        <div className="border-2 border-[#3FC979] rounded  text-[#3FC979] flex items-center justify-center h-8 w-8 cursor-pointer">
          <span class="material-symbols-outlined">home</span>
        </div>
        <div className="border-2 border-[#C5C5C5] rounded  text-[#C5C5C5] flex items-center justify-center h-8 w-8 cursor-pointer">
          <span class="material-symbols-outlined">favorite</span>
        </div>

        <div className="border-2  border-[#C5C5C5] rounded  text-[#C5C5C5]  flex items-center justify-center h-8 w-8 cursor-pointer">
          <span class="material-symbols-outlined">filter_alt</span>
        </div>
        <div className="border-2  border-[#C5C5C5] rounded  text-[#C5C5C5] flex items-center justify-center h-8 w-8 cursor-pointer">
          <span class="material-symbols-outlined">shopping_cart</span>
        </div>
      </div>

      <section className="flex gap-[30px] flex-wrap w-full">
        <Card img={image1} name="Veg Salad" price="10.00" added />
        <Card img={image1} name="Rice" price="12.00" />
        <Card img={image1} name="Fred Chicken" price="15.00" />
        <Card img={image1} name="Suya" price="22.00" added />
      </section>

      <div className="text-white flex bg-[#3FC979] rounded-b-[40px] h-[50px] w-full justify-between items-center px-[20px]  ">
        <p>2 items</p>
        <p>$27.00</p>
      </div>
    </section>
  );
};

export default Homescreen;
