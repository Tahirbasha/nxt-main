import { useState, useEffect } from "react";
import { getHomePageVideos } from "../apis/api-calls";
import { IVideo } from "../apis/payload-interface";
import { Video } from "../VideoItem/Video";
import Loader from "../Utils/Loader";

const HomePage = () => {
    const initialHomepageState: IHomePageState = {
        isLoading: true,
        isFetchFailed: false,
        videos: []
    };
    const [homePageState, setHomePageState] = useState<IHomePageState>(initialHomepageState);
    useEffect(() => {
        getHomePageData();
    }, []);
    const getHomePageData = async () => {
        const response = await getHomePageVideos();
        if (response.isSuccess) {
            setHomePageState({ ...homePageState, isLoading: false, isFetchFailed: false, videos: response.homePageData });
        } else {
            setHomePageState({ ...homePageState, isLoading: false, isFetchFailed: true, videos: response.homePageData });
        }
    }
    if (homePageState.isLoading) {
        return <Loader/>
    } else {
        return (
            <div className="homepage-container">
                {homePageState.videos.map((eachVideo, index) => {
                    return (
                        <Video video={eachVideo} />
                    )
                })}
            </div>
        );
    }
}

interface IHomePageState {
    videos: IVideo[];
    isLoading: boolean;
    isFetchFailed: boolean;
}
export default HomePage;