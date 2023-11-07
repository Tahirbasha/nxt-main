import { useSelector } from "react-redux";
import Video from "../VideoItem/Video";
import SvgIons from "../constants/svgPaths";
import { IVideoDetailedInfoState } from "../VideoItem/videoDetailedPage";

const SavedVideoList = () => {
    const { savedVideos } = useSelector((state: any) => state.AppData);
    const savedVideoList = savedVideos ? savedVideos : [];
    const getVideolayout = () => {
        if (!savedVideoList.length) {
            return <h1>No Videos Saved</h1>
        } else {
            return (
                <div className="layout-container">
                    {savedVideoList.map((eachVideo: IVideoDetailedInfoState) => {
                        return (
                            <Video video={eachVideo.videoDetails} />
                        )
                    })}
                </div>
            );
        }
    }
    return (
        <div>
            <div className="title-container">
                <div>
                    <span dangerouslySetInnerHTML={{ __html: SvgIons.savedLight }} />
                </div>
                <span>Saved Videos</span>
            </div>
            {getVideolayout()}
        </div>
    )
}
export default SavedVideoList;