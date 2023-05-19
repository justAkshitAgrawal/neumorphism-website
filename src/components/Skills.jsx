import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

function Skills() {
  return (
    <div className="z-30 flex items-center justify-center">
      <div className="flex items-center px-5 py-5 sm:px-10 sm:space-x-5 nm-inset-gray-900 rounded-xl mt-14">
        <h1 className="hidden sm:block">
          Tech Stack <span className="ml-2">|</span>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full nm-flat-gray-900">
            <FaReact className="w-5 h-5 text-[#5ed3f3] rounded cursor-pointer" />
          </div>
          <div className="p-2 rounded-full nm-flat-gray-900">
            <SiJavascript className="w-5 h-5 text-yellow-300 rounded cursor-pointer" />
          </div>
          <div className="p-2 rounded-full nm-flat-gray-900">
            <SiTailwindcss className="w-5 h-5 text-[#4bbddd] rounded" />
          </div>
          <div className="p-2 rounded-full nm-flat-gray-900">
            <FaJava className="w-5 h-5 text-orange-500 rounded" />
          </div>
          <div className="p-2 rounded-full nm-flat-gray-900">
            <TbBrandReactNative className="w-5 h-5 text-[#4bbddd] rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
