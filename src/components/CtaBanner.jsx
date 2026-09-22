import React from "react";

const CtaBanner = () =>{
    const Todo = [
      {
        image: "todo1.webp",
        name: "POD Rockstars",
        desc: "34k in our community of sellers",
      },
      {
        image: "todo2.webp",
        name: "Printify Youtube",
        desc: "100k subscribers on the channel to learn POD",
      },
      {
        image: "todo3.webp",
        name: "Amplified",
        desc: "50k attendees at our online and in-person events",
      },
      {
        image: "todo4.webp",
        name: "Printing Profits",
        desc: "100k downloads on POD^s best podcast",
      },
      {
        image: "todo5.webp",
        name: "Mentorship Program",
        desc: "100s of profitable store owners have taken our free and paid courses",
      },
      {
        image: "todo6.webp",
        name: "Printify Learning",
        desc: "Over 600 different articles and guides to creating your business",
      },
    ];
    return (
      <>
        <div className="font-sans ">
            <div className="text-5xl text-center pt-8 font-bold">Everything you need to start <br /> your own online business</div>
          <div className="flex-1 grid lg:grid-cols-3 p-8 gap-8 ">
            {Todo.map((item, idx) => (
              <div key={idx} className=" mt-15 pb-30">
                <img src={item.image} alt="" className="" />
                <h1 className="text- mt-4">{item.name}</h1>
                <p className="text-3xl mt-4 font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#aeff6e]  font-sans lg:flex justify-evenly">
           <div className="py-25">
             <h1 className="text-6xl font-bold">Get started <br /> today 100% free</h1>
            <button className="bg-[#2e2e1e] p-2 w-[30%] text-md text-white text-center rounded mt-15">Get Started</button>
           </div>
           <img src="getstarted.png" alt="" className="w-100 h-100 justify-self-end"  />
        </div>
      </>
    );
  }

  export default  CtaBanner;