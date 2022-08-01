import { Dialog, Switch, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { generatePashword, sanitize } from "../utils/pashword";

interface IProps {
  notWorking: boolean;
  setNotWorking: (arg: boolean) => void;
  notWorkingForm: {
    noSymbols: boolean;
    noNumbers: boolean;
    min: number;
    max: number;
    additionalMessage: string;
  };
  setNotWorkingForm: (arg: {
    noSymbols: boolean;
    noNumbers: boolean;
    min: number;
    max: number;
    additionalMessage: string;
  }) => void;
  website: string;
  password: string;
  username: string;
  pashword: string;
  setPashword: (arg: string) => void;
}
const NotWorkingModal = ({
  notWorking,
  setNotWorking,
  notWorkingForm,
  setNotWorkingForm,
  website,
  password,
  username,
  pashword,
  setPashword,
}: IProps) => {
  const [newPashword, setNewPashword] = useState(pashword);

  useEffect(() => {
    // If custom pashword length
    let pashedPassword = "";
    if (notWorkingForm.max <= 20 && notWorkingForm.max >= 5) {
      // Generate new pashword
      let toHash = {
        website,
        username,
        password,
      };
      pashedPassword = generatePashword(
        JSON.stringify(toHash),
        notWorkingForm.max,
        website,
        username
      );
      setNewPashword(pashedPassword);
    } else {
      setNewPashword(pashword);
    }

    let sanitizedPashword =
      pashedPassword.length === 0 ? pashword : pashedPassword;

    if (
      notWorkingForm.noNumbers === false &&
      notWorkingForm.noSymbols === true
    ) {
      sanitizedPashword = sanitize(sanitizedPashword, true, false);
    } else if (
      notWorkingForm.noNumbers === true &&
      notWorkingForm.noSymbols === false
    ) {
      sanitizedPashword = sanitize(sanitizedPashword, false, true);
    } else if (
      notWorkingForm.noNumbers === true &&
      notWorkingForm.noSymbols === true
    ) {
      sanitizedPashword = sanitize(sanitizedPashword, true, true);
    }
    setNewPashword(sanitizedPashword);
  }, [notWorkingForm.max, notWorkingForm.noNumbers, notWorkingForm.noSymbols]);

  return (
    <Transition appear show={notWorking} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setNotWorking(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-900 p-6 text-left align-middle shadow-xl ring-2 ring-slate-600 transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-slate-400"
                >
                  Help make Pashword Better
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-slate-500">
                    If the website does not accept Pashword then that means
                    their security is possibly flawed.
                    <br /> <br /> We can't fix the website but we can make
                    Pashword better for you and others. Please submit the
                    following details so we can update Pashword's algorithm for
                    this website, so you never have to do this ever again.
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-2 text-sm sm:text-base">
                  <p className="text-slate-300">
                    Website:{" "}
                    <span className="mr-2 rounded-full bg-slate-700 px-2 text-slate-400">
                      {website}
                    </span>
                    <AiFillCheckCircle className="inline-block text-lg text-green-400" />
                  </p>
                  <div className="flex flex-row items-center">
                    <p className="text-slate-300 ">No symbols allowed ? </p>
                    <Switch
                      checked={notWorkingForm.noSymbols}
                      onChange={() =>
                        setNotWorkingForm({
                          ...notWorkingForm,
                          noSymbols: !notWorkingForm.noSymbols,
                        })
                      }
                      className="ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      <AiFillCheckCircle
                        className={`animate text-lg ${
                          notWorkingForm.noSymbols
                            ? "text-green-400"
                            : "text-slate-500"
                        }`}
                      />
                      <span className="sr-only">No symbols allowed</span>
                    </Switch>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="text-slate-300">No numbers allowed ? </p>
                    <Switch
                      checked={notWorkingForm.noNumbers}
                      onChange={() =>
                        setNotWorkingForm({
                          ...notWorkingForm,
                          noNumbers: !notWorkingForm.noNumbers,
                        })
                      }
                      className="ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      <AiFillCheckCircle
                        className={`animate text-lg ${
                          notWorkingForm.noNumbers
                            ? "text-green-400"
                            : "text-slate-500"
                        }`}
                      />
                      <span className="sr-only">No symbols allowed</span>
                    </Switch>
                  </div>
                  <div className="flex flex-row flex-wrap items-center text-slate-200">
                    <p className="text-slate-300">Password Length ? </p>
                    <input
                      type="number"
                      placeholder="15"
                      onChange={(e) =>
                        setNotWorkingForm({
                          ...notWorkingForm,
                          max: parseInt(e.target.value),
                        })
                      }
                      value={
                        notWorkingForm.max === -1 ? "" : notWorkingForm.max
                      }
                      className="ml-1 mr-1 inline-block h-5 w-10 rounded-full bg-slate-700 px-2 text-slate-400 outline-none placeholder:text-slate-500"
                    />
                    {notWorkingForm.max > 0 && notWorkingForm.max > 0 && (
                      <AiFillCheckCircle className="inline-block text-lg text-green-400" />
                    )}
                  </div>
                  <div className="">
                    <p className="text-slate-300">
                      Additional Message (if any):
                    </p>
                    <textarea
                      placeholder="Hello Nayam..."
                      className="mt-1 mr-2 block h-20 w-full max-w-sm resize rounded-lg bg-slate-700 px-2 text-slate-400 outline-none placeholder:p-1 placeholder:text-slate-500 xxs:w-1/2"
                      onChange={(e) =>
                        setNotWorkingForm({
                          ...notWorkingForm,
                          additionalMessage: e.target.value,
                        })
                      }
                      value={notWorkingForm.additionalMessage}
                    />
                    {notWorkingForm.additionalMessage.length > 1 && (
                      <AiFillCheckCircle className="inline-block text-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-slate-500">
                    Meanwhile, you can use this Temporary Pashword with the
                    conditions you mentioned:{" "}
                    <span className="select-all rounded-md bg-slate-700 p-0.5 font-semibold text-green-500">
                      {newPashword}
                    </span>
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href={`mailto:nayamamarshe@gmail.com?subject=Pashword Request&body=${JSON.stringify(
                      { website, notWorkingForm }
                    )}`}
                    className="animate shadow:ring-1 inline-flex justify-center rounded-full border border-transparent bg-violet-500 px-4 py-2 text-sm font-medium text-violet-100 hover:shadow-lg hover:shadow-slate-400/30 hover:ring-1 hover:ring-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setNotWorking(false)}
                  >
                    Submit Report
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NotWorkingModal;
