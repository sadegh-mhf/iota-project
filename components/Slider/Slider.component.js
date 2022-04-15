import React, {useRef, useState, ReactDOM} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';

// import "./styles.css";
import styles from './Slider.module.scss'
// import required modules
import {Autoplay, Pagination, Navigation} from "swiper";
import NewsCard from "../NewsCard/NewsCard.component";

export default function App() {
    const swiperSlider = useRef(null)
    const videoFiles = [{title: 'world', path: '/assets/videos/Home_2.webm'}, {
        title: 'woman',
        path: '/assets/videos/Home.webm'
    }, {title: 'machine', path: '/assets/videos/Home_3.webm'}]
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <hr/>
                {
                    videoFiles.map(item => {
                        return (
                            <SwiperSlide key={item.title} ref={swiperSlider}>
                                <video
                                    src={item.path}
                                    muted
                                    autoPlay={"autoplay"}
                                    loop
                                >{item.title}</video>
                                <div className={styles.firstSlideInfo}>
                                    <div className={styles.varText}>
                                        <h1 className={styles.varText_title}>title comes here</h1>
                                        <span className={styles.varText_desc}>this is description</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className={styles.sliderFooter}>
                    <div className={styles.container}>
                        <div className={styles.related}>
                            <NewsCard/>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
}
