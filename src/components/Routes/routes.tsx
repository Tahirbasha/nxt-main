import {Routes, Route} from 'react-router-dom';
import Gaming from '../gaming/gaming-page';
import HomePage from '../home-page/home-page';
import Login from '../login/login';
import NotFound from '../not-found/not-found-view';
import SavedVideoList from '../saved-videos/saved-videos';
import Trending from '../trending/trending-page';
import VideoDetailedInfo from '../video-item/video-detailed-page';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<HomePage/>}/>
        <Route path="/Trending" element={<Trending/>}/>
        <Route path="/Gaming" element={<Gaming/>}/>
        <Route path="/Saved" element={<SavedVideoList/>}/>
        <Route path="/Video/:id/:type" element={<VideoDetailedInfo/>}/>
        <Route path="/NotFound" element={<NotFound/>}/>
      </Routes>
    );
}
export default AppRoutes;