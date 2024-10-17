import React, { useEffect } from "react";
import "@fontsource/poppins";
import "aos/dist/aos.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, FreeMode } from "swiper/modules";
import Weather from "./weather";
import Youtube from "./youtube";
import "../../src/index.css";

import Bg from "../assets/img/bg-hero-layanan.webp"; // img by canva pro
import Elemen from "../assets/img/elemen-hero-layanan.webp"; // img by canva pro
import Hidro from "../assets/img/layanan/hidroponik.webp"; // img by google search
import Pa from "../assets/img/layanan/pengontrol_air.webp"; // img by google search
import M from "../assets/img/layanan/monitoring.webp"; // img by google search
import St from "../assets/img/layanan/sensor_tanah.webp"; // img by google search
import Sc from "../assets/img/layanan/sensor_cuaca.avif"; // img by google search
import Spi from "../assets/img/layanan/solar-powered-irrigation.webp"; // img by google search
import Pk from "../assets/img/pupuk/kompos.webp"; // img by Nice Team
import Pb from "../assets/img/pupuk/bokhasi.webp"; // img by Nice Team
import Pg from "../assets/img/pupuk/guano.webp"; // img by Nice Team
import Pv from "../assets/img/pupuk/vermikompos.webp"; // img by Nice Team
import Ph from "../assets/img/pupuk/humus.webp"; // img by Nice Team
import Pm from "../assets/img/pupuk/manure.webp"; // img by Nice Team
import K1 from "../assets/img/kardus/kardus1.webp"; // img by Nice Team
import K2 from "../assets/img/kardus/kardus2.webp"; // img by Nice Team
import K3 from "../assets/img/kardus/kardus3.webp"; // img by Nice Team
import K4 from "../assets/img/kardus/kardus4.webp"; // img by Nice Team
import Gh1 from "../assets/img/greenhouse/greenhouse1.webp"; // img by google search
import Gh2 from "../assets/img/greenhouse/greenhouse2.webp"; // img by google search
import Gh4 from "../assets/img/greenhouse/greenhouse4.webp"; // img by google search
import Gh3 from "../assets/img/greenhouse/greenhouse3.webp"; // img by google search
import Igh from "../assets/img/greenhouse/illuss_greenhouse.webp";

const generateWhatsappURL = (phoneNumber, message) => {
  // Pastikan nomor dalam format internasional (tanpa tanda +)
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Menghapus karakter non-digit
  const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return whatsappURL;
};

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0), AOS.init({ duration: 1300, delay: 200 });
  }, []);

  const handleClick = () => {
    const phoneNumber = "6285706804408"; // Nomor WhatsApp dengan kode negara (62 untuk Indonesia)
    const message = "Halo! saya tertarik untuk membeli pupuk Fito Loka. Bisa minta detail lebih lanjut mengenai harga, jenis pupuk, dan cara pemesanannya? Terima kasih!"; // Pesan default
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke WhatsApp
    window.location.href = generateWhatsappURL(phoneNumber, message);
  };

  const clickMe = () => {
    const phoneNumber = "6285706804408"; // Nomor WhatsApp dengan kode negara (62 untuk Indonesia)
    const message = "Halo! Saya tertarik untuk mencoba greenhouse Fito Loka. Bisa minta informasi lebih lanjut tentang fasilitas, harga, dan cara pemesanannya? Terima kasih!"; // Pesan default
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke WhatsApp
    window.location.href = generateWhatsappURL(phoneNumber, message);
  };

  return (
    <section className="font-poppins">
      <div className="relative h-fit bg-[#07754E]">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${Bg})` }}></div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between h-fit lg:h-full lg:px-28 px-6 py-20 lg:py-auto">
          <div className="text-white lg:max-w-2xl max-w-sm my-auto text-center lg:text-left">
            <h1 className="lg:text-4xl text-xl font-bold lg:mb-4 leading-relaxed">
              Mengubah Pertanian dengan Teknologi dan Inovasi
            </h1>
            <p className="lg:text-2xl text-sm lg:leading-10 pt-3">
              Jelajahi layanan kami untuk mendorong hasil pertanian yang lebih
              unggul dan berkelanjutan.
            </p>
          </div>
          <div
            className="flex justify-center lg:max-w-5xl md:max-w-4xl my-2"
            data-aos="fade-left">
            <img
              src={Elemen}
              className="lg:w-full lg:h-full w-96 h-96 sm:max-w-md md:max-w-xl lg:max-w-4xl"
            />
          </div>
        </div>
      </div>

      <div>
        <Weather />
      </div>

      <div className="relative h-fit py-6">
        <div className="lg:px-28 px-10 lg:pt-10 pt-5 flex">
          <div className="max-w-36">
            <h1 className="lg:text-3xl sm:text-lg tracking-wide text-white bg-[#0A6847] rounded-md lg:py-3 py-2 px-6">
              Irigasi
            </h1>
          </div>
          <span className="ml-4 max-w-2xl lg:text-xl md:text-md text-xs font-medium text-[#0A6847]">
            Sistem Irigasi Berbasis Sensor Untuk Memantau dan Mengatur
            Penggunaan Air Secara Efisien
          </span>
        </div>

        <div className="lg:px-32 px-10 py-12">
          <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-14 gap-7">
            <div
              className="bg-white border-2 border-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-right"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-[#0A6847] mb-2">
                  Irigasi Hidroponik
                </h2>
                <p className="lg:text-md font-medium text-[#0A6847] mr-4 lg:leading-7">
                  Irigasi untuk tanaman hidroponik yang tidak menggunakan tanah
                  melainkan air yang diperkaya dengan nutrisi.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Hidro}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-left"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-white mb-2">
                  Solar Irrigation
                </h2>
                <p className="lg:text-md text-white mr-4 lg:leading-7">
                  Sistem irigasi yang menggunakan energi matahari untuk
                  menggerakkan pompa air tanpa akses listrik.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Spi}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-white border-2 border-[#0A6847] lg:border-0 lg:bg-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="zoom-out-right"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start lg:text-white text-[#0A6847]">
                <h2 className="lg:text-2xl text-md font-bold mb-2">
                  Pengontrol Air
                </h2>
                <p className="lg:text-md font-medium mr-4 lg:leading-7">
                  Untuk mengatur katup irigasi secara otomatis dari data yang
                  diterima dari sensor tanah dan cuaca.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Pa}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-[#0A6847] lg:bg-white lg:border-2 border-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="zoom-out-left"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-white lg:text-[#0A6847] mb-2">
                  Sistem Monitoring
                </h2>
                <p className="lg:text-md font-medium text-white lg:text-[#0A6847] mr-4 lg:leading-7">
                  Untuk memantau sistem irigasi dari jarak jauh melalui aplikasi
                  mobile atau platform web.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={M}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-white border-2 border-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-up-right"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-[#0A6847] mb-2">
                  Sensor Tanah
                </h2>
                <p className="lg:text-md font-medium text-[#0A6847] mr-4 lg:leading-7">
                  Membantu dalam menentukan waktu dan jumlah air yang tepat
                  untuk disuplai ke tanaman.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={St}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>

            <div
              className="bg-[#0A6847] p-4 rounded-xl shadow-md flex items-center"
              data-aos="fade-up-left"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
              <div className="mx-auto lg:max-w-80 max-w-full py-4 px-2 lg:py-0 lg:px-0 text-center lg:text-start">
                <h2 className="lg:text-2xl text-md font-bold text-white mb-2">
                  Sensor Cuaca
                </h2>
                <p className="lg:text-md font-medium text-white mr-4 lg:leading-7">
                  Mengukur parameter cuaca seperti suhu udara untuk menyesuaikan
                  pola irigasi.
                </p>
              </div>
              <div className="py-8 mx-auto">
                <img
                  src={Sc}
                  className="lg:w-40 w-20 lg:h-40 h-20 rounded-full object-cover hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-fit bg-[#07754E] xl:px-32">
        <div className="lg:px-28 px-10 lg:pt-20 pt-10 flex">
          <div className="max-w-36">
            <h1 className="lg:text-3xl sm:text-lg tracking-wide text-[rgb(10,104,71)] bg-white rounded-md lg:py-3 py-2 px-6">
              Pupuk
            </h1>
          </div>
          <span className="ml-4 max-w-2xl lg:text-xl md:text-md text-xs font-medium text-white">
            Sistem Irigasi Berbasis Sensor Untuk Memantau dan Mengatur
            Penggunaan Air Secara Efisien
          </span>
        </div>

        <div className="mt-0 lg:mt-16 py-16 lg:py-16 text-white font-semibold px-10 lg:px-28">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
            id="slide-1">
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Pk}
                  alt="Image 3"
                  className="w-52 h-auto lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Kompos
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Pb}
                  alt="Image 3"
                  className="sm:w-52 sm:h-52 lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Bokhasi
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Pg}
                  alt="Image 3"
                  className="sm:w-52 sm:h-52 lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Guano
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Pv}
                  alt="Image 4"
                  className="sm:w-52 sm:h-52 lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Vermikom
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Ph}
                  alt="Image 5"
                  className="sm:w-52 sm:h-52 lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Humus
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center bg-yellow-300 rounded-3xl p-4 w-full max-w-sm h-auto">
                <img
                  src={Pm}
                  alt="Image 6"
                  className="sm:w-52 sm:h-52 lg:h-auto lg:w-96 mx-auto"
                />
                <h2 className="text-center lg:text-2xl text-sm font-bold mt-2">
                  Pupuk Kandang
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col items-center justify-center mt-10 lg:mt-16 space-y-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-white text-center ">
              Rekomendasi Pupuk Organik
            </h1>
            <p className="text-sm font-light lg:text-lg text-white max-w-xl lg:max-w-4xl text-center">
              Fito Loka menghadirkan inovasi pupuk organik yang membantu petani
              mengatasi tantangan gagal panen dan memperbaiki kualitas tanah.
            </p>
            <a
              href="#"
              onClick={handleClick}
              className="bg-white text-[#07754E] lg:text-lg text-md font-semibold py-3 lg:px-8 px-6 rounded-full transition-transform transform hover:scale-105 hover:text-white hover:bg-[#07754E] border border-transparent hover:border-white">
              Beli Sekarang
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:px-10 lg:px-20 mx-auto py-8 lg:py-16">
          <div className="md:px-8 lg:px-10 lg:mb-10 my-9" data-aos="zoom-in-up">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
              id="slide-2">
              <SwiperSlide>
                <img src={K1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={K2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={K3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={K4} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="lg:ml-6 flex flex-col text-white text-center md:text-left lg:text-left mx-auto justify-center px-10 lg:px-20 md:px-0">
            <h2 className="text-xl lg:text-2xl font-bold">
              Kemudahan Belanja Pupuk Berkualitas
            </h2>
            <p className="mt-4 text-sm lg:text-xl leading-6 lg:leading-8 text-justify">
              Kami memastikan setiap produk pupuk dikemas dengan baik dan siap
              tiba di lokasi Anda dalam kondisi terbaik. Dapatkan kemudahan
              berbelanja pupuk berkualitas tanpa harus keluar rumah, dengan
              jangkauan pengiriman yang mencakup kota dan desa di seluruh Jawa
              Timur.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-fit py-6 xl:px-32">
        <div className="lg:px-28 px-10 lg:pt-10 pt-5 flex">
          <div className="max-w-40 lg:max-w-60">
            <h1 className="lg:text-3xl sm:text-lg tracking-wide text-white bg-[#0A6847] rounded-md lg:py-3 py-2 px-6">
              Greenhouse
            </h1>
          </div>
          <span className="ml-4 max-w-2xl lg:text-xl md:text-md text-xs font-medium text-[#0A6847]">
            Meningkatkan produktivitas pertanian yang secara optimal
          </span>
        </div>

        <div className="md:max-w-[700px] lg:max-w-[1120px] flex flex-col py-10 px-10 mx-auto items-center justify-center">
          <div className="w-full h-auto max-w-lg mx-auto" data-aos="fade-right">
            <img src={Igh} alt="" />
          </div>

          <div className="text-[#0A6847] w-full lg::max-w-5xl md:px-2 py-5 text-center items-center">
            <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
              Optimalisasi Pertanian Modern dengan Greenhouse
            </h2>
              <p className="lg:text-xl md:text-md text-sm text-justify">
                Fito Loka menghadirkan layanan Greenhouse yang dirancang untuk
                meningkatkan produktivitas dan efisiensi pertanian Anda. Dengan
                teknologi canggih dan desain yang inovatif, greenhouse kami
                menyediakan lingkungan yang ideal bagi tanaman untuk tumbuh dan
                berkembang.
              </p>
          </div>

          <div className="py-12 items-end">
            <a
              href="#"
              onClick={clickMe}
              className="bg-[#07754E] text-white text-sm md:text-lg font-semibold py-3 px-7 md:py-3 md:px-8 rounded-full transition-transform transform hover:scale-105 hover:text-[#07754E] hover:bg-white border border-transparent hover:border-[#07754E]" 
            >
              Coba Sekarang
            </a>
          </div>
        </div>


        <div className="flex flex-col-reverse md:flex-row pb-16 px-6 mx-auto">
          <div className="text-[#0A6847] w-full md:max-w-2xl md:pl-20 py-6">
            <h2 className="text-xl md:text-2xl text-[#0A6847] font-extrabold text-center lg:text-start rounded-2xl mb-4 max-w-full lg:max-w-xl mx-12 md:mx-0 md:max-w-md">
              Fitur Utama Layanan Greenhouse
            </h2>
            <div className="text-justify pt-3 mx-3">
              <h5 className="lg:text-lg text-md font-semibold my-3">
                1. Kontrol Iklim yang Akurat
              </h5>
              <p className="text-sm md:text-md">
                Greenhouse dilengkapi dengan sistem pengatur suhu, kelemaban,
                dan pencahayaan yang dapat disesuaikan, memastikan tanaman
                mendapatkan kondisi optimal sepanjang tahun.
              </p>

              <h5 className="lg:text-lg text-md font-semibold my-3">
                2. Pencegahan Hama dan Penyakit
              </h5>
              <p className="text-sm md:text-md">
                Lingkungan tertutup mengurangi risiko serangan hama dan
                penyakit, sehingga tanaman lebih sehat dan hasil panen
                meningkat.
              </p>

              <h5 className="lg:text-lg text-md font-semibold my-3">
                3. Berkelanjutan dan Ramah Lingkungan
              </h5>
              <p className="text-sm md:text-md">
                Greenhouse kami dirancang untuk meminimalkan dampak lingkungan,
                menggunakan teknologi berkelanjutan untuk menciptakan lingkungan
                pertanian yang ramah.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start w-full px-10 lg:px-24 mt-16 lg:mt-0">
            <div className="grid grid-cols-3 gap-2 lg:gap-8 mb-0 lg:mb-2">
              <img
                src={Gh1}
                alt="Photo 1"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
              />
              <img
                src={Gh4}
                alt="Photo 4"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="300"
              />
              <img
                src={Gh2}
                alt="Photo 2"
                className="w-40 h-40 md:w-60 md:h-60 object-cover"
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="600"
              />
            </div>
            <img
              src={Gh3}
              alt="Photo 3"
              className="mt-4 w-full lg:w-100 xl:w-[590px] h-40 md:h-52 object-cover"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg lg:text-2xl md:text-2xl mb-10 font-bold text-[#0A6847] text-center">
            Referensi Video Pertanian Modern
          </h2>
          <div data-aos="fade-up">
            <Youtube />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicePage;
