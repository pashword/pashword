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
              <Disclosure as="div" className="mb-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="faq-button">
                      <span>1. What does a 'Pashword' even mean?</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="faq-text">
                      Pashword means a hashed password. Pashword uses the
                      concept of hashing to calculate a unique password for your
                      account.
                      <br /> Password + Hash = Pashword.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure.Button className="faq-button">
                <span>2. Why should I use Pashword?</span>
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
                <span>3. Why did you make this?</span>
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
                <span>4. What happens when I enter the details?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Once you enter the details like the website, the username and
                secret key, Pashword's algorithm combines your details, hashes
                (one-way-encryption) them and then encodes them into a
                cryptographically strong password.
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
                <span>5. Will Pashword always generate the same password?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Pashword uses your input to calculate a strong password. This
                pashword will always be the same as long as the input you
                provide remains the same but when you change even one variable,
                like the website or username, the pashword will change, hence
                giving all your accounts a unique password.
                <br />
                <br /> But that doesn't mean you can't generate a different
                password for the same account later on. All you need to do is
                change your secret key or add a number in front of your username
                to get another totally unique Pashword for the same account.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>{" "}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>6. What's the 'Pashword Length' option for?</span>
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
                <span>
                  7. Why does my screen freeze for a sec when I press the
                  button?
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
                <span>8. What if the website doesn't accept my password?</span>
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
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>
                  9. What if my account gets breached and hashes get leaked?
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                Since Pashword generates the same password for the same input,
                it poses a problem of changing passwords in rare cases like data
                breach.
                <br />
                <br />
                I must admit that this is certainly a disadvantage when using
                hashed passwords. The only solution in this case is to change
                your secret key and generate a new pashword. So now you have 2
                secret keys to remember at most.
                <br />
                <br /> It's certainly not ideal and can be annoying, but this is
                something you wouldn't have to do very often. Even if the
                hackers have your password hash, it would take them several
                years to centuries to even crack the hash using bruteforce.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>10. What if hackers find out my secret key?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                If you're following the instructions given for secret key input,
                then there's no chance that a hacker could use bruteforce to
                find out your secret key. It's still technically possible, I
                cannot lie to you, but the possibility requires them to have a
                bunch of super-computers, at which point even the military
                wouldn't be able to save you.
                <br />
                <br />
                Pashword uses Scrypt + SHA3 algorithm to generate passwords so
                it protects you from bruteforce attacks by ASICs. ASICs are
                extremely expensive and for someone to invent an ASIC
                exclusively for Pashword would require thousands of dollars in
                resources and a leaked database of your account and even then,
                it's improbable that they're going to crack your secret key in a
                few years.
                <br />
                <br /> If you have a strong secret key, you have absolutely
                nothing to worry about. I'm saying this because I use Pashword
                myself and my secret key is strong enough to protect me from
                hackers, hopefully yours is too as long as Pashword shows it's
                green.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>11. So, is Pashword a password manager?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                No not at all. Password managers require a database, most do not
                work without the internet due to sync ability and also let you
                store multiple passwords for multiple websites.
                <br />
                <br />
                Pashword is a hashed password generator. It doesn't store your
                passwords in a database, it calculates them according to the
                input you give to it. Kinda like a math equation:
                <span className="block rounded-md bg-slate-800 px-1 text-center">
                  Website + Username + Secret = Pashword
                </span>
                <br />
                <br /> Since pashword calculates everything mathematically, it
                doesn't know who you are or what accounts you have. It just
                knows how to generate the password for an input you give to it.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-button">
                <span>
                  12. I already use a password manager, should I use Pashword?
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="faq-text">
                You should use password if:
                <br /> 1. You use the same password everywhere.
                <br /> 2. You often forget passwords.
                <br /> 3. You do not know how to use a password manager.
                <br />
                4. You do not want to use a password manager.
                <br /> 5. You want access to all your passwords even when you
                don't have internet or password manager access.
                <br />
                <br /> 6. You do not want to waste time coming up with strong
                passwords for every single one of your accounts separately.
                <br />
                7. You want your computer to handle it for you without requiring
                too much maintenance.
                <br />
                <br />
                You don't need Pashword if you're someone who keeps their
                database of password manager close at all times, someone who
                uses extremely strong and unique passwords for all their
                accounts or someone who always has access to the interent and
                multi-device sync.
                <br />
                <br /> You can use Pashword in conjuction with a password
                manager, where you can let your password manager store different
                secret keys for you in case of a database breach. Now that's
                what I call double protection.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQ;
