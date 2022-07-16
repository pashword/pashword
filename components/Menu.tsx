import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";

interface IProps {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const Menu = ({ showMenu, setShowMenu }: IProps) => {
  return (
    <div
      className={`animate absolute top-0 right-0 z-30 h-screen w-full overflow-auto bg-black/50 p-2 backdrop-blur-lg xs:w-96 xs:p-10 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <AiOutlineCloseCircle
        className="animate absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50/80 hover:text-slate-50"
        onClick={() => {
          setShowMenu(false);
        }}
      />
      <div className="flex h-full flex-col gap-5">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Pashword</h1>
          <h4 className="text-sm text-slate-400">
            Made by <span className="font-bold">Nayam Amarshe</span>
          </h4>
        </div>

        <div className="flex h-full flex-col justify-between">
          {/* OTHER PROJECTS */}
          <div className="flex h-full flex-col gap-2">
            <p className="font-semibold text-slate-200">
              Checkout my other projects:
            </p>
            <div className="flex max-h-max flex-col gap-5 overflow-auto">
              <a href="https://maglit.me/" target="_blank" rel="noreferrer">
                <div className="cursor-pointer rounded-lg bg-slate-900">
                  <img
                    src="/maglit.png"
                    alt="MagLit"
                    className="h-42 w-full rounded-t-lg object-cover"
                  />
                  <p className="p-2 text-sm text-slate-300 xs:text-base">
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
                  <p className="p-2 text-sm text-slate-300 xs:text-base">
                    <b>Please CLI</b> - Minimalistic New Tab Page for your
                    Terminal
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex flex-col items-center">
            <div className="text-center text-sm xs:text-base">
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
    </div>
  );
};

export default Menu;

{
  /*  */
}
