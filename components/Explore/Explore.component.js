import styles from './Explore.module.scss'
import ExploreCard from "./component/ExploreCard/ExploreCard.component";
export default function Explore (props) {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ExploreCard mode={'static'}/>

                    {
                        props.data.map(item => {
                            return (
                                <>
                                    <ExploreCard key={item.id} mode={'dynamic'} data={item}/>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}