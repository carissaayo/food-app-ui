import cover from "../assets/imgs/food2.png";

const Splashscreen = () => {
  return (
    <section className="bg-[#3FC979] w-full h-screen flex flex-col items-center justify-center gap-[100px]">
      <div>
        <img className="w-[167px] h-[208px] z-10" src={cover} alt="" />
      </div>
      <h1 className="text-white font-bold text-3xl ">Food Ordering App</h1>

      <button className="text-[#0E0E0E] font-semi-bold w-4/5 h-10 bg-[#F4DCB2] rounded-2xl text-base cursor-pointer">
        Get a meal
      </button>
    </section>
  );
};

export default Splashscreen;
