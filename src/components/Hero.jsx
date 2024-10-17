import React, { useEffect } from 'react'
import BgHero from '../assets/img/bg-hero1.webp' //Image by https://irrigation.org/IA/Workforce_Development/Career_Opportunities/Agriculture_Career_Pathways/IA/Workforce_Development/Career_Opportunities/Agriculture_Careers.aspx?hkey=bdb450e6-e9f8-4e7c-8419-11805628a2f3
import { ReactTyped } from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/poppins';


const Hero = () => {
    useEffect(()=> {
        AOS.init({});
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section>
      <div className="max-w-[1240px] h-[96vh]">
        <div
          className="relative w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${BgHero})` }}
        >
        
        <div className="relative w-screen bg-gradient-to-t from-[#196348] via-transparent to-transparent bg-[#001803] bg-opacity-60">
        <div className="max-w-[1240px] flex flex-col items-center text-center justify-center h-screen mx-auto">
            <div className="tracking-widest text-white">
              <h1
                className="md:text-5xl sm:text-6xl md:py-4 font-poppins font-medium text-3xl"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Selamat Datang di
                <p
                  className="md:text-6xl sm:text-7xl text-4xl font-bold font-poppins pt-4 mb-5 lg:mb-0"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  FITO
                  <span className="font-thin font-poppins">LOKA</span>
                </p>
              </h1>
            </div>
            <ReactTyped className="text-lg sm:text-xl md:text-2xl text-center font-poppins font-normal max-w-screen-md mx-8 text-white " strings={['<div class="text-center"><p>Inovasi pertanian modern yang mendukung produktivitas</p> <p> dan keberlanjutan untuk masa depan Indonesia. </p></div>']} typeSpeed={45} showCursor={false} />
          </div>
        </div>
        </div>
        </div>
  </section>
  )
}

export default Hero
