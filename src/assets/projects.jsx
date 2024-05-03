import React from "react";
import ass from "./Images/assistant.jpg"
import calci from "./Images/calci.png"
import tic from "./Images/tic.png"
import game from "./Images/alienhunter.jpg"
import { Link } from "react-router-dom"
import brick from "./Images/brick.jpg"
import rock from "./Images/paper.png"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import ReactCurvedText from "react-curved-text";
export default function Project() {

  return (
    <>
      <div className="  bg-gradient-to-l from-blue-300 to-red-300  p-5 h-screen lg:h-full ">
        <div className="gap-5 p-3 flex flex-col items-center">
            <h1 className="font-bold text-3xl lg:text-5xl text-white  pb-2 ">Web Projects</h1>
          <div className="flex gap-5 lg:gap-10">
            <div className="flex flex-col  w-[8.5rem]  lg:h-80 lg:w-64 relative items-center  transition-all ease-in-out duration-700 hover:scale-110  ">
              <img src={rock} alt="" className="h-full rounded-xl  " />
              <div className="absolute w-[90%]  lg:w-5/6 bg-white items-center flex flex-col rounded-md -bottom-6 lg:-bottom-2 drop-shadow-xl text-sm text-center lg:text-lg ">
                <h1>Rock Paper Scissor Game</h1>
                <Link to={"https://rohitsinghpanwar.github.io/Rock-Paper-Scissor-game/"} className=" underline underline-offset-2 text-red-600 pb-1">Check it now</Link>
              </div>

            </div>
            <div className="flex flex-col w-[8.5rem]  lg:h-80 lg:w-64 relative items-center  transition-all ease-in-out duration-700   hover:scale-110">
              <img src={calci} alt="" className="h-full rounded-xl  " />
              <div className="absolute w-[90%] lg:w-5/6 bg-white items-center flex flex-col rounded-md -bottom-6 lg:-bottom-2 drop-shadow-xl  lg:text-lg text-sm text-center">
                <h1>Calculator Minor Project </h1>
                <Link to={"https://rohitsinghpanwar.github.io/Calculator/"} className=" underline underline-offset-2 text-red-600 pb-1">Check it now</Link>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 pr-5 pt-10 ">
          <h1 className=" font-bold text-3xl lg:text-5xl text-white pb-2">Python Projects</h1>
          <Swiper style={{display:"flex"}}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={0}
            slidesPerView={'3'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            autoplay={{
              delay: 1000,

            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}

            className="swiper_container w-[110%] lg:w-[60%] "
          >
            <SwiperSlide>
            <div className="h-40 w-40  lg:w-64 lg:h-64 group relative">
              <img src={ass} alt="slide_image" className="rounded-xl w-full h-full " />
              <h1 className="absolute bottom-0 rounded-lg ml-3 bg-purple-600 text-white w-5/6 lg:ml-5 text-center text-lg">AI Assistant</h1>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 rounded-xl ease-in-out transition-all duration-500 group-hover:opacity-100">
              <p className="text-white text-center lg:h-full lg:w-full lg:text-lg text-sm">AI Assistant<br />Using PYTTSX3  Python Library.PYTTSX3 library converts text to speech offline and supports multiple TTS engines</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="h-40 w-40 lg:w-64 lg:h-64  group relative">
              <img src={brick} alt="slide_image" className="rounded-xl w-full h-full " />
              <h1 className="absolute bottom-0 rounded-lg bg-purple-600 text-white w-5/6 lg:ml-5 ml-3 text-center text-lg">Brick Breaker Game</h1>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 rounded-xl ease-in-out transition-all duration-500 group-hover:opacity-100">
              <p className="text-white text-center text-lg">Brick Breaker<br />Using Pygame Python Library</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="h-40 w-40 lg:w-64 lg:h-64 group relative">
              <img src={tic} alt="slide_image" className="rounded-xl w-full h-full " />
              <h1 className="absolute bottom-0 rounded-lg bg-purple-600 text-white w-5/6 lg:ml-5 ml-3 text-center text-lg">Tic-Tac-Toe Game</h1>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 rounded-xl ease-in-out transition-all duration-500 group-hover:opacity-100">
              <p className="text-white text-center lg:text-lg">Tic-Tac-Toe Game<br />Using Python Programming Logics and Array Concepts</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-40 w-40 lg:w-64 lg:h-64 group relative ">
              <img src={game} alt="slide_image" className="rounded-xl w-full h-full " />
              <h1 className="absolute bottom-0 rounded-lg bg-purple-600 text-white w-5/6 lg:ml-5 ml-3  text-center text-lg ">Alien Hunter game</h1>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 rounded-xl ease-in-out transition-all duration-500 group-hover:opacity-100">
              <p className="text-white text-center  text-lg">Alien Hunter Game <br />Using Pyame Python Library</p>
              </div>
              </div>
            </SwiperSlide>


            <div className="slider-controler ">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline" ></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper></div>
        </div>

    </>
  )
}