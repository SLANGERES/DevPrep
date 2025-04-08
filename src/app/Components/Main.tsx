import { Space_Mono } from "next/font/google";
import { TrendingUp } from "lucide-react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function Main() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 relative overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Left side content */}
        <div className="lg:w-1/2 z-10 mb-16 lg:mb-0">
          <div className={`${spaceMono.className} max-w-xl`}>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-red-500 mr-4"></div>
              <span className="text-gray-400 tracking-wider text-sm">CAREER ACCELERATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                The shortest distance between you and your dream tech role.
              </span>
            </h1>
            
            <div className="flex items-center space-x-4 mb-10">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-300">90% success rate</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-300">14-day program</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-red-600/30 transition-all flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Start Your Journey
            </button>
          </div>
        </div>
        
        {/* Right side graph */}
        <div className="lg:w-1/2 flex justify-center items-center z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-xl rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl shadow-xl">
              <img 
                className="w-full max-w-xl h-auto" 
                src="/Graph_data.png" 
                alt="Career Growth Analytics" 
              />
              <div className="absolute -bottom-3 -right-3 bg-red-500 text-white text-xs px-4 py-2 rounded-full">
                Real-time data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}