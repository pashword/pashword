import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

const FAQ = () => {
  return (
    <div className="w-full px-4 pb-20" id="faq">
      <h1 className="mb-2 text-center text-2xl font-medium text-slate-100">
        FAQ
      </h1>
      <div className="mx-auto w-full max-w-md rounded-2xl p-2 ring-2 ring-slate-700">
        <Disclosure as="div" className="mb-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>Why should I use Pashword?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                3 Reasons:
                <br /> 1. The passwords most people use, are extremely weak and
                easy to hack in case of a data breach.
                <br />
                <br /> 2. Most people keep the same password for all their
                accounts. This is a dangerous practice, in case your account
                ever gets hacked, consider all your other accounts compromised.
                <br />
                <br /> 3. If you keep different passwords for different
                accounts, you're more than likely to forget them.
                <br />
                <br />
                <b>Pashword solves every single problem listed above,</b>{" "}
                without increasing any complexity in the password generation
                process.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>Why did you make this?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Me dumb. Me forgot bank account password. Bank account blocked.
                Me cry.
                <br />
                <br /> and so, to never forget my passwords ever again and let
                my computer do the hardwork for me, I created Pashword 😉
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>What happens when I enter the details?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Once you enter the details like the website, the username and
                secret key, Pashword's algorithm combines your details, encrypts
                them and then encodes them into a cryptographically strong
                password.
                <br />
                <br /> All of this takes place on your computer and no remote
                servers are contacted during this process. Your data stays on
                your computer. You can take a look at the source code on{" "}
                <a
                  href="https://github.com/NayamAmarshe/pashword"
                  className="font-medium text-sky-500"
                >
                  Github
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>
                  Will Pashword always generate different password for different
                  websites?
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Yes. Pashword uses your input to generate a strong password.
                This pashword will always be the same as long as the input you
                provide remains the same but when you change even one variable,
                like the website or username, the Pashword will change, hence
                giving all your accounts a unique password.
                <br />
                <br /> But that doesn't mean you can't generate a different
                password for the same account later on. All you need to do is
                change your secret key to get another totally unique Pashword
                for the same website and username.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>{" "}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>What's the 'Pashword Length' option for?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Some websites with horrible security practices don't let you set
                passwords of certain lengths. They'd ask you to only set a
                password less than 12 characters long, which is kinda absurd but
                it is what it is.
                <br />
                <br />
                To combat this problem, Pashword provides you with a Pashword
                Length option. The small length is 11 characters. Medium is 15
                characters and Large is 20 characters. You should always use the
                recommended Large length, except for when not possible.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>What does a 'Pashword' even mean?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Pashword means a hashed password.
                <br /> Password + Hash = Pashword.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>
                  Why does my screen freeze for a sec when I press the button?
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Pashword uses cryptographically secure hashing algorithms called
                Scrypt and SHA3-512. These algorithms are made to avoid
                bruteforce attacks so even hackers with world-class resources
                are going to have a hard time cracking your passwords.
                <br />
                <br />
                So when you press the 'Get Pashword' button, your screen will
                freeze because the calculations being done by your device are
                very complex, hence it takes some time for the device to
                generate the pashword. I know it can be annoying, but it's a
                security measure, better freeze than hacked 😉
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>What if the website doesn't accept my password?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Ideally you'd want to let the website owners know their security
                is as good as a pasta. Did that make sense? No. Just like their
                password requirements.
                <br />
                <br />
                But fret not, when your password doesn't work, click the 'Not
                Working?' button underneath the green Pashword button. Here you
                can mention the website requirements and get a modified pashword
                in realtime. You can mention a max length and whether the
                password requirement allows symbols or numbers.
                <br />
                <br />
                Just as easily, you can submit the requirements of the website
                to me so I can build a database of website requirements. Once I
                do that, the next time you generate your pashword, Pashword will
                automatically detect the website and apply the requirements
                accordingly. No more headaches 🥳
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQ;
