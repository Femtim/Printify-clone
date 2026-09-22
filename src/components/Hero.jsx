import React from "react";

const Hero = () => {
  return (
    <section className="py-10 md:pb-24 max-w- mx-auto px-6  gap-12 items-center justify-center justify-items-center  text-center font-sans">
      <div className=" text-center lg:col-span-7 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
          CREATE AND SELL
          <br />
          <span className="text-slate-900">CUSTOM PRODUCTS</span>
        </h1>

        <ul className="gap-4 text-slate-700 justify-center  flex text-base font-medium">
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#39b54a] flex items-center justify-center font-bold text-xs">
              ✓
            </span>
            <span>100% Free to use</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#39b54a] flex items-center justify-center font-bold text-xs">
              ✓
            </span>
            <span>1300+ Products</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#39b54a] flex items-center justify-center font-bold text-xs">
              ✓
            </span>
            <span>Global delivery</span>
          </li>
        </ul>

        <div className="pt-2 flex flex-col  items-stretch sm:items-center gap-4">
          <button className="px-8 py-3.5 bg-[#aeff6e] hover:bg-[#9bf854] text-black font-bold rounded text-base shadow-lg shadow-emerald-500/25 transition-all text-center">
            Get started for free
          </button>
          <div className="text-black">No credit card required</div>
        </div>
      </div>

      <div className="flex justify-center">
        <video
          src="hero.mp4"
          alt="Hero Image"
          autoPlay
          muted
          loop
          className="w-full max-w-[980px]"
        />
      </div>
      <div className="flex gap-2">
        <p className="text- font-medium">
          Trusted by 10M+ sellers
        </p>
        <p>⭐⭐⭐⭐⭐  4.8</p>
        <p> on</p>
        <img src="https://printify.com/pfh/assets/hero/shopify.svg" alt="" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
