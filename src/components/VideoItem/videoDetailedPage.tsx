import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideoDetailedInfo } from "../apis/api-calls";
import ReactPlayer from "react-player";
import SvgIons from "../constants/svgPaths";
import { IVideoDetails, apiResponse } from "../apis/payload-interface";
import { useDispatch } from "react-redux";
import { SAVED_VIDEOS } from "../ReduxStore/app-data";
import { useSelector } from "react-redux";

const VideoDetailedInfo = () => {
    const videoId = useParams().id;
    const dispatch = useDispatch();
    const { savedVideos } = useSelector((state: any) => state.AppData);
    const initialState = {
        isLoading: false,
        isFetchFailed: false, isSaved: false,
        videoDetails: {
            id: '', title: '', videoUrl: '', thumbnailUrl: '', name: '', profileImg: '',
            subscriberCount: '', publishedTime: '', viewCount: '', description: ''
        }
    };
    const [videoDetailedInfoState, setVideoDetailedInfoState] = useState<IVideoDetailedInfoState>(initialState)
    useEffect(() => {
        setVideoDetailedInfoState({ ...videoDetailedInfoState, isLoading: true });
        getVideoDetails();
        dispatch({ type: SAVED_VIDEOS, data: savedVideos ? savedVideos :[] });
    }, []);
    const getVideoDetails = async () => {
        const response: apiResponse = await getVideoDetailedInfo(videoId);
        if (response.isSuccess && response.videoDetails) {
            setVideoDetailedInfoState({ ...videoDetailedInfoState, videoDetails: { ...response.videoDetails }, isLoading: false });
        } else {
            setVideoDetailedInfoState({ ...videoDetailedInfoState, isLoading: false, isFetchFailed: true });
        }
    }
    const handleVideoSave = () => {
        setVideoDetailedInfoState({ ...videoDetailedInfoState, isSaved: !videoDetailedInfoState.isSaved });
        if (savedVideos && savedVideos.length) {
            const existingSavedVideos = [...savedVideos];
            const videoIndex = existingSavedVideos.findIndex((each: IVideoDetailedInfoState) => each.videoDetails.id === videoDetailedInfoState.videoDetails.id);
            if (videoIndex > -1) {
                existingSavedVideos.splice(videoIndex, 1);
            } else {
                existingSavedVideos.push(videoDetailedInfoState);
            }
            dispatch({ type: SAVED_VIDEOS, data: existingSavedVideos });
        } else {
            const savedVideosArray = [];
            savedVideosArray.push(videoDetailedInfoState);
            dispatch({ type: SAVED_VIDEOS, data: savedVideosArray });
        }
    }
    return (
        <div className="video-detailed-container">
            <div className="video-player">
                <ReactPlayer
                    url={videoDetailedInfoState.videoDetails.videoUrl}
                    height={100}
                    width={100}
                />
            </div>
            <div className="video-info-container">
                <div className="py-2">
                    {videoDetailedInfoState.videoDetails.title}
                </div>
                <div>
                    <div>
                        <span>{videoDetailedInfoState.videoDetails.viewCount}
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.dot }} />
                            {videoDetailedInfoState.videoDetails.publishedTime}</span>
                    </div>
                    <ul className="video-icon-container px-2 w-25">
                        <li>
                            <button
                                className={`like-button ${videoDetailedInfoState.likeOrDislike ? 'text-primary' : ''}`}
                                onClick={() => setVideoDetailedInfoState({ ...videoDetailedInfoState, likeOrDislike: 1 })}
                            >
                                <span dangerouslySetInnerHTML={{ __html: SvgIons.like }} /> Like
                            </button>
                        </li>
                        <li>
                            <button className={`dislike-button ${videoDetailedInfoState.likeOrDislike === 0 ? 'text-warning' : ''}`}
                                onClick={() => setVideoDetailedInfoState({ ...videoDetailedInfoState, likeOrDislike: 0 })}
                            >
                                <span dangerouslySetInnerHTML={{ __html: SvgIons.dislike }} /> Dislike
                            </button>
                        </li>
                        <li>
                            <button
                                className={`save-button ${videoDetailedInfoState.isSaved ? 'text-danger' : ''}`}
                                onClick={() => handleVideoSave()}
                            >
                                <span dangerouslySetInnerHTML={{ __html: SvgIons.savedLight }} /> Save
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="d-flex py-2">
                    <div>
                        <img src={videoDetailedInfoState.videoDetails.profileImg} alt="channelImage" className="channel-image" />
                    </div>
                    <ul className="channel-info py-2">
                        <li>{videoDetailedInfoState.videoDetails.name}</li>
                        <li>{videoDetailedInfoState.videoDetails.subscriberCount}</li>
                        <li className="my-3">{videoDetailedInfoState.videoDetails.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export interface IVideoDetailedInfoState {
    videoDetails: IVideoDetails
    isLoading: boolean;
    isFetchFailed: boolean;
    likeOrDislike?: number;
    isSaved: boolean;
}

export default VideoDetailedInfo;