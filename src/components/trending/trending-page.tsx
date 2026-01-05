import { trendingApi } from "../constants/apis";
import SvgIons from "../constants/svg-paths";
import Videolayout from "../layout/video-layout";

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