import React, {useRef, useEffect, useState} from "react";
import SwiperCore, {Navigation, A11y, Autoplay, EffectFade,} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";
import NewsCard from "../NewsCard/NewsCard.component";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';

import styles from './Slider.module.scss'

SwiperCore.use([Navigation, Autoplay, EffectFade, A11y]);

export default function Slider(props) {
    const swiperRef = useRef(null);

    const [activeSlide, setActiveSlide] = useState(1)

    let compeleteData = [];
    if (props.mode === 'first') {
        const videoFiles = [
            {subject: 'world', path: '/assets/videos/Home_2.webm'},
            {subject: 'woman', path: '/assets/videos/Home.webm'},
            {subject: 'machine', path: '/assets/videos/Home_3.webm'}
        ]
        compeleteData = videoFiles.map((item, i) => Object.assign({}, item, props.data[i]));
    } else {
        const videoFiles = [
            {subject: 'farm', path: '/assets/videos/Home_4.webm'},
            {subject: 'car', path: '/assets/videos/Home_5.webm'},
            {subject: 'street', path: '/assets/videos/Home_8.webm'},
            {subject: 'ship', path: '/assets/videos/Home_6.webm'},
            {subject: 'girl', path: '/assets/videos/Home_7.webm'}
        ]
        compeleteData = videoFiles.map((item, i) => Object.assign({}, item, props.data[i]));
    }

    const toSlide = (num) => {
        if (num === 0) {
            num = compeleteData.length
        } else if (num > compeleteData.length) {
            num = 1
        }
        setActiveSlide(num)
        swiperRef.current.swiper.slideTo(num - 1);
    };

    const handleAutoPlay = (realIndex) => {
        setActiveSlide(realIndex + 1)
        const play = document.getElementById(`video-${+realIndex + 1}`)
        play.currentTime = 0;
        play.play();
    }

    const handleAutoPlayFirst = (fsRealIndex) => {
        setActiveSlide(fsRealIndex + 1)
        const firstElement = document.getElementById(`firstSlideVid-${fsRealIndex + 1}`)
        firstElement.currentTime = 0;
        firstElement.play();
    }

    useEffect(() => {
        toSlide(activeSlide)
    }, [activeSlide])

    useEffect(() => {
        const SliderInterval = setInterval(() => {
            setActiveSlide(prevState => prevState + 1)
        }, 7000);
        return () => clearInterval(SliderInterval);
    }, [])


    return (

        <>
            {
                props.mode === 'first' ?
                    <Swiper
                        // id="main"
                        ref={swiperRef}
                        slidesPerView={"auto"}
                        loop={true}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 7000,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        effect={'fade'}
                        onSlideChange={(swiper) => handleAutoPlayFirst(swiper.realIndex)}
                        fadeEffect={{
                            crossFade: true
                        }}
                        className="mySwiper"
                    >
                        <hr/>
                        <div className={styles.navigation}>
                            <div className={styles.container}>
                                <div className={styles.navigationContent}>
                                    <button className={styles.navigationContent_nextBtn}
                                            onClick={() => toSlide(activeSlide - 1)}>
                                        <img src="/assets/images/left-arrow-next-svgrepo-com.svg" alt="right-arrow"/>
                                    </button>
                                    <button className={styles.navigationContent_prevBtn}
                                            onClick={() => toSlide(activeSlide + 1)}>
                                        <img src="/assets/images/right-arrow-next-svgrepo-com.svg" alt="left-arrow"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {
                            compeleteData.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <video
                                            src={item.path}
                                            id={`firstSlideVid-${item.id}`}
                                            muted
                                            autoPlay={activeSlide === +item.id}
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
                    </Swiper> :
                    <Swiper
                        // id="main"
                        ref={swiperRef}
                        slidesPerView={"auto"}
                        loop={true}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 7000,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper2"
                        effect={'fade'}
                        onSlideChange={(swiper) => handleAutoPlay(swiper.realIndex)}
                        fadeEffect={{
                            crossFade: true
                        }}
                    >
                        <div className={styles.secondSliderHeader}>
                            <h4 className={styles.secondSliderHeader_subject}>INDUSTRIES</h4>
                            <h1 className={styles.secondSliderHeader_description}>IOTA Enables New Possibilities</h1>
                        </div>

                        <div className={styles.navigation}>
                            <div className={styles.container}>
                                <div className={styles.navigationContent}>
                                    <button className={styles.navigationContent_nextBtn}
                                            onClick={() => toSlide(activeSlide - 1)}>
                                        <img src="/assets/images/left-arrow-next-svgrepo-com.svg" alt="right-arrow"/>
                                    </button>
                                    <button className={styles.navigationContent_prevBtn}
                                            onClick={() => toSlide(activeSlide + 1)}>
                                        <img src="/assets/images/right-arrow-next-svgrepo-com.svg" alt="left-arrow"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <div className={styles.subjects}>
                            <div className={styles.container}>
                                <div className={styles.subjectsContent}>
                                    {
                                        props.data.map(item => {
                                            return (
                                                <div
                                                    className={activeSlide === +item.id ? styles.subjectActive : styles.subject}
                                                    key={item.id}
                                                    onClick={() => toSlide(+item.id)}>
                                                    <span className={styles.subject_text}>{item.subject}</span>
                                                    <div className={styles.subject_visit}>
                                                        <span>visit page</span>
                                                        <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg"
                                                             alt=""/>
                                                    </div>
                                                    <div className={styles.subject_dot}></div>
                                                    <div className={styles.subject_hoverCircle}></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {
                            compeleteData.map(item => {
                                return (

                                    <SwiperSlide key={item.id}>
                                        <div className={styles.filter}></div>
                                        <video
                                            className={`second-slider-videos`}
                                            id={`video-${+item.id}`}
                                            src={item.path}
                                            muted
                                            autoPlay={activeSlide === +item.id}
                                            loop
                                        >{item.subject}</video>

                                        <div className={styles.secondSlider}>
                                            <div className={styles.container}>
                                                {
                                                    item.Capabilities.map(capability => {
                                                        return (

                                                            <div className={styles.features} key={capability.id}>
                                                                <div className={styles.features_item}>
                                                                    <img
                                                                        src={capability.icon}
                                                                        className={styles.features_item_icon} alt=""/>
                                                                    <h3 className={styles.features_item_title}>{capability.title}</h3>
                                                                    <span
                                                                        className={styles.features_item_description}>{capability.description}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <button className={styles.btn}>EXPLORE MORE</button>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
            }
        </>
    );
}


