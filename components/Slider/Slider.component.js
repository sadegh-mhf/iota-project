import React, {useRef, useState, ReactDOM, useEffect} from "react";
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
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

export default function App(props) {
    const test = useRef()

    // useEffect(() => {
    //     console.log(test.current.hasOwnProperty('swiper-slide-active'))
    //     console.log(test.current.classList.contains('swiper-slide-active'))
    //     console.log(test.current.classList.contains('swiper-slide'))
    // }, [])

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
                    props.data.map(item => {
                        return (
                            <SwiperSlide  key={item.id} ref={test}>
                                <video
                                    src={item.videoPath}
                                    muted
                                    autoPlay={"autoplay"}
                                    loop
                                >{item.subject}</video>

                                <div className={styles.firstSlideInfo}>
                                    <div className={styles.varText}>
                                        <h1 className={styles.varText_title}>{item.title}</h1>
                                        <span className={styles.varText_desc}>{item.description}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className={styles.sliderFooter}>
                    <div className={styles.container}>
                        <div className={styles.related}>
                            <NewsCard news={props.news}/>
                        </div>
                    </div>
                </div>
            </Swiper>
        </>
    );
}
