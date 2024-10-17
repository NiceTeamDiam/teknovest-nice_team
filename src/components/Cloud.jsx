import React, {useEffect} from 'react'
import Awan1 from '../assets/img/awan1.webp' // img by canva pro
import Awan3 from '../assets/img/awan3.webp' // img by canva pro
import Awan4 from '../assets/img/awan4.webp' // img by canva pro
import AOS from 'aos'
import 'aos/dist/aos.css';


const Cloud = () => {
  useEffect(()=> {
    AOS.init({duration: 1500});
}, []);

  return (
    <div className="relative h-screen bg-transparent">
  <img
    src={Awan3}
    alt="Cloud"
    className="absolute top-5 w-[25vh] ml-[-120px]"
    data-aos='fade-right'
  />

  <img
    src={Awan1}
    alt="Cloud"
    className="absolute top-5 left-5 w-[35vh] ml-[-50vh] mt-[20vh]"
    data-aos='fade-right' 
  />
  
  <img
    src={Awan1}
    alt="Cloud"
    className="absolute top-5 right-5 w-[35vh] mr-[-190px] mt-[20px]"
    data-aos='fade-left'
  />

  <img
    src={Awan4}
    alt="Cloud"
    className="absolute top-5 right-5 w-[30vh] mr-[-55vh] mt-[30vh]"
    data-aos='fade-left'
  />

  <img
    src={Awan4}
    alt="Cloud"
    className="absolute bottom-5 left-5 w-[38vh] ml-[-150px] mb-[-60px]"
    data-aos='fade-right' 
  />

  <img
    src={Awan1}
    alt="Cloud"
    className="absolute bottom-5 left-5 w-[38vh] ml-[-70vh] mb-[25vh]"
    data-aos='fade-right' 
  />
  
  <img
    src={Awan3}
    alt="Cloud"
    className="absolute bottom-5 right-5 w-[35vh] mr-[-50vh] mb-[13vh]"
    data-aos='fade-left'
  />

  <img
    src={Awan1}
    alt="Cloud"
    className="absolute bottom-5 right-5 w-[35vh] mr-[-180px] mb-[-140px]"
    data-aos='fade-left' 
  />
</div>

  )
}

export default Cloud
