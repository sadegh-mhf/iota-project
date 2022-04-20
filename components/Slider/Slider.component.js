import React, {useRef, useState, ReactDOM, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';

import styles from './Slider.module.scss'
import {Autoplay, Navigation} from "swiper";
import NewsCard from "../NewsCard/NewsCard.component";

export default function App(props) {
    const test = useRef()

    let videoFiles = [
        {subject: 'world', path: '/assets/videos/Home_2.webm'},
        {subject: 'woman', path: '/assets/videos/Home.webm'},
        {subject: 'machine', path: '/assets/videos/Home_3.webm'}
    ]

    let compeleteData = videoFiles.map((item, i) => Object.assign({}, item, props.data[i]));

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
                    compeleteData.map(item => {
                        return (
                            <SwiperSlide  key={item.id} ref={test}>
                                <video
                                    src={item.path}
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
