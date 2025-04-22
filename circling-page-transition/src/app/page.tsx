'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


export default function Home() {
  const container = useRef(null);
  const tl = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
          scrollTrigger: {
            trigger: "#page_first #page_second",
            // trigger : `#${box.id}`,
            start: 'top top',
            end: 'bottom+=2000 bottom',
            pin: true,
            scrub: 1,
            markers: true,
          }
        }).fromTo(`#page_first`, { x: "-100%" }, { x: "0%", duration: 3 }).fromTo(`#page_second`, { x: "200%" }, { x: "100%", duration: 3 }).fro;



  },
    { scope: container })

  return (
    <section id="section" className="
    " ref={container}>
      <div id="page_first" className="w-full h-full flex relative">
        <div id="first" className="w-[20vw] panel-width bg-lime-300/70"></div>
        <div id="second" className="w-[20vw] panel-width bg-lime-300/60"></div>
        <div id="third" className="w-[20vw] panel-width bg-lime-300/50"></div>
      </div>
      <div id="page_second" className="w-full h-full flex relative">
        <div id="first" className="w-[20vw] panel-width bg-lime-300/70"></div>
        <div id="second" className="w-[20vw] panel-width bg-lime-300/60"></div>
        <div id="third" className="w-[20vw] panel-width bg-lime-300/50"></div>
      </div>
    </section>
  );
}
