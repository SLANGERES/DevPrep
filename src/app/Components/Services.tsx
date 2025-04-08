'use client'
import { Space_Mono } from "next/font/google";
import { Upload } from "lucide-react";
import { useState } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function Services() {
  const [file, setFile] = useState<File | null>(null);

  async function onSubmit (e: React.FormEvent){
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first!");
      return;
    }
    const data=new FormData();
    data.set('file',file)
    const result=await fetch("api/upload",{
      method:"POST",
      body:data
    })
    console.log(result)
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Divider line with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-16"></div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 flex items-center flex-col">
            <div className="w-full max-w-md relative">
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-red-600/20 blur-3xl top-0 -left-10"></div>
              <img 
                src="/PersonHandOffer.png" 
                alt="Developer interview illustration" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className={`${spaceMono.className} text-center mt-6`}>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text leading-tight">
                Nail Developer Interviews
              </h1>
              <p className="text-xl mt-4 text-gray-300">Level Up Your Tech Career</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className={`${spaceMono.className} lg:w-1/2 flex flex-col items-center`}>
            <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
              <form 
                className="bg-white/10 p-10 rounded-2xl border border-white/20 hover:border-white/30 transition-all flex flex-col items-center justify-center cursor-pointer group"
                onSubmit={onSubmit}
              >
                <Upload size={32} className="text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                
                <label className="cursor-pointer">
                  <input 
                    type="file" 
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <span className="w-[150px] bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 text-sm font-bold rounded-full shadow-lg hover:shadow-red-600/30 transition-all text-center text-white block">
                    Choose File
                  </span>
                </label>

                {file && <p className="mt-2 text-gray-300 text-sm">{file.name}</p>}

                <button 
                  type="submit"
                  className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition-all"
                >
                  Submit
                </button>

                <p className="text-gray-300 mt-6">or drop a file</p>
              </form>
              
              <div className="mt-6 flex flex-col space-y-3">
                <p className="text-gray-400 text-sm">No Resume?</p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-300">Make One Try These:</span>
                  <a href="#" className="text-red-400 hover:text-red-300 underline transition-colors">resume.io</a>
                </div>
                
                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  By uploading a Resume you agree to our <a href="#" className="text-gray-300 hover:text-white underline">Terms of Service</a>. 
                  To learn more about how DevPrep handles your personal data, check our <a href="#" className="text-gray-300 hover:text-white underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
