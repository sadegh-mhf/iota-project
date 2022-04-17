import styles from './Explore.module.scss'
import ExploreCard from "./component/ExploreCard/ExploreCard.component";
export default function Explore () {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ExploreCard mode={'static'}/>
                    <ExploreCard mode={'dynamic'}/>
                    <ExploreCard mode={'dynamic'}/>
                    <ExploreCard mode={'dynamic'}/>
                    <ExploreCard mode={'dynamic'}/>
                    <ExploreCard mode={'dynamic'}/>
                </div>
            </div>
        </section>
    )
}