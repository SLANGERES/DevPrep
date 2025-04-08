import { Space_Mono } from "next/font/google";
import { Bungee_Tint } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const bungeeTint = Bungee_Tint({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee-tint", // Unique variable name
});

export default function Header() {
  return (
    <div className="bg-black h-[80px] flex justify-center">
        <div className={`${spaceMono.className} w-[80%] flex flex-row justify-between items-center text-white px-4`}>
        <div className={`${bungeeTint.className} text-3xl`}>DevPrep</div> 
        <div className="flex flex-row justify-between w-[400px]">
            <button className="hover:text-gray-400">About</button>
            <button className="hover:text-gray-400">Preparation</button>
            <button className="hover:text-gray-400">Progress</button>
        </div>
        <div className="text-lg cursor-pointer border pt-2 pb-2 pr-4 pl-4 hover:bg-amber-700">Signup</div>
        </div>

    </div>

  );
}
