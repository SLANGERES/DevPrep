'use client'
import { useEffect, useRef } from "react";
import { Space_Mono } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Cpu, Target, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function HowItWorks() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".scroll-item");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen bg-black flex items-center overflow-hidden relative">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-2 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r  origin-left" style={{ width: "25%" }}></div>
      </div>
      <div ref={scrollRef} className="flex w-[400vw]">
        {/* Step 1 */}
        <div className="scroll-item w-screen flex flex-col items-center justify-center text-white px-8">
          <div className="step-number absolute top-5 right-5 text-7xl font-bold text-red-500/20">01</div>
          <div className="icon-container relative mb-8">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl"></div>
            <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-xl">
              <img className="w-24 h-24" src="/Resume.svg" alt="Resume" />
            </div>
          </div>
          <div className="text-container text-center max-w-lg">
            <h3 className={`${spaceMono.className} text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
              Upload Your Latest Resume
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Submit your current resume and let our system analyze your professional profile to identify opportunities for improvement.
            </p>
            
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="scroll-item w-screen flex flex-col items-center justify-center text-white px-8">
          <div className="step-number absolute top-5 right-5 text-7xl font-bold text-red-500/20">02</div>
          <div className="icon-container relative mb-8">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-xl">
              <img className="w-24 h-24" src="/machineLearning.svg" alt="AI Processing" />
            </div>
          </div>
          <div className="text-container text-center max-w-lg">
            <h3 className={`${spaceMono.className} text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
              AI Analyzes Your Resume
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Our advanced AI technology evaluates your skills, experience, and presentation to generate personalized insights.
            </p>
            <div className="mt-8 flex space-x-4">
              <div className="px-4 py-2 bg-gray-800 rounded-full text-sm flex items-center">
                <Cpu size={14} className="mr-2 text-blue-400" />
                <span>ML Analysis</span>
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-full text-sm flex items-center">
                <span>98% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="scroll-item w-screen flex flex-col items-center justify-center text-white px-8">
          <div className="step-number absolute top-5 right-5 text-7xl font-bold text-red-500/20">03</div>
          <div className="icon-container relative mb-8">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-xl">
              <img className="w-24 h-24" src="/file.svg" alt="Job Match" />
            </div>
          </div>
          <div className="text-container text-center max-w-lg">
            <h3 className={`${spaceMono.className} text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
              Find Your Weakness and Improve
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Receive detailed feedback on areas needing improvement and get personalized recommendations to enhance your profile.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="px-4 py-3 bg-gray-800 rounded-xl text-sm flex items-center">
                <Target size={14} className="mr-2 text-purple-400" />
                <span>Skill Gaps</span>
              </div>
              <div className="px-4 py-3 bg-gray-800 rounded-xl text-sm flex items-center">
                <Target size={14} className="mr-2 text-purple-400" />
                <span>Formatting</span>
              </div>
              <div className="px-4 py-3 bg-gray-800 rounded-xl text-sm flex items-center">
                <Target size={14} className="mr-2 text-purple-400" />
                <span>Keywords</span>
              </div>
              <div className="px-4 py-3 bg-gray-800 rounded-xl text-sm flex items-center">
                <Target size={14} className="mr-2 text-purple-400" />
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="scroll-item w-screen flex flex-col items-center justify-center text-white px-8">
          <div className="step-number absolute top-5 right-5 text-7xl font-bold text-red-500/20">04</div>
          <div className="icon-container relative mb-8">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl"></div>
            <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-xl">
              <img className="w-24 h-24" src="/Sucess.svg" alt="Success" />
            </div>
          </div>
          <div className="text-container text-center max-w-lg">
            <h3 className={`${spaceMono.className} text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
              Get Hired Successfully
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              With your optimized profile and enhanced skills, secure your dream tech role and accelerate your career growth.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white font-bold flex items-center shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer">
                <CheckCircle size={18} className="mr-2" />
                <span>Start Your Journey Today</span>
              </div>
              <div className="mt-4 text-sm text-gray-500">Join 10,000+ successful developers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}

    </div>
  );
}