import styles from './GetStartedCard.module.scss'
import {useRef} from "react";

export default function GetStartedCard(props) {
    const card = useRef()
    const handleChangeColor = (key) => {
        if (key === 'in') {
            card.current.style.backgroundColor = `${props.color}`
        } else {
            card.current.style.backgroundColor = 'white'
        }
    }

    return (
        <div className={styles.main}
             style={{border: `2px solid ${props.color}`}}
             ref={card}
             onMouseOver={() => handleChangeColor('in')}
             onMouseOut={() => handleChangeColor('out')}
        >
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.info_category}>COMMUNITY</span>
                    <h1 className={styles.info_subject}>Explore</h1>
                    <p className={styles.info_description}>Connect with like-minded people in the community</p>
                </div>
                <div className={styles.features}>
                    <div className={styles.features_item}>
                        <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="arrow-right"/>
                        <span>Download the wallet</span>
                    </div>
                    <div className={styles.features_item}>
                        <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="arrow-right"/>
                        <span>Buy IOTA</span>
                    </div>
                    <div className={styles.features_item}>
                        <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="arrow-right"/>
                        <span>Build with us</span>
                    </div>
                    <div className={styles.features_item}>
                        <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="arrow-right"/>
                        <span>Join the community</span>
                    </div>
                </div>
                <button className={styles.btn} style={{backgroundColor: `${props.color}`}}>START ENGAGING</button>
            </div>
        </div>
    )
}