import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f4330] pb-6 lg:pb-0">
      <div className="max-w-[1240px] h-[200px] lg:h-auto mx-10 py-10 lg:py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
        <div>
          <h1 className="text-center lg:text-start w-full text-xl lg:text-3xl font-bold">
            Fito Loka - Solusi Pertanian Modern
          </h1>
          <p className="py-4 text-center lg:text-start">
            © 2024 Fito Loka. Semua Hak Dilindungi.
          </p>
          <div className="flex justify-center gap-4 lg:gap-0 lg:justify-between md:w-[75%] my-4">
            <div className="hover:scale-110 duration-300">
              <FaFacebookSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaInstagram size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaTwitterSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaGithubSquare size={30} />
            </div>
            <div className="hover:scale-110 duration-300">
              <FaLinkedin size={30} />
            </div>
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:flex justify-between mt-6 px-8">
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">Pertanian Digital</li>
              <li className="py-2 text-xs lg:text-sm">Irigasi Pintar</li>
              <li className="py-2 text-xs lg:text-sm">Greenhouse</li>
              <li className="py-2 text-xs lg:text-sm">Precision Farming</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">Hidroponik Modern</li>
              <li className="py-2 text-xs lg:text-sm">Pupuk Organik</li>
              <li className="py-2 text-xs lg:text-sm">Pengelolaan Tanah</li>
              <li className="py-2 text-xs lg:text-sm">Teknologi Penyuburan</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-2 text-xs lg:text-sm">
                Jl. Bukhori No.17, Kedungkendo
              </li>
              <li className="py-2 text-xs lg:text-sm">Candi, Sidorjo</li>
              <li className="py-2 text-xs lg:text-sm">Jawa Timur, Indonesia</li>
              <li className="py-2 text-xs lg:text-sm">(+62) 857 0680 4408</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
