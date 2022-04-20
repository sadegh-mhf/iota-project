import Slider from "../components/Slider/Slider.component";
import Introduce from "../components/Introduce/Introduce.component";
import GetStarted from "../components/GetStarted/GetStarted.component";
import Explore from "../components/Explore/Explore.component";
import {getFirstSliderData} from "./api/getData";
import axios from "axios";
import AboutIOTA from "../components/AboutIOTA/AboutIOTA.component";

function Home(props) {
    const {firstSliderData, fsNewsData, getStartedData, exploreData} = props
    return (
        <div>
            <Slider data={firstSliderData} news={fsNewsData}/>
            <AboutIOTA />
            <Introduce/>
            <GetStarted data={getStartedData}/>
            <Explore data={exploreData}/>
        </div>
    )
}

export async function getStaticProps() {

    const firstSliderData = await getFirstSliderData('first-slider')
    console.log(firstSliderData)
    const fsNewsData = await getFirstSliderData('first-slider-news')
    const getStartedData = await getFirstSliderData('get-started')
    const exploreData = await getFirstSliderData('explore')
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