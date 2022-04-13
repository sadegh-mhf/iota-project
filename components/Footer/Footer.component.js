import styles from './Footer.module.scss'
import Image from 'next/image'
import socialMedia from './Footer.config';
export default function Footer() {
    return (
        <section className={styles.main}>
            <img src={'https://www.iota.org/images/footer-pattern.svg'}
                 className={styles.footerBg}
                 alt={'footer-background'}/>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1 className={styles.title_text}>IOTA Provides Digital Trust, Enabling Us to Build A Better World</h1>
                    </div>
                    <div className={styles.footerInfo}>
                        <div className={styles.footerInfo_address}>
                            <div>
                                <h4>Registered Address</h4> <br/>
                                IOTA Foundation <br/>
                                Pappelallee 78/79 <br/>
                                10437 Berlin <br/>
                                Germany
                            </div>
                        </div>
                        <div className={styles.footerInfo_privacy}>
                            <div>
                                © 2021 IOTA Foundation - <span>Privacy Policy</span>  , <span>Impressum</span> <br/>
                                Get in touch: <span>Contact Us</span> <br/>
                                Board of Directors: Dominik Schiener and Navin Ramachandran <br/>
                                ID/Company No.: 3416/1234/2 <br/>
                                EU public ID number in the EU Transparency Register: 500027331119-04 <br/>
                                VAT ID: DE329624902
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={styles.social}>
                    {socialMedia.map(item => {
                        return(
                            <li
                                key={item.label}
                                className={styles.social_network}
                                style={{backgroundColor: item.color}}
                            >
                                <img src={item.thumbnail} alt={item.label}/>
                                <h4>{item.label}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}