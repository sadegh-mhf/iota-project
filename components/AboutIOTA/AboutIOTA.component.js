import styles from './AboutIOTA.module.scss'
import Particles from 'react-particles-js';

export default function AboutIOTA() {
    return (
        <section className={styles.main}>
            <Particles />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h4 className={styles.text_category}>INTRODUCING</h4>
                        <h1 className={styles.text_subject}>An Open, Feeless Data And Value Transfer Protocol</h1>
                        <p className={styles.text_explain}>
                            IOTA has fundamentally reengineered distributed ledger technology, enabling secure exchange
                            of both value and data, without any fees.
                        </p>
                        <button className={styles.btn}>LEARN ABOUT IOTA</button>
                    </div>
                </div>
            </div>
        </section>
    )
}