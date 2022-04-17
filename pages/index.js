import Slider from "../components/Slider/Slider.component";
import Introduce from "../components/Introduce/Introduce.component";
import GetStarted from "../components/GetStarted/GetStarted.component";
import Explore from "../components/Explore/Explore.component";

export default function Home() {
    return (
        <div>
            <Slider />
            <Introduce />
            <GetStarted />
            <Explore />
        </div>
    )
}
