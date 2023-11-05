import { IVideo } from "../apis/payload-interface";
import SvgIons from "../constants/svgPaths";

export const Video = (props: {video: IVideo}) => {
return (
<div className="video-container">
    <div>
    <img src={props.video.thumbnailUrl} alt="thumbnail" className="thumbnail"/>
    </div>
    <div className="video-card">
        <div><img src={props.video.profileImg} alt="channelImage" className="channel-image"/></div>
        <div>
            <div className="video-info">
                <div>{props.video.title}</div>
                <div>{props.video.name}</div>
                <span>{props.video.viewCount}
                <span dangerouslySetInnerHTML={{__html: SvgIons.dot}} />
                {props.video.publishedTime}</span>
            </div>
        </div>
    </div>
    {/* {props.video.name ? 
    <ul className="video-card">
        <li><img src={props.video.profileImg} alt="channelImage" className="channel-image"/></li>
        <li>
            <ul className="video-info">
                <li>{props.video.title}</li>
                <li>{props.video.name}</li>
                <li>{props.video.viewCount}
                <span dangerouslySetInnerHTML={{__html: SvgIons.dot}} />
                {props.video.publishedTime}</li>
            </ul>
        </li>
    </ul>
    : null
    } */}
</div>
);
};