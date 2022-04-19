import styles from './NewsCard.module.scss'
import {BASE_URL} from "../../configs/variables.cofig";

export default function NewsCard(props) {
    return (
        <>
            {
                props.news.map(item => {
                    return (
                    <div className={styles.card} key={item.id}>
                        {
                            !!item.image &&
                            <div className={styles.image}>
                                <img src={`${BASE_URL}${item.image}`} alt=""/>
                            </div>
                        }
                        <div className={styles.infoText}>
                            <span className={styles.infoText_category}>{item.category}</span>
                            <h5 className={styles.infoText_subject}>{item.subject}</h5>
                            {
                                !!item.description &&
                                <p className={styles.infoText_description}>{item.description}</p>
                            }
                        </div>
                    </div>
                    )
                })
            }
        </>

    )
}