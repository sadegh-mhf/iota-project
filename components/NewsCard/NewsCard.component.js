import styles from './NewsCard.module.scss'

export default function NewsCard(props) {
    return (
        <>
            <div className={styles.card}>
                <img src={'/assets/images/instagram-svgrepo-com (1).svg'} alt=""/>
                <div className={styles.infoText}>
                    <span className={styles.infoText_category}>DISCOVER</span>
                    <h5 className={styles.infoText_subject}>VIDEOS & PODCASTS</h5>
                    <p className={styles.infoText_description}>Listen to the latest news and updates from the IOTA
                        Foundation</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={'/assets/images/instagram-svgrepo-com (1).svg'} alt=""/>
                <div className={styles.infoText}>
                    <span className={styles.infoText_category}>DISCOVER</span>
                    <h5 className={styles.infoText_subject}>VIDEOS & PODCASTS</h5>
                    <p className={styles.infoText_description}>Listen to the latest news and updates from the IOTA
                        Foundation</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={'/assets/images/instagram-svgrepo-com (1).svg'} alt=""/>
                <div className={styles.infoText}>
                    <span className={styles.infoText_category}>DISCOVER</span>
                    <h5 className={styles.infoText_subject}>VIDEOS & PODCASTS</h5>
                    <p className={styles.infoText_description}>Listen to the latest news and updates from the IOTA
                        Foundation</p>
                </div>
            </div>
        </>

    )
}