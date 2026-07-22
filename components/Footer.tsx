import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export const Footer = () => (
  <footer className="py-12">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
      <div>
        <a href="#top" className="text-lg font-bold">
          Accredian
        </a>

        <div className="flex gap-2 mt-4 max-w-xs text-xl leading-6">
          <TiSocialFacebook className="hover:text-blue-500" />
          <SlSocialLinkedin className="hover:text-blue-500" />
          <SlSocialTwitter className="hover:text-blue-500" />
          <SlSocialYoutube className="hover:text-blue-500" />
          <SlSocialInstagram className="hover:text-blue-500" />
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Explore</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <a href="" className="hover:text-teal-300">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:text-teal-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-teal-300">
              Why Accredian
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold">Contact Us</h2>
        <p className="mt-4 text-sm">Email us: <span className="text-blue-700">enterprise@accredian.com</span></p>
        <p className="mt-3 text-sm">
          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
          Gurugram, Haryana
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center mx-auto mt-10 max-w-7xl border-t border-slate-800 px-5 pt-6 text-md text-gray-500 sm:px-8 lg:px-10">
      © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt
      Ltd. All Rights Reserved
    </div>
  </footer>
);
