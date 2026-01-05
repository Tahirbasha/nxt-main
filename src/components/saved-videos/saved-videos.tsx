import { useSelector } from "react-redux";
import Video from "../video-item/video";
import SvgIons from "../constants/svg-paths";
import { IVideoDetails } from "../apis/payload-interface";
import Cookies from "js-cookie";

const SavedVideoList = () => {
    const { savedVideos } = useSelector((state: any) => state.AppData);
    const storedVideos = Cookies.get('savedVideos');
    const savedVideoList = savedVideos ? savedVideos : (storedVideos ? JSON.parse(storedVideos) : []);
    const getVideolayout = () => {
        if (!savedVideoList.length) {
            return (
                <div className="no-results-found">
                    <img src="/no-saved-videos-img.png" alt="NoVideosImage" className="no-videos-img" />
                    <h3>No Saved Videos Found.</h3>
                </div>
            );
        } else {
            return (
                <>
                    <div className="title-container">
                        <div>
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.savedLight }} />
                        </div>
                        <span>Saved Videos</span>
                    </div>
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
                </>
            );
        }
    }
    return (
        <div>
            {getVideolayout()}
        </div>
    )
}
export default SavedVideoList;