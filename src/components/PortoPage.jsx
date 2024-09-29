import React, {useEffect} from 'react'
import '@fontsource/poppins';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../src/index.css';
import bg1 from "../assets/img/portofolio/bg-hero.webp" // img by google search
import bg2 from "../assets/img/portofolio/bg-second.webp" // img by canva pro
import card1 from "../assets/img/portofolio/card1.webp" // img by google search
import card2 from "../assets/img/portofolio/card2.webp" // img by google search
import card3 from "../assets/img/portofolio/card3.webp" // img by google search
import profile from "../assets/img/portofolio/profile.webp" // img by google search
import s1 from "../assets/img/portofolio/swiper1.webp" // img by google search
import s2 from "../assets/img/portofolio/swiper2.webp" // img by google search
import s3 from "../assets/img/portofolio/swiper3.webp" // img by google search
import s4 from "../assets/img/portofolio/swiper4.webp" // img by google search
import s5 from "../assets/img/portofolio/swiper5.webp" // img by google search
import s6 from "../assets/img/portofolio/swiper6.webp" // img by google search
import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa';

const PortoPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0),
        AOS.init({duration: 1300});
      }, []);

  return (
        <section className='font-poppins'>
            <div  className="relative w-full h-fit lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-[#015034] bg-opacity-35"></div>
                <div className="relative text-white lg:p-40 p-32 items-center xl:pt-80">
                    <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-center tracking-wider flex justify-center space-x-5"><p data-aos="fade-right">KARYA</p><p data-aos="fade-left">TANI</p></h1>
                    <p className="mt-4 text-md lg:text-2xl text-center justify-center" data-aos="fade-up">Mari melihat hasil dari pengolahan pertanian kami</p>
                    <div className="mt-4 flex justify-center space-x-6" data-aos="fade-up">
                        <FaInstagram size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaFacebookSquare size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaYoutube size={20} className='transform transition duration-300 hover:scale-125'/>
                    </div>
                </div>
            </div>

            <div className="relative h-fit bg-white">
                <div className="lg:px-28 px-10 lg:pt-10 pt-5">
                    <div className="max-w-5xl">
                        <h1 className="lg:text-3xl text-2xl tracking-wide text-[#0A6847] font-bold">
                            Inovasi Pertanian
                        </h1>
                    </div>
                    <p className="max-w-5xl lg:text-xl md:text-md text-sm font-medium text-[#0A6847] mt-1 lg:mt-2">
                        Inovasi dan solusi pertanian yang telah kami ciptakan untuk memajukan sektor ini.
                    </p>
                </div>

                    <div className="py-8 lg:py-10">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper max-w-full lg:w-[1190px] lg:h-[370px] w-[310px] h-[150px]"
                            
                        >
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s1} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Inovasi Penyiraman Tanaman dengan Teknologi Drone</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Fito Loka menghadirkan teknologi penyiraman yang cepat dan tepat, membantu petani meningkatkan hasil panen dengan metode modern dan efektif.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s2} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]"/>
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Keberhasilan Hasil Panen dengan Pupuk Fito</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Dengan formula yang dirancang khusus, produk Pupuk Fito membantu memperbaiki kesuburan tanah dan memberikan nutrisi optimal bagi tanaman.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s3} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]"/>
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Revolusi Pertanian Greenhouse untuk Hasil Optimal</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Greenhouse Fito Loka adalah langkah maju menuju pertanian yang lebih efisien dan siap menghadapi tantangan masa depan.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s4} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Hidroponik Cerdas untuk Ketahanan Pangan</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Dengan teknologi hidroponik, kami memberikan nutrisi yang tepat dan hasil panen menjadi lebih cepat dan berkualitas tinggi.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s5} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Masa Depan Pertanian dengan Panel Sensor Cuaca</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Panel sensor kami mengukur berbagai parameter cuaca, memberikan data yang diperlukan untuk merencanakan irigasi, pemupukan, dan perawatan tanaman.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center items-center text-center text-lg bg-white">
                                <div className="relative">
                                    <div className="relative">
                                        <img src={s6} alt="" className="block lg:w-[1270px] lg:h-[500px] object-cover w-[450px] h-[200px]" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute inset-0 flex flex-col text-white items-center justify-center text-center p-4">
                                            <h2 className="lg:text-3xl text-md max-w-60 lg:max-w-4xl font-bold mb-2">Meningkatkan Produktivitas Melalui Teknologi Mobile</h2>
                                            <p className="hidden lg:block text-lg max-w-3xl">Kami menyediakan platform yang memungkinkan petani untuk memantau pertanian mereka dengan lebih mudah dan efisien.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    
                     <div className="w-full bg-cover bg-center h-full my-16" style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="w-full h-fit bg-white bg-opacity-80">
                            <div className="py-3 lg:py-10 items-center">
                                <h1 className="text-[#0A6847] text-2xl lg:text-4xl text-center font-bold">Solusi Modern untuk Pertanian</h1>
                            </div>
                            <div className="flex flex-wrap justify-between max-w-5xl mx-auto py-2 lg:py-5 px-7">
                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={bg1} alt="Image 1" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar">
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Tractor Sprayer</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2">Dirancang untuk meningkatkan produktivitas, alat ini membantu petani menyemprotkan pestisida dan pupuk secara merata, memastikan hasil panen yang optimal.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-1/2 p-4lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card1} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Alat Tanam Padi</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2">Alat bantu tanam padi Fito Loka dibuat untuk mempermudah proses penanaman, menjadikan pekerjaan lebih cepat dan efisien.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card2} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Aplikasi Pertanian Cerdas</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2"> Dengan memanfaatkan teknologi terkini, aplikasi ini menyediakan data real-time mengenai cuaca, kelembapan tanah, dan kondisi tanaman, sehingga petani dapat membuat keputusan yang lebih baik dan tepat waktu.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 lg:p-4 p-2">
                                    <div className="bg-white rounded-lg shadow-lg h-100" data-aos="fade-up">
                                        <img src={card3} alt="Image 2" className="rounded-t-lg w-full h-48 object-cover"/>
                                        <div className="p-4 h-32 overflow-y-auto hide-scrollbar"> 
                                            <h2 className="text-sm lg:text-md font-bold text-[#0A6847]">Drone Precision Farming</h2>
                                            <p className="text-xs lg:text-sm text-[#0A6847] my-2"> Dilengkapi dengan kamera dan sensor beresolusi tinggi, drone dapat mendeteksi masalah seperti hama, penyakit tanaman, atau area yang membutuhkan irigasi tambahan dengan akurasi yang tinggi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="relative bg-white py-2 lg:py-10 z-10 mb-10">
                        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                            <h2 className="text-[#0A6847] text-3xl lg:text-4xl font-bold text-center mb-0 lg:mb-4" data-aos="fade-right">Testimonial</h2>
                    
                            <div className="bg-white rounded-lg shadow-lg p-8 lg:px-12 lg:pt-2 lg:pb-10 max-w-7xl mx-auto">
                                <h3 className="text-[#0A6847] text-xl font-semibold mb-10 text-center" data-aos="fade-left">Apa kata mereka tentang Fito Loka</h3>
                                <div className="flex flex-wrap justify-center gap-x-8 -bottom-3 h-80 overflow-y-scroll hide-scrollbar scroll-shadow transition-shadow duration-300 ease-in-out" data-aos="flip-right" data-aos-delay="100">

                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"Produk Fito Loka sangat membantu saya dalam meningkatkan hasil panen. Teknologi modern yang diterapkan sangat memudahkan pekerjaan di lapangan."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Budi Santoso</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Padi</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between mt-4 lg:mt-8 lg:h-[200px]">
                                        <p className="text-sm text-[#0A6847]">"Saya sangat merekomendasikan Fito Loka untuk para petani lainnya. Pengalaman menggunakan produk ini benar-benar memuaskan!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Siti Aminah</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Sayur</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"Inovasi penyiraman tanaman dengan drone sangat efisien dan membuat pekerjaan menjadi lebih ringan."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Agus Pratama</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Buah</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0">
                                        <p className="text-sm text-[#0A6847]">"Fito Loka telah mengubah cara saya bertani. Dengan produk mereka, hasil panen saya meningkat dan kualitas tanaman menjadi lebih baik!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Andrian Hidayat</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Hortikultura</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between mt-4 lg:mt-8 lg:h-[200px]">
                                        <p className="text-sm text-[#0A6847]">"Sejak menggunakan pupuk Fito Loka, saya merasakan perubahan signifikan dalam produktivitas lahan saya, membuat saya lebih percaya diri dalam bertani."</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Vika Lestari</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Jagung</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="bg-white border rounded-lg shadow p-4 max-w-xs w-full flex flex-col justify-between lg:h-[200px] mt-4 lg:mt-0 mb-8 lg:mb-0">
                                        <p className="text-sm text-[#0A6847]">"Layanan dan produk dari Fito Loka sangat membantu saya dalam meningkatkan hasil buah organik. Terima kasih, Fito Loka!"</p>
                                        <div className="flex items-center mt-4">
                                            <img src={profile} alt="User Image" className="w-10 h-10 rounded-full mr-2"/>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#0A6847]">Muhammad Rafli</h4>
                                                <p className="text-xs text-[#0A6847]">Petani Buah Organik</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  )
}

export default PortoPage
