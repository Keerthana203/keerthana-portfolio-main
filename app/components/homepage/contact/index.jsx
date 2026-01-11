// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            CONTACT
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactForm />

          <div className="flex flex-col gap-8">
            {/* DETAILS */}
            <div className="flex flex-col gap-5 lg:gap-8">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  size={36}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800"
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  size={36}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800"
                />
                <span>{personalData.phone}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  size={36}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800"
                />
                <span>{personalData.address}</span>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-8 mt-4">
              <Link href={personalData.github} target="_blank">
                <IoLogoGithub
                  size={48}
                  className="bg-[#8b98a5] p-3 rounded-full text-gray-800 cursor-pointer"
                />
              </Link>
              <Link href={personalData.linkedIn} target="_blank">
                <BiLogoLinkedin
                  size={48}
                  className="bg-[#8b98a5] p-3 rounded-full text-gray-800 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
