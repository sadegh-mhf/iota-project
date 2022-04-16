import styles from './GetStarted.module.scss'
import GetStartedCard from "./GetStartedCard/GetStartedCard.component";

export default function GetStarted() {

    const colors = ['#0fc1b7', '#919fb8', '#131f37']

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.category}>Get Started</h1>
                    <div className={styles.cards}>
                        {
                            colors.map((item, index) => {
                                return <GetStartedCard key={index} color={item}/>
                            })
                        }
                    </div>
                    <button className={styles.btn}>VIEW OUR PRODUCTS</button>
                </div>

            </div>

        </section>
    )
}