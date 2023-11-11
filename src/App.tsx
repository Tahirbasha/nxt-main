import './App.css';
import './theme.css';
import './light-theme.css';
import './responsive.css';
import React, { useEffect, useState } from 'react';
import AppRoutes from './components/Routes/routes';
import Header from './components/Layout/Header';
import SideNav from './components/Layout/SideNav';
import Login from './components/Login/login';
import { Link, useLocation } from 'react-router-dom';
import SvgIons from './components/constants/svgPaths';
import Cookies from 'js-cookie';

const App = () => {
  const [appState, setAppState] = useState<AppState>({ theme: 'Light', isSideNavOpen: true });
  useEffect(() => {
    document.body.setAttribute('active-theme', appState.theme);
  }, [appState.theme]);
  useEffect(() => {
    const theme = Cookies.get('theme');
    setAppState({ ...appState, theme: theme ? theme : 'Light' });
    if (theme === 'Light' || theme === 'Dark') {
      document.body.setAttribute('active-theme', theme);
    } else {
      document.body.setAttribute('active-theme', 'Light');
    }
  }, []);
  const getThemeFromHeader = (theme: string) => {
    Cookies.set('theme', theme, {expires: 1});
    setAppState({ ...appState, theme });
  };
  const handleSideNavToggle = () => {
    setAppState({ ...appState, isSideNavOpen: !appState.isSideNavOpen });
  };
  const { pathname } = useLocation();
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          {pathname !== '/' ? <div className="col-12 p-0">
            <Header
              getTheme={getThemeFromHeader}
              handleSideNavToggle={handleSideNavToggle}
            />
            <div className="app-container col-12">
              <SideNav isOpen={appState.isSideNavOpen} />
              <div className="app-outlet">
                <AppRoutes />
              </div>
              <div className="horizontal-navbar">
                <ul>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Homepage">
                      <button className="btn btn-outline-transparent">
                        <span dangerouslySetInnerHTML={{ __html: SvgIons.homeLight }} />
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Trending">
                      <button className="btn btn-outline-transparent">
                        <span dangerouslySetInnerHTML={{ __html: SvgIons.trendingLight }} />
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Gaming">
                      <button className="btn btn-outline-transparent">
                        <span dangerouslySetInnerHTML={{ __html: SvgIons.gameLight }} />
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Saved">
                      <button className="btn btn-outline-transparent">
                        <span dangerouslySetInnerHTML={{ __html: SvgIons.savedLight }} />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> :
            <Login />}
        </div>
      </div>
    </div>
  );
}
interface AppState {
  theme: string;
  isSideNavOpen: boolean;
}
export default App;
