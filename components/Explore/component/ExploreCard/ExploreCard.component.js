import styles from './ExploreCard.module.scss'
import {BASE_URL} from "../../../../configs/variables.cofig";

export default function ExploreCard(props) {
    return (
        <div className={styles.main}>
            {
                props.mode === 'static' ?
                    <div className={styles.static}>
                        <h4 className={styles.static_category}>EXPLORE</h4>
                        <h1 className={styles.static_subject}>IOTA Foundation</h1>
                        <p className={styles.static_info}>Learn about the deep expertise that drives the IOTA
                            Foundation</p>
                        <div className={styles.staticBtn}>
                            <span>View all departments</span>
                            <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="right-arrow"/>
                        </div>
                    </div> :

                    <div className={styles.dynamic}>
                        <img className={styles.dynamic_background} src={`${BASE_URL}${props.data.image}`} alt="card-background"/>
                        <h1 className={styles.dynamic_subject}>{props.data.subject}</h1>
                        <div className={styles.dynamic_info}>
                            <p className={styles.dynamic_info_text}>{props.data.description}</p>
                        </div>
                        <div className={styles.circle}> </div>
                        <div className={styles.dynamicBtn}>
                            <span>Learn more</span>
                            <img src="/assets/images/down-arrow-of-angle-svgrepo-com.svg" alt="right-arrow"/>
                        </div>
                    </div>
            }
        </div>
    )
}