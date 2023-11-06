import { IVideo } from "../apis/payload-interface";
import SvgIons from "../constants/svgPaths";

export const Video = (props: { video: IVideo }) => {
    return (
        <div className="video-container" onClick={() => window.location.assign(`/Video/${props.video.id}`)}>
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