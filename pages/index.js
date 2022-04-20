import Slider from "../components/Slider/Slider.component";
import Introduce from "../components/Introduce/Introduce.component";
import GetStarted from "../components/GetStarted/GetStarted.component";
import Explore from "../components/Explore/Explore.component";
import {getHomePageData} from "./api/getData";
import AboutIOTA from "../components/AboutIOTA/AboutIOTA.component";

function Home(props) {
    const {firstSliderData, fsNewsData, getStartedData, exploreData} = props
    return (
        <div>
            <Slider data={firstSliderData} news={fsNewsData}/>
            <AboutIOTA/>
            <Introduce/>
            <GetStarted data={getStartedData}/>
            <Explore data={exploreData}/>
        </div>
    )
}

export async function getStaticProps() {

    const firstSliderData = await getHomePageData('first-slider')
    const fsNewsData = await getHomePageData('first-slider-news')
    const getStartedData = await getHomePageData('get-started')
    const exploreData = await getHomePageData('explore')
    return {
        props: {
            firstSliderData,
            fsNewsData,
            getStartedData,
            exploreData
        }
    }
}

export default Home