import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <div className="bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[20px] w-full lg:w-[70%] md:w-[90%] flex items-center justify-between py-4 mt-4 shadow-sm shadow-[#1a1a1a]">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px] w-[30px] ml-4" />
        <h1 className="font-titles font-bold text-white text-2xl ml-2">
          <span className="text-[#7FC786]">The</span>
          Chama
          <span className="text-[#7FC786]">DAO</span>
        </h1>
      </div>
      <div className="items-center gap-2 hidden md:flex">
        <div>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            About
          </button>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            Contact Us
          </button>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            Invest
          </button>
        </div>
        <button className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
          Sign Up
        </button>
      </div>
      <div className="flex md:hidden">
        <button
          className="text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          onClick={toggleNavbar}
        >
          <IconMenuDeep size={24} />
        </button>
      </div>
      <div
        className={`backdrop-blur-lg h-screen w-full md:hidden flex flex-col fixed top-0 left-0 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-1 mx-1">
          <button className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-[30px] w-[30px] ml-4"
              />
              <h1 className="font-titles font-bold text-white text-2xl ml-2">
                <span className="text-[#7FC786]">The</span>
                Chama
                <span className="text-[#7FC786]">DAO</span>
              </h1>
            </div>
          </button>
          <div
            className="flex items-center justify-center md:hidden mt-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconX size={34} color="#7FC786" />
          </div>
        </div>
        <ul className="flex flex-col h-full items-center gap-12 mt-20 font-titles">
          <button className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer">
            About
          </button>
          <button className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer">
            Contact Us
          </button>
          <button className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer">
            Invest
          </button>
        </ul>
        <div className="flex items-center justify-center my-8">
          <button className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
