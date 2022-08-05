import React from "react";

const Card = ({ img, name, price,added }) => {
  return (
    <main className="border border-[#C5C5C5] w-[210px] mb-[20px] h-[250px] py-[20px] px-[10px] rounded-2xl  ">
      <div className="flex justify-between items-center mb-[20px]">
        <div class="material-symbols-outlined text-[#3FC979]">
          radio_button_checked
        </div>
        <div
          class={`material-symbols-outlined cursor-pointer  fill ${
            added ? "text-[#FF0000]" : "text-[#C5C5C5]"
          }`}
        >
          favorite
        </div>
      </div>
      <div className="rounded-full flex items-center justify-center mb-[20px]">
        <img src={img} alt="" className="rounded-full w-[100px] h-[100px]" />
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-2xl text-[#3FC979] font-bold">${price}</p>
        </div>
        <span
          class={`material-symbols-outlined fill  cursor-pointer  ${
            added ? "text-[#3FC979]" : "text-[#C5C5C5]"
          }`}
        >
          add_circle
        </span>
      </div>
    </main>
  );
};

export default Card;
