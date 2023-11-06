import Videolayout from "../Layout/video-layout";
import { gamingApi } from "../constants/apis";
import SvgIons from "../constants/svgPaths";

const Gaming = () => {
    return (
        <Videolayout
            title="Gaming"
            titleIcon={SvgIons.gameLight}
            failureImage=""
            api={gamingApi}
        />
    )
}
export default Gaming;