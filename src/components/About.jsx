'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Swap the image based on scroll progress
          if (progress > 0.5) { // Change at halfway scroll
            document.getElementById("scroll-image").src = "public/img/dollybhai.jpg";
          } else {
            document.getElementById("scroll-image").src = "public/img/nirmalabhen.jpg";
          }
        },
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <p className="font-general text-sm uppercase md:text-[10px] mb-4">
          Suryodaya Presents
        </p>

        <AnimatedTitle
          title="Gr<b>a</b>nd p<b>r</b>ize <br /> wo<b>r</b>th🎉 "
          containerClass="!text-black text-center"
        />

        <p className="mt-6 max-w-md mx-auto text-gray-800 font-bold text-center md:text-[40px] mb-4 leading-tight">
          Exciting prizes worth <span className="text-blue-600">₹15,000</span>  
          and so much more await you! 🚀
        </p>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            id="scroll-image"
            src="public/img/dollybhai.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
