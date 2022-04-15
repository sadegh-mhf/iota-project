import styles from './Introduce.module.scss'

export default function Introduce() {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content_text}>
                        <h4 className={styles.content_text_category}>INTRODUCING</h4>
                        <h1 className={styles.content_text_subject}>IOTA Lightpaper</h1>
                        <p className={styles.content_text_explain}>
                            Increasingly, companies and startups are integrating distributed ledger technology (DLT)
                            into their business. The IOTA Lightpaper for Business provides beginners with an overview of
                            this groundbreaking technology and the benefits it delivers to business, as well as several
                            inspiring use cases.
                            <br/><br/>
                            Download the IOTA Lightpaper for Business for free and learn how DLT enables new business
                            models and cutting-edge innovation – and how you could use it:
                        </p>
                        <button className={styles.btn}>DOWNLOAD</button>
                    </div>
                    <img src="assets/images/lightpaper-media.png" alt=""/>

                </div>

            </div>
        </section>
    )
}