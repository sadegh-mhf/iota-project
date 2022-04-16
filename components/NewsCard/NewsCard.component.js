import styles from './NewsCard.module.scss'

export default function NewsCard(props) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={'/assets/images/chrysalis-status-page.png'} alt=""/>
                </div>
                <div className={styles.infoText}>
                    <span className={styles.infoText_category}>DISCOVER</span>
                    <h5 className={styles.infoText_subject}>VIDEOS & PODCASTS</h5>
                    <p className={styles.infoText_description}>Listen to the latest news and updates from the IOTA
                        Foundation</p>
                </div>
            </div>
            <div className={styles.card}>
                {/*<div className={styles.image}>*/}
                {/*    /!*<img src={''} alt=""/>*!/*/}
                {/*</div>*/}
                <img src={''} alt=""/>
                <div className={styles.infoText}>
                    <span className={styles.infoText_category}>DISCOVER</span>
                    <h5 className={styles.infoText_subject}>VIDEOS & PODCASTS</h5>
                    <p className={styles.infoText_description}>Listen to the latest news and updates from the IOTA
                        Foundation</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={'/assets/images/IOTA_Videos_and_Podcast.jpg'} alt=""/>
                </div>
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