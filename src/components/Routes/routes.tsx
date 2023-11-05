import {Routes, Route} from 'react-router-dom';
import Gaming from '../Gaming/gamingPage';
import HomePage from '../HomePage/homePage';
import Login from '../Login/login';
import NotFound from '../NotFound/notFoundView';
import SavedVideoList from '../SavedVideos/savedVideos';
import Trending from '../Trending/trendingPage';
import VideoDetailedInfo from '../VideoItem/videoDetailedPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<HomePage/>}/>
        <Route path="/Trending" element={<Trending/>}/>
        <Route path="/Gaming" element={<Gaming/>}/>
        <Route path="/Video" element={<VideoDetailedInfo/>}/>
        <Route path="/Saved" element={<SavedVideoList/>}/>
        <Route path="/NotFound" element={<NotFound/>}/>
      </Routes>
    );
}
export default AppRoutes;