import React, {useRef, useEffect, useState} from "react";
import SwiperCore, {
    Navigation,
    HashNavigation,
    Scrollbar,
    A11y, Autoplay,
    EffectFade,
} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";
import NewsCard from "../NewsCard/NewsCard.component";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/bundle';


import styles from './Slider.module.scss'

SwiperCore.use([Navigation, Autoplay, HashNavigation, Scrollbar, EffectFade, A11y]);

export default function Slider(props) {
    const swiperRef = useRef(null);
    const buttonRef = useRef(null);

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

    const nextSlide = () => {
        console.log("click next", swiperRef.current);
        swiperRef.current.swiper.slideNext();
    };
    const toSlide = (num) => {
        console.log("go to slide", num);
        swiperRef.current.swiper.slideTo(num - 1);
        setActiveSlide(num)
    };

    const handleAutoPlay = async (realIndex) => {
        console.log(realIndex + 1)
        console.log('hajiii avaz shod ', swiperRef.current.swiper.realIndex + 1)
        await setActiveSlide(realIndex + 1)

        const play = document.getElementById(`video-${+realIndex + 1}`)
        play.currentTime = 0;
        await play.play();
    }


    // const handleAutoPlayFirst = (fsRealIndex) => {
    //     const firstElement = document.getElementById(`firstSlideVid-${fsRealIndex+1}`)
    //     firstElement.currentTime = 0;
    //     firstElement.play();
    //     // console.log(fsRealIndex)
    // }

    // useEffect(async() => {
    //     console.log(activeSlide)
    //     const element = document.getElementById(`video-${+activeSlide}`)
    //     console.log(element)
    //     element.currentTime = 0;
    //     await element.play();
    // }, [activeSlide])


    return (

        <>
            {
                props.mode === 'first' ?
                    <Swiper
                        // id="main"
                        ref={swiperRef}
                        slidesPerView={"auto"}
                        loop={true}
                        loopedSlides={3}
                        runCallbacksOnInit={true}
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
                                    <SwiperSlide key={item.id}>
                                        <video
                                            src={item.path}
                                            id={`firstSlideVid-${item.id}`}
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
                    </Swiper> :
                    <Swiper
                        // id="main"
                        ref={swiperRef}
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

                        <hr/>

                        {/*<div className={styles.filter}></div>*/}
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
                                                <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt=""/>
                                            </div>
                                            <div className={styles.subject_dot}></div>
                                            <div className={styles.subject_hoverCircle}></div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/*<SwiperSlide>*/}
                        {/*    <video*/}
                        {/*        src={'/assets/videos/Home_4.webm'}*/}
                        {/*        muted*/}
                        {/*        autoPlay={true}*/}
                        {/*        loop*/}
                        {/*    >maraz*/}
                        {/*    </video>*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <video*/}
                        {/*        src={'/assets/videos/Home_5.webm'}*/}
                        {/*        muted*/}
                        {/*        autoPlay={false}*/}
                        {/*        loop*/}
                        {/*    >maraz*/}
                        {/*    </video>*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <video*/}
                        {/*        src={'/assets/videos/Home_6.webm'}*/}
                        {/*        muted*/}
                        {/*        autoPlay={true}*/}
                        {/*        loop*/}
                        {/*    >maraz*/}
                        {/*    </video>*/}
                        {/*</SwiperSlide>*/}


                        {
                            compeleteData.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        {/*{console.log(activeSlide)}*/}
                                        {/*{console.log(+item.id)}*/}


                                        <video
                                            className={`second-slider-videos`}
                                            id={`video-${+item.id}`}
                                            src={item.path}
                                            muted
                                            autoPlay={true}
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
                                                                        src="/assets/images/fingerprint-svgrepo-com.svg"
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


                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
            }
        </>
    );
}


