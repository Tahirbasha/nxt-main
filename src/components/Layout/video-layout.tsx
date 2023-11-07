import { useState, useEffect } from "react";
import { getVideos } from "../apis/api-calls";
import { IVideo } from "../apis/payload-interface";
import Video  from "../VideoItem/Video";
import Loader from "../Utils/Loader";

const Videolayout = (props: IVideolayoutProps) => {
    const initialVideolayoutState: IVideolayoutState = {
        isLoading: true,
        isFetchFailed: false,
        videos: []
    };
    const [VideolayoutState, setVideolayoutState] = useState<IVideolayoutState>(initialVideolayoutState);
    useEffect(() => {
        getVideolayoutData();
    }, [props.api]);
    const getVideolayoutData = async () => {
        const response = await getVideos(props.api);
        if (response.isSuccess) {
            setVideolayoutState({ ...VideolayoutState, isLoading: false, isFetchFailed: false, videos: response.responseData });
        } else {
            setVideolayoutState({ ...VideolayoutState, isLoading: false, isFetchFailed: true, videos: response.responseData });
        }
    }
    const getVideolayout = () => {
        if (VideolayoutState.isLoading) {
            return <Loader/>
        } else {
            return (
                <div className="layout-container">
                    {VideolayoutState.videos.map((eachVideo, index) => {
                        return (
                            <Video video={eachVideo} />
                        )
                    })}
                </div>
            );
        }
    }
    return (
        <div>
        {props.title !== "" ?<div className="title-container">
            <div>
                <span dangerouslySetInnerHTML={{__html: props.titleIcon}} />
            </div>
            <span> {props.title}</span>
        </div> : null}
        {getVideolayout()}
        </div>
    )
}

interface IVideolayoutState {
    videos: IVideo[];
    isLoading: boolean;
    isFetchFailed: boolean;
}
interface IVideolayoutProps {
    title:string;
    titleIcon: string;
    failureImage: string;
    api: string;
    searchBy?: string;
}
export default Videolayout;