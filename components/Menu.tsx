import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="fixed top-0 right-0 z-20 h-screen w-screen bg-slate-900/50 backdrop-blur-lg">
      <div className="absolute top-0 right-0 h-screen w-96 bg-slate-900">
        <HiOutlineMenuAlt3 className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50" />
        <h3 className="p-2 text-3xl font-bold text-slate-50">Pashword</h3>
      </div>
    </div>
  );
};

export default Menu;
