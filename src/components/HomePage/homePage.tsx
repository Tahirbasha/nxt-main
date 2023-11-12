import { homepageApi } from "../constants/apis";
import { useSelector } from "react-redux";
import Videolayout from "../Layout/video-layout";
import { useEffect, useState } from "react";

const HomePage = () => {
    const { searchBy } = useSelector((state: any) => state.LayoutReducer);
    const [videoLayoutState, setVideolayoutState] = useState<IVideolayoutState>({searchBy: ''});
    useEffect(() => {
        if (searchBy !== undefined) {
            setVideolayoutState({searchBy});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchBy]);
    return (
        <Videolayout
            title=""
            titleIcon=""
            failureImage=""
            api={homepageApi + (videoLayoutState.searchBy ? videoLayoutState.searchBy : '')}
        />
    );
}
interface IVideolayoutState {
    searchBy: string;
}
export default HomePage;