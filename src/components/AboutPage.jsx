import React, {useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'aos/dist/aos.css';
import AOS from 'aos'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import '../index.css';

import bg1 from '../assets/img/background.webp' // img by google search
import bg2 from "../assets/img/portofolio/bg-second.webp" // img by canva pro
import ilustrasi from '../assets/img/illustration1.webp' // img by canva pro
import swiper1 from '../assets/img/card/card1.webp' // img by google search
import swiper2 from '../assets/img/card/card2.webp' // img by google search
import swiper3 from '../assets/img/card/card3.webp' // img by google search
import swiper4 from '../assets/img/card/card4.webp' // img by google search
import swiper5 from '../assets/img/card/card5.webp' // img by google search
import swiper6 from '../assets/img/card/card6.webp' // img by google search
import swiper7 from '../assets/img/card/card7.webp' // img by google search
import swiper8 from '../assets/img/card/card8.webp' // im g by google search
import swiper9 from '../assets/img/card/card9.webp' // img by google search
import swiper10 from '../assets/img/card/card10.webp' // img by google search
import mockup from '../assets/img/mockup.webp' // img by canva pro
import ilustrasi2 from '../assets/img/illustration2.webp' // img by canva pro
import tim1 from '../assets/img/member/andre.webp' // img by Nice Team
import tim2 from '../assets/img/member/raflish.webp' // img by Nice Team
import tim3 from '../assets/img/member/vika.webp' // img by Nice Team
import tim4 from '../assets/img/member/angga.webp' // img by Nice Team
import tim5 from '../assets/img/member/agshay.webp' // img by Nice Team
import tim6 from '../assets/img/member/dewa.webp' // img by Nice Team
import bgv from '../assets/img/background-visi.webp' // img by Nice Team
import w from '../assets/img/wallpaper.webp' // img by Nice Team
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Chart from './Chart';
import '@fontsource/poppins';   


const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0),
    AOS.init({duration: 1300});
  }, []);

  return (
      <div className='font-poppins'>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute top-32 lg:top-32 left-1/2 transform -translate-x-1/2 text-center text-white xl:pt-16 my-auto" >
                <div data-aos="zoom-out">
                    <h1 className="text-5xl md:text-6xl font-bold" >Fito Loka</h1>
                    <p className="mt-4 text-xl md:text-2xl">Masa depan pertanian modern</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <FaInstagram size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaFacebookSquare size={20} className='transform transition duration-300 hover:scale-125'/>
                        <FaLinkedin size={20} className='transform transition duration-300 hover:scale-125'/>
                    </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-tl-3xl rounded-tr-3xl px-10 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center py-6">
                        <div className="ml-0 lg:ml-28 max-w-2xl text-[#0A6847]">
                            <h1 className="text-center lg:text-start text-3xl lg:text-5xl font-bold mb-6">Apa itu Fito Loka?</h1>
                            <p className="text-md lg:text-2xl text-justify">
                                Fito Loka adalah perusahaan yang berdedikasi untuk membawa inovasi dan solusi modern ke dalam dunia pertanian. Kami percaya bahwa pertanian adalah tulang punggung kehidupan, dan kami berkomitmen untuk mendukung para petani dalam menghadapi tantangan di era modern ini.
                            </p>
                        </div>
                        <div className="mt-10 md:mt-5 flex-shrink-0 " >
                            <img src={ilustrasi} alt="Fito Loka" className="w-full md:w-[400px] lg:w-[500px] h-auto rounded-lg transform transition duration-300 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative py-2 mt-10" style={{ backgroundImage: `url(${bg2})` }}>
                <div className="w-full h-screen py-40 px-64 bg-white bg-opacity-70">
                <Swiper
                  slidesPerView={3}
                  grid={{
                    rows: 2,
                  }}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Grid, Pagination]}
                  className="mySwiper"
                  style={{   width: '100%',
                    height: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto'}}
                >
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper1} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper2} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper3} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper4} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper5} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper6} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper7} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper8} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper9} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide style={{ 
                textAlign: 'center', 
                fontSize: '18px', 
                height: 'calc((100% - 30px) / 2)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                            <img src={swiper10} className="w-96 h-56 rounded-lg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

             <div className="relative h-fit bg-cover bg-center bg-no-repeat py-10 mt-52 md:mt-20 lg:mt-0" style={{ backgroundImage: `url(${bgv})` }}>
                <div className="absolute inset-0 bg-[#0A6847] opacity-90"></div>
                <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-48 items-center">
                    <div className="py-16 mx-10 lg:mx-0" data-aos="zoom-out-right">
                        <div className="bg-gray-50/10 p-8 rounded-lg shadow-lg z-10 backdrop-blur-lg  mb-16 lg:mb-10 transform transition duration-300 hover:scale-105">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">Visi</h2>
                            <ul className="list-disc list-inside text-sm lg:text-xl text-white text-justify mb-4">
                            Kami bercita-cita untuk menjadi pemimpin dalam industri dengan terus memberikan solusi yang inovatif dan
                            bernilai bagi klien kami. Visi kami adalah untuk menciptakan dampak positif dan berkelanjutan di masyarakat
                            melalui produk dan layanan yang kami tawarkan.
                            </ul>
                        </div>
                        <div className="bg-gray-50/10 p-8 rounded-lg shadow-lg z-10 backdrop-blur-lg transform transition duration-300 hover:scale-105">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">Misi</h2>
                            <div className="list-disc list-outside text-sm lg:text-xl text-white text-justify mb-4">
                                <li>Menyediakan layanan berkualitas yang berfokus pada kebutuhan klien.</li>
                                <li>Mengembangkan solusi inovatif yang berdampak positif bagi bisnis klien.</li>
                                <li>Menjadi mitra terpercaya bagi setiap klien dalam menghadapi tantangan bisnis masa kini.</li>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center z-10">
                        <h2 className="max-w-sm text-6xl leading-normal font-bold text-white text-center  transform transition duration-300 hover:scale-105">Visi dan Misi Fito Loka</h2>
                    </div>
                </div>
            </div>

             <div className="bg-white mt-16 px-10 lg:px-20">
                 <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
                 <div className="block lg:hidden w-[80vh] justify-center mb-10">
                         <img src={mockup} alt="Sejarah Fito Loka" className="w-[30vh] h-[20vh] transform transition duration-300 hover:scale-105 rounded-[4vh] mx-auto" />
                     </div>
                     <div className="lg:w-1/2 mr-0 lg:mr-14 max-w-xl">
                         <h2 className="text-center lg:text-left text-xl lg:text-3xl font-bold text-[#0A6847] mb-6">Sejarah Berdirinya Fito Loka</h2>
                         <p className="text-sm lg:text-lg text-justify text-[#0A6847] mb-0 lg:mb-6">
                             Fito Loka didirikan pada tahun 2024 dengan visi untuk membawa perubahan positif dalam dunia pertanian Indonesia. Berawal dari semangat untuk mengatasi tantangan yang dihadapi petani lokal, Fito Loka hadir sebagai jembatan antara teknologi modern dan praktik pertanian tradisional. Dengan dedikasi dan kerja keras, kami telah berkembang menjadi sebuah perusahaan yang tidak hanya menyediakan produk berkualitas tinggi tetapi juga memberikan solusi berkelanjutan untuk meningkatkan kesejahteraan petani.
                         </p>
                     </div>
                     <div className="hidden lg:block lg:w-[80vh] justify-center px-16" data-aos="fade-down-left">
                         <img src={mockup} alt="Sejarah Fito Loka" className=" lg:w-[65vh] lg:h-[40vh] transform transition duration-300 hover:scale-105 rounded-[4vh]" />
                     </div>
                 </div>
             </div>
            

             <div className="relative bg-white mt-2 h-fit">
                 <div className="flex flex-col lg:flex-row justify-center items-center my-10">
                     <div className="container mx-5 max-w-sm lg:mx-4 lg:max-w -xl mb-4 lg:mb-10">
                         <div className="max-w-lg mx-auto justify-center" data-aos="fade-up">
                            <Chart />
                         </div>
                         <p className="text-sm text-gray-500 text-center">Data Penggunaan Layanan Fito Loka 2024</p>
                     </div>
                     <div className="text-[#0A6847] px-2 py-5 max-w-2xl ml-0 lg:ml-10">
                         <h1 className="text-xl text-center lg:text-start lg:text-2xl font-bold mb-4">Kami terus berkembang</h1>
                         <p className="text-sm lg:text-lg text-justify mx-10 lg:mx-0 mb-10">Fito Loka selalu berkomitmen untuk menyediakan solusi pertanian yang inovatif dan berkelanjutan bagi para petani di Jawa Timur. Dengan memanfaatkan teknologi terkini, kami terus berupaya meningkatkan kualitas pelayanan, dari pendistribusian benih unggul hingga pemberian edukasi terkait teknik bercocok tanam yang efisien.   
                         </p>
                     </div>
                 </div>
             </div>

             <div className="relative bg-[#0A6847] pt-20 pb-6 h-fit">
                 <div className="container mx-auto px-4 text-center">
                     <h2 className="text-3xl text-white md:text-4xl font-bold mb-4 lg:mb-6">Mengapa Memilih Fito Loka?</h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center py-8 px-6 lg:px-3">
                     <div className=" p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }} >
                         <h2 className="text-[#0A6847] text-xl font-semibold">Produk Berkualitas</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">Kami menyediakan produk pertanian berkualitas tinggi yang telah teruji dan terbukti meningkatkan hasil panen. Fito Loka selalu berkomitmen untuk memberikan produk terbaik untuk petani Indonesia.</p>
                     </div>
                     <div className=" p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md lg:max-w-lg h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }}>
                         <h2 className="text-[#0A6847] text-xl font-semibold">Solusi Pertanian</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">Dengan memanfaatkan teknologi dan inovasi terkini, Fito Loka memberikan solusi pertanian yang modern dan efisien. Kami mendukung petani untuk menghasilkan panen yang lebih melimpah dan berkualitas.</p>
                     </div>
                     <div className="p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 max-w-md lg:max-w-md h-44 lg:h-54" style={{ backgroundImage: `url(${w})` }}>
                         <h2 className="text-[#0A6847] text-xl font-semibold">Tim Berpengalaman</h2>
                         <p className="mt-2 text-sm text-[#0A6847]">Fito Loka memiliki tim ahli yang berpengalaman di bidang pertanian. Kami siap membantu petani dengan pengetahuan dan dukungan teknis untuk mengoptimalkan hasil pertanian mereka.</p>
                     </div>
                 </div>
                <div className="flex flex-col lg:flex-row max-w-7xl items-center justify-center py-8 mx-auto">
                     <div className="hidden lg:block max-w-md transform transition duration-300 hover:scale-105">
                         <img src={ilustrasi2} data-aos='flip-right'/>
                     </div>
                     <div className="px-4 text-white lg:ml-10">
                         <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center lg:text-left">Hasil Maksimal, Pertanian Ideal</h1>
                         <p className="text-sm lg:text-2xl lg:leading-10 text-justify max-w-md lg:max-w-2xl">Dengan layanan pertanian modern dan produk yang ramah lingkungan, kami siap memberikan solusi yang efektif dan efisien untuk meningkatkan produktivitas lahan Anda. Bergabunglah bersama kami, nikmati kemudahan dalam setiap langkah bertani, dan rasakan perubahan nyata di lahan Anda. Bersama Fito Loka, menuju pertanian yang lebih baik dan berkelanjutan!</p>
                     </div>
                     <div className="block lg:hidden w-72 h-auto max-w-lg my-10 transform transition duration-300 hover:scale-105">
                         <img src={ilustrasi2} />
                     </div>
                 </div>
             </div>
           <div className="bg-white py-16 mb-20">
                 <div className="container mx-auto">
                     <h2 className="text-2xl lg:text-5xl font-bold text-center text-[#0A6847] mb-2 lg:mb-6">Tim Kami</h2>
                     <p className="text-lg lg:text-2xl text-[#0A6847] text-center mb-10 lg:mb-14 px-20 lg:px-0">Kami adalah tim yang penuh semangat, berdedikasi untuk menghadirkan inovasi dan solusi terbaik bagi klien kami.</p>
                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center px-10 lg:px-20"  data-aos="zoom-in" >
                         <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg mx-20 lg:mx-0 transform transition duration-300 hover:scale-105" >
                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                 <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                     <img src={tim1} alt="Cropped Image" className="w-full h-full object-cover" />
                                 </div>
                             </div>
                             <div className="pt-12 text-center">
                                 <h3 className="text-xl font-semibold text-[#0A6847]">Andrian Hidayat</h3>
                                 <p className="text-sm text-gray-600 mt-2">Chief Executive Officer</p>
                             </div>
                         </div>
            
                     <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-sm lg:max-w-lg mx-20 lg:mx-0 transform transition duration-300 hover:scale-105">
                         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                             <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                 <img src={tim2} alt="Cropped Image" className="w-full h-full object-cover" />
                             </div>
                         </div>
                         <div className="pt-12 text-center">
                             <h3 className="text-xl font-semibold text-[#0A6847]">Muhammad Raflish</h3>
                             <p className="text-sm text-gray-600 mt-2">Chief Operating Officer</p>
                         </div>
                     </div>
            
                         <div className="relative bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-sm lg:max-w-lg mx-20 lg:mx-0 transform transition duration-300 hover:scale-105">
                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                 <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                     <img src={tim3} alt="Cropped Image" className="w-full h-full object-cover" />
                                 </div>
                             </div>
                             <div className="pt-12 text-center">
                                 <h3 className="text-xl font-semibold text-[#0A6847]">Aprilia Vika Lestari   </h3>
                                 <p className="text-sm text-gray-600 mt-2">Chief Financial Officer</p>
                           </div>
                         </div>
            
                        <div className="relative hidden lg:block bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg transform transition duration-300 hover:scale-105">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                    <img src={tim4} alt="Cropped Image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                           <div className="pt-12 text-center">
                               <h3 className="text-xl font-semibold text-[#0A6847]">Aditya Wahyu</h3>
                               <p className="text-sm text-gray-600 mt-2">Agriculture Production Manager</p>
                           </div>
                       </div>
            
                        <div className="relative hidden lg:block bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg transform transition duration-300 hover:scale-105">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                    <img src={tim5} alt="Cropped Image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="pt-12 text-center">
                                <h3 className="text-xl font-semibold text-[#0A6847]">Agshay Jody</h3>
                                <p className="text-sm text-gray-600 mt-2">Agricultural Research Scientist</p>
                            </div>
                        </div>
            
                         <div className="relative hidden lg:block bg-[#F3F4F6] rounded-lg shadow-md p-6 mt-10 max-w-lg transform transition duration-300 hover:scale-105 ">
                             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                 <div className="w-20 h-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                     <img src={tim6} alt="Cropped Image" className="w-full h-full object-cover" />
                                 </div>
                             </div>
                             <div className="pt-12 text-center">
                                 <h3 className="text-xl font-semibold text-[#0A6847]">Ahmad Fahrul</h3>
                                 <p className="text-sm text-gray-600 mt-2">Quality Control Specialist</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
  )
}

export default AboutPage
