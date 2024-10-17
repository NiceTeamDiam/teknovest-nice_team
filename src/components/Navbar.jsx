import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/img/logo.webp";
import '@fontsource/poppins';

const generateWhatsappURL = (phoneNumber, message) => {
  // Pastikan nomor dalam format internasional (tanpa tanda +)
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Menghapus karakter non-digit
  const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return whatsappURL;
};

function Navbar() {
  const [openToggle, setOpenToggle] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const handleClick = () => {
    const phoneNumber = "6285706804408"; // Nomor WhatsApp dengan kode negara (62 untuk Indonesia)
    const message = "Halo, saya tertarik menggunakan layanan Fitoloka untuk membantu mengoptimalkan pertanian saya. Bisakah saya mendapatkan informasi lebih lanjut tentang layanan yang ditawarkan dan cara untuk memulai? Terima kasih!"; // Pesan default
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke WhatsApp
    window.location.href = generateWhatsappURL(phoneNumber, message);
  };

  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

  const handleClickOutside = (event) => {
    if (
      toggleRef.current &&
      panelRef.current &&
      !toggleRef.current.contains(event.target) &&
      !panelRef.current.contains(event.target)
    ) {
      setOpenToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [shouldScroll, setShouldScroll] = useState(true);

  useEffect(() => {
      if (shouldScroll) {
          window.scrollTo(0, 0);
      }
  }, [shouldScroll]);

  const handleLinkClick = () => {
      setShouldScroll(true);
  };

  return (
    <>
    <nav className="fixed z-50 w-full top-0 h-18 flex items-center lg:px-12 p-6 font-poppins bg-[#0A6847]/10 bg-gradient-to-t from-black/10 via-black/15 to-black/10">
      <img src={Logo} alt="/" width="135px" height="135px"/>
      <button
        ref={toggleRef}
        className="block lg:hidden absolute right-4 px-4 top-[15px] py-3"
        onClick={handleToggle}
      >
        <span
          className={`rounded-full w-9 h-1 mb-2 bg-white block transition-transform duration-300 ease-in-out transform ${
            openToggle ? "rotate-[45deg]  translate-y-2" : ""
          }`}
        ></span>

        <span
          className={`rounded-full w-9 h-1 mb-2 bg-white block transition-opacity duration-300 ease-in-out ${
            openToggle ? "opacity-0 mb-[1.2px]" : ""
          }`}
        ></span>

        <span
          className={`rounded-full w-9 h-1 mb-2  bg-white block transition-transform duration-300 ease-in-out transform ${
            openToggle ? "-rotate-[45deg]   -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div className="tracking-wider w-screen flex justify-end px-6">
        <nav
          id="nav-menu"
          className={`absolute bg-white/20 backdrop-blur-sm lg:backdrop-blur-none shadow-lg rounded-lg max-w-[250px] right-4 top-20 
            lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none 
            ${openToggle ? "block" : "hidden"}`}
        >
          <div ref={panelRef} className="">
          <ul className="lg:flex">
            <li className="group px-2">
              <button>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="w-[15vh] justify-center text-[10px] text-dark font-semibold tracking-widest lg:text-white p-4 group-hover:text-white group-hover:lg:bg-[#0A6847] lg:group-hover:text-primary flex lg:rounded-full lg:p-2 group-active:bg-primary group-active:text-[#0A6847] rounded-md"
              >
                Beranda
              </Link>
              </button>
            </li>
            <li className="group px-2">
              <button>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="w-[15vh] justify-center text-[10px] text-dark font-semibold tracking-widest lg:text-white p-4 group-hover:text-white group-hover:lg:bg-[#0A6847] group-hover:text-primary flex lg:rounded-full lg:p-2 group-active:bg-primary group-active:text-[#0A6847] rounded-md"
                >
                Layanan
              </Link>
              </button>
            </li>
            <li className="group px-2">
              <button>
              <Link
                to="/portofolio"
                onClick={handleLinkClick}
                className="w-[15vh] sm:ml-[2px] md:ml-[2px] justify-center text-[10px] text-dark font-semibold tracking-widest lg:text-white p-4 group-hover:text-white group-hover:lg:bg-[#0A6847] group-hover:text-primary flex lg:rounded-full lg:p-2 group-active:bg-primary group-active:text-[#0A6847] rounded-md"
              >
                Portofolio
              </Link>
              </button>
            </li>
            <li className="group px-2">
              <button>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="w-[20vh] justify-center text-[10px] text-dark font-semibold tracking-widest lg:text-white p-2 group-hover:text-white group-hover:lg:bg-[#0A6847] group-hover:text-primary flex lg:rounded-full group-active:bg-primary group-active:text-[#0A6847] rounded-md"
              >
                Tentang Kami
              </Link>
              </button>
            </li>
          </ul>
          </div>
        </nav>
      </div>
      <div className="lg:ml-[40vh]">
      <button className="text-white lg:mx-auto border rounded-[20px] w-[20vh] py-3 text-[10px] shadow-lg lg:block hidden hover:shadow-lg hover:bg-[#0b704d] " onClick={handleClick}>
        Hubungi Kami
      </button>
      </div>
    </nav>

    <Outlet />
    </>
  );
}

export default Navbar;
