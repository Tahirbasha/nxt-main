import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoDetailedInfo } from "../apis/api-calls";

const VideoDetailedInfo = () => {
    const videoId = useParams().id;
    console.log('videoId', videoId);
    useEffect(() => {
        getVideoDetails();
    });
    const getVideoDetails = () => {
        getVideoDetailedInfo(videoId);
    }
    return <h1>VideoDetailedInfo</h1>
}
export default VideoDetailedInfo;