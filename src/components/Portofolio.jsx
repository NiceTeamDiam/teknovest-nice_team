import React, { useEffect, useState } from 'react'
import Card1 from '../assets/img/card-portofolio1.webp' //img by https://crocodic.com/sistem-irigasi-pertanian-dengan-iot/
import Card2 from '../assets/img/card-portofolio2.webp' // img by https://medium.com/@amos.marketing/remote-sensing-technology-in-drones-af08d5bc21d3
import Card3 from '../assets/img/card-portofolio3.webp' // img by https://www.google.com/url?sa=i&url=https%3A%2F%2Fpertanian.sultengprov.go.id%2Fpertanian-modern-dengan-smart-farming%2F&psig=AOvVaw3k-lUXBSmgnHUKfVDmVNPo&ust=1727694603783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCNj0o4uC6IgDFQAAAAAdAAAAABAE
import Pin1 from '../assets/img/pin1.webp' // img by google search
import Pin2 from '../assets/img/pin2.webp' // img by google search
import Pin3 from '../assets/img/pin3.webp' // img by https://www.google.com/url?sa=i&url=https%3A%2F%2Fcyberthreat.id%2Fread%2F8982%2FRatusan-Sistem-Irigasi-Pintar-Dibiarkan-Terbuka-di-Internet-Tanpa-Kata-Sandi&psig=AOvVaw2U8axW1zJsuMpPaf5UJyk5&ust=1727688466394000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCLCFo53r54gDFQAAAAAdAAAAABAE
import Bg1 from '../assets/img/bg-porto1.webp' // img by google search
import Bg2 from '../assets/img/peta_jatim.webp' // img by canva pro
import Pin from '../assets/img/pin.webp' // img by canva pro
import Cloud from './Cloud'
import AOS from 'aos'
import 'aos/dist/aos.css';
import '@fontsource/poppins';
import { useNavigate } from 'react-router-dom'


const Portofolio = () => {

    const [activePin, setActivePin] = useState(null);
  
    useEffect(()=> {
        AOS.init({duration: 1500});
    }, []);
    
    const navigate = useNavigate();

    const goToPorto = () => {
      navigate('/portofolio');
    };

    return (
        <section>
                <div id='portofolio' className='w-full bg-cover bg-center h-full ' style={{ backgroundImage: `url(${Bg1})` }}>
                <div className='w-full bg-[#0A6847] opacity-95 py-10 lg:py-16 lg:px-16 md:px-10 px-10'>
                  <h1 className='text-shadow text-2xl lg:text-4xl leading-[60px] font-bold pb-0 lg:pb-10 flex justify-center align-center font-poppins text-white tracking-wider'>Hasil Nyata Inovasi Kami</h1> 
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:border-none sm:border-b-2 px-0 lg:px-20'>
                        <img className='w-[250px] h-[150px] lg:w-[350px] lg:h-[220px] border-yellow-400 mx-auto my-4 border-2 rounded-[50px]' data-aos='fade-right' src={Card1} alt="/" />
                        <div className='lg:ml-[-80px] lg:mr-[180px] md:mx-auto flex flex-col justify-center text-white font-poppins md:h-ful px-6 lg:px-0'>
                        <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Smart Irrigation System</h1>
                        <p className='text-justify text-sm lg:text-md'>Kami telah menerapkan sistem irigasi cerdas di lahan pertanian Jawa Timur, menggunakan sensor kelembapan dan cuaca yang terhubung ke aplikasi untuk otomatisasi penyiraman. Program ini menghemat air hingga 30% dan meningkatkan efisiensi tanaman hingga 25%.</p>
                        <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Cek Selengkapnya</button>
                        </div>
                    </div>
                    <div className='max-w-[1240px] mx-auto xl:mx-auto lg:mx-36 grid md:grid-cols-2 md:border-none sm:border-b-2 px-0 xl:px-60 lg:px-20'>
                        <img className='flex w-[250px] h-[150px] border-yellow-400 mx-auto my-4 border-2 rounded-[50px] md:hidden' data-aos='fade-left' src={Card2} alt="/" />  
                        <div className='flex flex-col justify-center text-white font-poppins md:h-full  px-6 lg:px-0'>
                        <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Drone Precision Farming</h1>
                        <p className='text-justify text-sm lg:text-md'>Kami telah memanfaatkan teknologi drone untuk pemetaan dan pemantauan lahan pertanian di Jawa Timur. Teknologi ini memungkinkan petani memantau kesehatan tanaman dan kondisi tanah dengan lebih akurat, meningkatkan hasil panen, dan mengurangi biaya operasional.</p>
                        <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Cek Selengkapnya</button>

                        </div>
                        <img className='hidden w-[350px] h-[220px] border-yellow-400 mx-auto my-4 border-2 rounded-[50px] md:flex' data-aos='fade-left' src={Card2} alt="/" />
                    </div>
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-0 lg:px-20'>
                            <img className='w-[250px] h-[150px] lg:w-[350px] lg:h-[220px] border-yellow-400 mx-auto my-4 border-2 rounded-[50px]' data-aos='fade-right' src={Card3} alt="/" />
                            <div className='lg:ml-[-80px] lg:mr-[180px] md:mx-auto flex flex-col justify-center text-white font-poppins md:h-full px-6 lg:px-0'>
                            <h1 className='text-xl lg:text-2xl font-bold py-3 tracking-wider'>Greenhouse Digital Monitor</h1>
                            <p className='text-justify text-sm lg:text-md'>Kami membangun Greenhouse teknologi di Sumatera dengan sistem pemantauan digital. Kontrol suhu, kelembapan, dan nutrisi dilakukan otomatis melalui dashboard web, membantu petani meningkatkan produksi hortikultura secara signifikan.</p>
                            <button onClick={goToPorto} className='text-white w-[200px] rounded-lg my-5 md:mx-0 flex font-thin tracking-wide underline'>Cek Selengkapnya</button>
                            </div>
                        </div>
                </div>
                </div>

                <div className='hidden lg:block'>
                    <div className="w-full bg-white mt-[-30px] font-poppins">
                        <h1 className="mx-auto md:text-4xl sm:text-3xl text-[40px] leading-[60px] mt-28 font-bold flex justify-center align-center font-poppins text-[#0A6847] tracking-wider">
                        Jejak Pertanian Modern Bersama Fito Loka
                        </h1>

                        <div
                        className="w-[900px] bg-cover h-[800px] py-[50px] mx-auto mt-[-130px]"
                        style={{ backgroundImage: `url(${Bg2})` }}
                        >
                            <div>
                            <Cloud/>
                            </div>

                        <div className="items-center justify-center flex flex-col mt-[-55vh]">
                            <img
                            className="h-[35px] w-[32px] ml-[-50px] cursor-pointer"
                            src={Pin}
                            alt="/"
                            data-aos="fade-down"
                            onMouseEnter={() => setActivePin(1)}
                            onMouseLeave={() => setActivePin(null)}
                            />
                            <img
                            className="h-[35px] w-[32px] mb-[30px] ml-[-65vh] cursor-pointer"
                            src={Pin}
                            alt="/"
                            data-aos="fade-down"
                            data-aos-delay="300"
                            onMouseEnter={() => setActivePin(2)}
                            onMouseLeave={() => setActivePin(null)}
                            />
                            <img
                            className="h-[35px] w-[32px] ms-[65vh] mt-[-20px] cursor-pointer"
                            src={Pin}
                            alt="/"
                            data-aos="fade-down"
                            data-aos-delay="600"
                            onMouseEnter={() => setActivePin(3)}
                            onMouseLeave={() => setActivePin(null)}
                            />
                        </div>

                    
                        {activePin === 1 && (
                            <div className={`w-[135px] h-[170px] ml-[57vh] mt-[-11vh] bg-[#FFDB63] p-3 rounded-[10px] shadow-lg border-[3px] border-white transition-all duration-500 ease-out transform scale-0 opacity-0 ${
                                activePin === 1 ? 'scale-100 opacity-100' : ''
                            }`} >
                            <img src={Pin1} alt="Card 1" className="mx-auto w-[98px] h-[67px]" />
                            <p className="mt-1 text-[8px] p-2 font-semibold text-[#0A6847]">
                                Green house di Desa Kedungkendo, Kecamatan Candi, Kabupaten Sidoarjo
                            </p>
                            </div>
                        )}

                        {activePin === 2 && (
                            <div className={`w-[140px] h-[170px] ml-[28vh] mt-[-5vh] bg-[#FFDB63] p-3 rounded-[10px] shadow-lg border-[3px] border-white transition-all duration-500 ease-out transform scale-0 opacity-0 ${
                                activePin === 2 ? 'scale-100 opacity-100' : ''
                            }`}>
                            <img src={Pin2} alt="Card 1" className="mx-auto w-[98px] h-[67px]" />
                            <p className="mt-1 text-[8px] p-2 font-semibold text-[#0A6847]">
                                Monitoring perkebunan jeruk dengan drone di Desa Pitu, Kecamatan Pitu, Kabupaten Ngawi.</p>
                            </div>
                        )}

                        {activePin === 3 && (
                            <div className={`w-[135px] h-[170px] ml-[93vh] mt-[2vh] bg-[#FFDB63] p-3 rounded-[10px] shadow-lg border-[3px] border-white transition-all duration-500 ease-out transform scale-0 opacity-0 ${
                                activePin === 3 ? 'scale-100 opacity-100' : ''
                            }`}>
                            <img src={Pin3} alt="Card 1" className="mx-auto w-[98px] h-[67px]" />
                            <p className="mt-1 text-[8px] p-2 font-semibold text-[#0A6847]">
                                Teknologi penyiraman  modern perkebunan teh di Kecamatan Lekok, Pasuruan.
                            </p>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
            </section>  
            );
        };
          

export default Portofolio
