import { homepageApi } from "../constants/apis";
import { useSelector } from "react-redux";
import Videolayout from "../Layout/video-layout";
import { useEffect, useState } from "react";

const HomePage = () => {
    const { searchBy } = useSelector((state: any) => state.LayoutReducer);
    const [videoLayoutState, setVideolayoutState] = useState<IVideolayoutState>({searchBy: ''});
    useEffect(() => {
        setVideolayoutState({searchBy});
    }, [searchBy]);
    return (
        <Videolayout
            title=""
            titleIcon=""
            failureImage=""
            api={homepageApi + videoLayoutState.searchBy}
        />
    )
}
interface IVideolayoutState {
    searchBy: string;
}
export default HomePage;