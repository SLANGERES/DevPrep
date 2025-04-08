import { Space_Mono } from "next/font/google";
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
import HowItWorks from "./HowItWork";

export default function Promotion() {
  return (
   <div className="bg-black py-16 relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        
        {/* Divider */}
        <div className="flex justify-center">
            <div className="w-[90%] h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
        </div>
        
        {/* Title */}
        <div className="flex justify-center items-center my-16">
            <div className="flex flex-col items-center">
                <div className="flex items-center mb-4">
                    <div className="h-1 w-8 bg-red-500 mr-3"></div>
                    <span className="text-gray-400 text-sm tracking-widest">PROCESS</span>
                    <div className="h-1 w-8 bg-red-500 ml-3"></div>
                </div>
                <h2 className={`${spaceMono.className} text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}>
                    HOW IT WORKS<span className="text-red-500">?</span>
                </h2>
            </div>
        </div>
        
        <HowItWorks/>
   </div>
  )
}
