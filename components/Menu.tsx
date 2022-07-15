import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React from "react";

interface IProps {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const Menu = ({ showMenu, setShowMenu }: IProps) => {
  return (
    <div
      className={`animate fixed right-0 z-30 h-screen w-full bg-black/50 p-10 backdrop-blur-lg md:w-96 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <HiOutlineMenuAlt3
        className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50"
        onClick={() => {
          setShowMenu(false);
        }}
      />
      <h1 className="text-2xl font-bold text-slate-100">Pashword</h1>
      <h4 className="text-sm text-slate-400">
        Made by <span className="font-bold">Nayam Amarshe</span>
      </h4>
      <div className="flex h-full flex-col">
        <p className="font-semibold text-slate-200">
          Checkout my other projects:
        </p>
        {/* PROJECTS */}
        <div className="flex flex-col gap-5 overflow-auto rounded-lg">
          <a href="https://maglit.me/" target="_blank" rel="noreferrer">
            <div className="mt-5 cursor-pointer rounded-lg bg-slate-900">
              <img
                src="/maglit.png"
                alt="MagLit"
                className="h-42 w-full rounded-t-lg object-cover"
              />
              <p className="p-2 text-slate-300">
                <b>MagLit</b> - Encrypted Link Shortener with Password
                Protection
              </p>
            </div>
          </a>
          <a
            href="https://github.com/NayamAmarshe/please"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer rounded-lg bg-slate-900">
              <img
                src="/please.jpg"
                alt="Please CLI"
                className="h-42 w-full rounded-t-lg object-cover"
              />
              <p className="p-2 text-slate-300">
                <b>Please CLI</b> - Minimalistic New Tab Page for your Terminal
              </p>
            </div>
          </a>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-slate-400">
              Copyright © 2022 <b>Pashword</b>
            </p>
            <p className="text-slate-400">
              Made by{" "}
              <a
                href="https://github.com/NayamAmarshe"
                className="cursor-pointer font-bold"
              >
                Nayam Amarshe
              </a>
              <br />
              with ⌨ and 🖱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
