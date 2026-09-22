import React from "react";

const pillars = [
  {
    icon: "1",
    title: "Select your product",
    desc: "Choose from over 1300 top-quality products, from custom clothing to tech accessories",
    video: "/pillar1.mp4",
  },
  {
    icon: "2",
    title: "Add your design",
    desc: "Use our free design tool to fully customize your print-on-demand products",
    video: "/pillar2.mp4",
  },
  {
    icon: "3",
    title: "Start selling",
    desc: "You set your profit margin, we take care of production and delivery",
    video: "/pillar3.mp4",
  },
];

let currentIndex = 0;

// Updates active video and resets all progress bars
const updateActiveStep = (nextIndex) => {
  currentIndex = nextIndex;
  const videoElement = document.getElementById("pillars-video-player");

  // Reset all step progress lines
  pillars.forEach((_, idx) => {
    const bar = document.getElementById(`pillar-progress-${idx}`);
    if (bar) {
      bar.style.width = idx < currentIndex ? "100%" : "0%";
    }
  });

  if (videoElement) {
    videoElement.src = pillars[currentIndex].video;
    videoElement.currentTime = 0;
    videoElement.play();
  }
};

// Tracks real-time video playback percentage
const handleTimeUpdate = (event) => {
  const video = event.target;
  if (!video.duration) return;

  const percentage = (video.currentTime / video.duration) * 100;
  const activeBar = document.getElementById(`pillar-progress-${currentIndex}`);

  if (activeBar) {
    activeBar.style.width = `${percentage}%`;
  }
};

// Advance to next video when current video completes
const handleVideoEnded = () => {
  const activeBar = document.getElementById(`pillar-progress-${currentIndex}`);
  if (activeBar) activeBar.style.width = "100%";

  const next = (currentIndex + 1) % pillars.length;
  updateActiveStep(next);
};

// Jump to step on click
const handleStepClick = (index) => {
  updateActiveStep(index);
};

const Pillars = () => {
  return (
    <section className="py-10 px-10 lg:flex items-center justify-between bg-[#f5f5f0] font-sans">
      {/* Left */}
      <div className="max-w-md px-3 grid gap-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Start with $0 investment
        </h1>

        <div className="space-y-3">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleStepClick(idx)}
              className="p-4 cursor-pointer rounded-lg hover:bg-black/[0.03] transition-colors"
            >
              <div className="flex gap-4 items-start">
                <div className=" rounded-full text-[#2e2e1e] text-2xl items-center justify-center font-bold ">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Border Base Track */}
              <div className="w-full bg-slate-300 h-[2px] mt-4 rounded-full overflow-hidden">
                {/* Active Dynamic Progress Line */}
                <div
                  id={`pillar-progress-${idx}`}
                  className="h-full bg-[#2e2e1e] transition-[width] duration-100 ease-linear"
                  style={{ width: idx === 0 ? "0%" : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <button className="bg-[#2e2e1e] hover:bg-black py-3 px-8 text-lg font-bold text-white text-center rounded transition-colors block">
            Start designing
          </button>
          <h3 className="underline font-semibold text-sm cursor-pointer text-slate-800">
            Learn more
          </h3>
        </div>
      </div>

      {/* Right */}
      <div className="mt-8 lg:mt-0 max-w-xl w-full overflow-hidden shadow-lg bg-black">
        <video
          id="pillars-video-player"
          src={pillars[0].video}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Pillars;