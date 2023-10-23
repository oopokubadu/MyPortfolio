import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidMinusCircle } from "react-icons/bi";

function Services() {
  return (
    <div className="bg-[#F3F5F6]" id="services">
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-5xl rounded-2xl p-2">
          <div className="flex my-4 border-b-2 flex-wrap justify-between items-center">
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
                  We create captivating brand identities that leave a lasting
                  impression, helping your business stand out in a crowded
                  marketplace.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b-2 py-10" defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Product Development</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 max-w-md text-sm text-gray-500">
                  <p>
                    Our team of experts turns ideas into reality, guiding you
                    through the entire product development process from concept
                    to launch.
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
                  <span>Marketing</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                  We craft strategic marketing campaigns that drive results,
                  using a mix of traditional and digital tactics to reach your
                  target audience and grow your brand.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b-2 py-10">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-3xl font-semibold text-[#376058]">
                  <span>Photography & Videography:</span>
                  {open ? (
                    <BiSolidMinusCircle className="text-[#FF7D34] text-5xl" />
                  ) : (
                    <AiOutlinePlusCircle className="text-[#FF7D34] text-5xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                  Our talented photographers and videographers capture the
                  essence of your brand, creating visually stunning content that
                  tells your story and engages your audience.
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
