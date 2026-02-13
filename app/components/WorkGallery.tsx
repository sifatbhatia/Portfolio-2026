"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'J. Worra',
    category: 'Art Direction',
    image: '/previews/j-worra.png',
    offset: "mt-0",
    width: "w-full md:w-[60%]",
  },
  {
    title: "Sif's Utilities",
    category: 'Performance Utilities',
    image: '/previews/sifs-utilities.png',
    offset: "md:mt-[-10rem] md:ml-auto",
    width: "w-full md:w-[50%]",
  },
  {
    title: 'L’ Affaire Musicale',
    category: 'Identity Design',
    image: '/previews/l-affaire-musicale.png',
    offset: "md:mt-[-5rem]",
    width: "w-full md:w-[70%]",
  },
  {
    title: 'The Void',
    category: 'Digital Art',
    image: '/previews/the-void.png',
    offset: "md:mt-[-15rem] md:ml-[10%]",
    width: "w-full md:w-[55%]",
  },
];

export default function WorkGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal images on scroll
      const reveals = gsap.utils.toArray(".reveal-image");
      reveals.forEach((reveal: any) => {
        gsap.fromTo(
          reveal,
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: reveal,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Lighting Protocol for text
      const texts = gsap.utils.toArray(".light-text");
      texts.forEach((text: any) => {
        gsap.fromTo(
          text,
          { opacity: 0.1, color: "#000000" },
          {
            opacity: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="selected-works"
      ref={containerRef}
      className="relative z-10 bg-white py-32 px-6 md:px-[6%] overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-32 md:space-y-0">
        <div className="mb-20 md:mb-32">
          <h2 className="light-text font-inter text-3xl md:text-5xl font-normal tracking-tight text-black">
            Selected Works
          </h2>
        </div>

        <div className="relative">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`group relative z-10 mb-20 md:mb-40 transition-all duration-700 ${project.offset} ${project.width}`}
            >
              <Link href="/projects" className="block cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] reveal-image bg-black/5">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-[10px] opacity-20 uppercase tracking-widest">[ NULL_DATA ]</span>
                    </div>
                  )}
                  
                  {/* Hover Inversion Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 mix-blend-difference transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <p className="light-text font-inter text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-2 text-black">
                      {project.category}
                    </p>
                    <h3 className="light-text font-inter text-3xl md:text-5xl tracking-tighter text-black uppercase">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-20">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-black text-white hover:bg-[#B31B1B] transition-colors duration-500 rounded-full overflow-hidden"
          >
            <span className="relative z-10 text-sm font-bold uppercase tracking-[0.2em]">View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
