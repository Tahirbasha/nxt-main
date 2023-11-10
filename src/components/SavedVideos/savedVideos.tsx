import { useSelector } from "react-redux";
import Video from "../VideoItem/Video";
import SvgIons from "../constants/svgPaths";
import { IVideoDetailedInfoState } from "../VideoItem/videoDetailedPage";
import { IVideoDetails } from "../apis/payload-interface";

const SavedVideoList = () => {
    const { savedVideos } = useSelector((state: any) => state.AppData);
    const storedVideos = localStorage.getItem('savedVideos');
    const savedVideoList = savedVideos ? savedVideos : (storedVideos ? JSON.parse(storedVideos) : []);
    const getVideolayout = () => {
        if (!savedVideoList.length) {
            return <h1>No Videos Saved</h1>
        } else {
            return (
                <div className="layout-container">
                    {savedVideoList.map((eachVideo: IVideoDetails) => {
                        return (
                            <Video 
                                video={eachVideo} 
                                isSavedVideo={true}
                            />
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