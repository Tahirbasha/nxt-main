import { IVideo, IVideoDetails } from "../apis/payload-interface";
import SvgIons from "../constants/svgPaths";
import { useNavigate }  from 'react-router-dom';

const Video = (props: { video: IVideo | IVideoDetails, isSavedVideo?: boolean }) => {
    const navigate = useNavigate();
    return (
        <div className="video-container col-3 col-sm-12" onClick={() => navigate(`/Video/${props.video.id}/${props.isSavedVideo ? 'saved' : 'new'}`)}>
            <div>
                <img src={props.video.thumbnailUrl} alt="thumbnail" className="thumbnail" />
            </div>
            <div className="video-card">
                {props.video.profileImg !== '' ?
                    <div>
                        <img src={props.video.profileImg} alt="channelImage" className="channel-image" />
                    </div>
                       : null
                }
                <div>
                    <div className="video-info">
                        <div>{props.video.title}</div>
                        <div>{props.video.name}</div>
                        <span>{props.video.viewCount}
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.dot }} />
                            {props.video.publishedTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Video;