import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import Logo from "../assets/Logo/yellalogo.png";

function Navbar() {
  return (
    <div className="bg-white">
      <nav className="relative max-w-7xl mx-auto  z-20 flex shrink-0 items-center space-x-2 py-6 px-4 sm:px-8">
        <a href="/" className="z-10">
          {/* Logo */}
          <div className=" text-heading">
            <img className="h-9" src={Logo} alt="" />
          </div>
        </a>
        <div className="flex-1">
          <div className="absolute inset-y-0 inset-x-0 hidden items-center justify-center space-x-1.5 px-4 lg:flex">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-normal text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
            >
              Work
            </a>
            <a
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-normal text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
            >
              Services
            </a>
            <a
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-normal text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
            >
              About
            </a>
            <a
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-normal text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
            >
              Client
            </a>
          </div>
        </div>
        <div className="z-10">
          <button
            type="button"
            className="hidden cursor-pointer items-center justify-center rounded-xl bg-[#376058] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text lg:inline-flex"
          >
            Get in touch
          </button>
        </div>

        <Menu as="div" className="relative lg:hidden">
          <Menu.Button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            <BiMenu className="h-5 w-5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-90 mt-2 w-56 origin-top-right rounded-xl bg-white py-3 shadow-xl focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Work
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Services
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    About
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Client
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-muted-1 text-heading" : "text-text"
                    } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                  >
                    Call to action
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </div>
  );
}

export default Navbar;
