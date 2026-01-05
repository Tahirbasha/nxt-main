import Videolayout from "../layout/video-layout";
import { gamingApi } from "../constants/apis";
import SvgIons from "../constants/svg-paths";

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