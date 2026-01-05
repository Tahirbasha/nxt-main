import { useState, useEffect } from "react";
import { getVideos } from "../apis/api-calls";
import { IVideo } from "../apis/payload-interface";
import Video from "../video-item/video";
import Loader from "../utils/loader";
import FailureView from "./failure-view";

const Videolayout = (props: IVideolayoutProps) => {
    const initialVideolayoutState: IVideolayoutState = {
        isLoading: true,
        isFetchFailed: false,
        videos: []
    };
    // const hasMounted = useRef(false);
    const [VideolayoutState, setVideolayoutState] = useState<IVideolayoutState>(initialVideolayoutState);
    const getVideolayoutData = async () => {
        const response = await getVideos(props.api);
        if (response.isSuccess) {
            setVideolayoutState({ ...VideolayoutState, isLoading: false, isFetchFailed: false, videos: response.responseData });
        } else {
            setVideolayoutState({ ...VideolayoutState, isLoading: false, isFetchFailed: true, videos: response.responseData });
        }
    }
    useEffect(() => {
        getVideolayoutData();
        // if (hasMounted.current) {
        // }
        // hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.api]);
    const getLayoutData = () => {
        switch (true) {
            case (VideolayoutState.isFetchFailed):
                return <FailureView />;
            case (!VideolayoutState.videos.length):
                return (
                    <div className="no-results-found">
                        <img src="/no-search-results-img.png" alt="no search results" className="no-videos-img" />
                        <h3>No Search Results Found</h3>
                        <p>Try different key words or remove search filter.</p>
                    </div>
                );
            default:
                return (
                    <div className="row">
                        {VideolayoutState.videos.map((eachVideo, index) => {
                            return (
                                <Video key={index} video={eachVideo} />
                            )
                        })}
                    </div>
                );

        }
    };
    const getVideolayout = () => {
        if (VideolayoutState.isLoading) {
            return <Loader />
        } else {
            return (
                <div className="layout-container">
                    {getLayoutData()}
                </div>
            );
        }
    }
    return (
        <div>
            {props.title !== "" ? <div className="title-container">
                <div>
                    <span dangerouslySetInnerHTML={{ __html: props.titleIcon }} />
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
    title: string;
    titleIcon: string;
    failureImage: string;
    api: string;
    searchBy?: string;
}
export default Videolayout;