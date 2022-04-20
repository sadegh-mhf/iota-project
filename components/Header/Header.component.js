import Image from 'next/image';
import navbarItems from './Header.config';
import styles from './Header.module.scss'

export default function Header() {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={'/assets/images/logo-icon-light.svg'}
                           alt={'logo-icon'}
                           width={50}
                           height={50}/>
                    <Image src={'/assets/images/logo-text.svg'}
                           alt={'logo-text'}
                           width={100}
                           height={50}/>
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.navbar_list}>
                        {navbarItems.map(item => {
                            return (
                                <li key={item.label} className={item.thumbnail ? `${styles.navbarHighlight}` : styles.navbar_list_menuItems}>
                                <span>
                                    {item.label}
                                </span>
                                    {
                                        item.thumbnail &&
                                        <img
                                            src={item.thumbnail}
                                            alt={item.label}
                                            className={styles.thumbnail}
                                        />
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    )
}