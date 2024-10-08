import React from "react";

const Hero = () => {
  return (
    <>
      <main>
        <div
          className=" bg-[#c7c3e4] w-full h-[90vh] flex flex-col
        justify-center items-center"
        >
          <h1
            className=" w-full md:w-[550px] uppercase text-center text-2xl p-8 
          sm:p-2 sm:text-3xl md:text-5xl font-bold select-none mix-blend-exclusion text-white"
          >
            LUMINA - YOUR TRAVELLING PARTNER
          </h1>
          <p
            className="mix-blend-exclusion md:w-[550px]
          text-white text-center tracking-widest"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            blanditiis et sit tenetur nostrum est accusamus fugit laboriosam
            maiores natus provident deleniti, error a, hic aliquam.
          </p>
          <button className="bg-blue-500 text-white py-1 px-5 rounded-full mt-7 hover:bg-white hover:text-black transition-200">
            Join Now
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
