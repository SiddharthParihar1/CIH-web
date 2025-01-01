import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={videoRef}
          src="videos/Untitled design.mp4" // Replace with your video file
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className="absolute top-0 left-0 z-40 w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="hero-title text-blue-75 text-4xl md:text-6xl font-bold">
            Central India <span className="text-orange-500">Hackathon</span>
          </h1>
          <p className="tagline text-blue-100 mt-4 max-w-2xl">
            Poha, Samosa, and Code - Nagpur's Hackathon is ready to explode!
          </p>
          <div className="event-details mt-5 text-blue-100">
            <p className="date">February 6 | 8:00 PM</p>
            <p className="venue">Suryodaya College, Nagpur</p>
          </div>
          <button
            className="cta-button bg-yellow-300 px-6 py-3 mt-6 rounded-full text-black font-semibold hover:bg-yellow-400"
            onClick={() => alert("Register Now clicked!")}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
