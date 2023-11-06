import { trendingApi } from "../constants/apis";
import SvgIons from "../constants/svgPaths";
import Videolayout from "../Layout/video-layout";

const Trending = () => {
    return (
        <Videolayout
            title="Trending"
            titleIcon={SvgIons.trendingLight}
            api={trendingApi}
            failureImage=""
        />
    )
}
export default Trending;