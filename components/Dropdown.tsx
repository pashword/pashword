import { Listbox, Transition } from "@headlessui/react";
import PASSWORD_LENGTH from "../constants/passwordLength";
import { HiOutlineSelector } from "react-icons/hi";
import React from "react";

interface IProps {
  passwordLength: number;
  setPasswordLength: (arg: number) => void;
}

const Dropdown = ({ passwordLength, setPasswordLength }: IProps) => {
  return (
    <Listbox value={0} onChange={setPasswordLength}>
      <Listbox.Button className="input-text flex items-center justify-between px-5">
        {passwordLength === PASSWORD_LENGTH.SMALL && "Small"}
        {passwordLength === PASSWORD_LENGTH.MEDIUM && "Medium"}
        {passwordLength === PASSWORD_LENGTH.LARGE && "Large (Recommended)"}
        <HiOutlineSelector className="text-xl" />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full z-20 mt-1 flex w-4/5 flex-col rounded-xl bg-slate-700/90 text-slate-100 shadow-lg outline-none ring-1 ring-slate-200 backdrop-blur-xl">
        <Listbox.Option key={0} value={PASSWORD_LENGTH.SMALL}>
          {({ active }) => (
            <button
              type="button"
              className={`${active && "bg-slate-600"} mt-2 w-full p-1`}
            >
              Small
            </button>
          )}
        </Listbox.Option>
        <Listbox.Option key={1} value={PASSWORD_LENGTH.MEDIUM}>
          {({ active }) => (
            <button
              type="button"
              className={`${active && "bg-slate-600"} w-full p-1`}
            >
              Medium
            </button>
          )}
        </Listbox.Option>
        <Listbox.Option key={2} value={PASSWORD_LENGTH.LARGE}>
          {({ active }) => (
            <button
              type="button"
              className={`${active && "bg-slate-600"} mb-2 w-full p-1`}
            >
              Large (Recommended)
            </button>
          )}
        </Listbox.Option>
      </Listbox.Options>
    </Listbox>
  );
};

export default Dropdown;
