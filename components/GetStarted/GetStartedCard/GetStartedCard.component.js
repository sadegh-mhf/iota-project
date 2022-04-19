import styles from './GetStartedCard.module.scss'
import {useRef} from "react";

export default function GetStartedCard(props) {
    const card = useRef()
    const handleChangeColor = (key) => {
        if (key === 'in') {
            card.current.style.backgroundColor = `${props.data.color}`
        } else {
            card.current.style.backgroundColor = 'white'
        }
    }

    return (
        <div className={styles.main}
             style={{border: `2px solid ${props.data.color}`}}
             ref={card}
             onMouseOver={() => handleChangeColor('in')}
             onMouseOut={() => handleChangeColor('out')}
        >
            <div className={styles.content}>
                <div className={styles.info}>
                    <span className={styles.info_category}>{props.data.category}</span>
                    <h1 className={styles.info_subject}>{props.data.subject}</h1>
                    <p className={styles.info_description}>{props.data.description}</p>
                </div>

                <div className={styles.features}>
                    {props.data.features.map(feature => {
                        return (
                            <div className={styles.features_item}>
                                <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="arrow-right"/>
                                <span>{feature}</span>
                            </div>
                        )
                    })}
                </div>

                <button className={styles.btn} style={{backgroundColor: `${props.data.color}`}}>{props.data.button}</button>
            </div>
        </div>
    )
}