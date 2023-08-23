import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidMinusCircle } from "react-icons/bi";

function Services() {
  return (
    <div className="bg-[#F3F5F6]">
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl p-2">
          <div className="flex my-4 py-14 border-b-2 flex-wrap justify-between items-center">
            <h1 className="my-1 text-3xl font-semibold">Our Services</h1>
            <p className="my-1 text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="my-1 rounded-full border-2 border-[#376058] px-2  py-1 text-sm font-semibold text-[#376058]">
              Creative
            </span>
          </div>
          <Disclosure as="div" className="border-b-2 py-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Branding</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b-2 py-10" defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Digital Experience</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 max-w-md text-sm text-gray-500">
                  <p>
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </p>
                  <button
                    type="button"
                    className="hidden cursor-pointer items-center justify-center rounded-lg bg-[#376058] px-4 py-2.5 my-3 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text lg:inline-flex"
                  >
                    Get in touch
                  </button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b-2 py-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Media Planning</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b-2 py-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Advertising</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Services;
