import React from "react";

const handlePlayVideo = () => {
  const video = document.getElementById("testimonial-video");
  const playButton = document.getElementById("play-button-overlay");

  if (video) {
    if (video.paused) {
      video.play();
      if (playButton) playButton.style.display = "none";
      video.setAttribute("controls", "true");
    } else {
      video.pause();
      if (playButton) playButton.style.display = "flex";
      video.removeAttribute("controls");
    }
  }
};

const handleVideoEnded = () => {
  const video = document.getElementById("testimonial-video");
  const playButton = document.getElementById("play-button-overlay");

  if (playButton) playButton.style.display = "flex";
  if (video) video.removeAttribute("controls");
};

export default function Integrations() {
  const Stat = [
    {
      num: "60M+",
      title: "Total orders completed",
    },
    {
      num: "209",
      title: "Countries and territories",
    },
    {
      num: "141",
      title: "Facilities",
    },
  ];

  return (
    <>
      <div className="bg-[#f5f5f0] font-bold font-sans">
        <div className="pt-20">
          <h1 className="text-5xl text-center font-bold text-black ">
            Real people use Printify
          </h1>
          <div className="m-8 ml-4 mt-15 p-2 lg:flex justify-evenly">
            <div className="w-full lg:w-250 relative flex items-center justify-center">
              <video
                id="testimonial-video"
                src="https://printify.com/pfh/assets/mp4/christina-testimonial.mp4"
                playsInline
                onEnded={handleVideoEnded}
                className=" h-200 cursor-pointer"
                onClick={handlePlayVideo}
              />

              {/* Play Button */}
              <button
                id="play-button-overlay"
                onClick={handlePlayVideo}
                aria-label="Play video"
                className="absolute w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-lg focus:outline-none cursor-pointer"
              >
                <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>

            <div className="w-full lg:w- pl-20 ">
              <p className="text-4xl p-8 mt-10">
                "I’ve been using Printify for about two years, it allowed me
                to quit my job within 9 months. Now I’m in Bali being a
                digital nomad and working on my store"
              </p>
              <h1 className="pl-9 text-2xl mb-4">
                Christina Umerez, Toronto
              </h1>
              <a href="#" className="underline ml-9 ">
                Read more real life story of success
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#2e2e1e] text-[#f5f5f0] lg:flex m-8 font-sans">
          <div className="text-left p-8">
            <h1 className="text-5xl mt-2">
              Connect and <br />
              start selling
            </h1>
            <p className="mt-6 mb-6">
              Printify integrates with all the top selling <br />
              platforms in the world.
            </p>
            <a href="#" className="underline">
              See all integrations
            </a>
          </div>
          <img src="shops.svg" alt="" className="lg:ml-50" />
        </div>

        <div className="font-sans">
          <h1 className="text-center text-2xl m-10">As seen in:</h1>
          <div className="lg:flex gap-8 justify-evenly max-w-4xl mx-auto pb-20">
            <img src="https://printify.com/pfh/assets/publishers/business-insider.svg" alt="" className="w-25 h-"/>
            <img src="https://printify.com/pfh/assets/publishers/daily-mail.webp" alt="" className="w-40 h-15"/>
            <p className="text-2xl text-[#2e2e1e] mt-2">Entrepreneur</p>
            <img src="https://printify.com/pfh/assets/publishers/cnbc.webp" alt="" className="w-15 h-15" />
            <img src="https://printify.com/pfh/assets/publishers/forbes.webp" alt="" className="w-20" />
          </div>
        </div>
      </div>

      <div className="bg-[#5fd0f4] pt-25 font-sans">
        <h1 className="text-5xl text-center font-bold">
          Printify is where <br /> your customers are:
        </h1>
        <p className="text-center mt-3 font-bold">
          Our partner network delivers around the world, fast.
        </p>
        <div className="lg:flex justify-evenly mt-10 mb-10 p-10">
          <div className="mt-">
            {Stat.map((item, idx) => (
              <div
                key={idx}
                className=" gap-8 justify-start"
              >
                <hr className=""/>
                <div className="text-6xl mb-2 font-bold">{item.num}</div>
                <div>
                  <h2 className="text-md font-bold text-slate-900 mb-8">
                    {item.title}
                  </h2>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <img src="map.svg" alt="" className="ml-18" />
        </div>
      </div>
    </>
  );
}