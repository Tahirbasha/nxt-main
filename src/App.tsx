import React, { useEffect, useState } from 'react';
import './App.css';
import './theme.css';
import './responsive.css';
import AppRoutes from './components/Routes/routes';
import Header from './components/Layout/Header';
import { useSelector } from 'react-redux';
import SideNav from './components/Layout/SideNav';
import AccountDetails from './components/Layout/account-details';
import Cookies from 'js-cookie';
import Login from './components/Login/login';
import { Link } from 'react-router-dom';
import SvgIons from './components/constants/svgPaths';

function App() {
  const { activeTheme, isSideNavOpen, openUserModal } = useSelector((state: any) => state.LayoutReducer);
  const initialAppState: AppState = { isAuthenticated: false };
  const toggleSideNav = isSideNavOpen === undefined ? true : isSideNavOpen;
  const openUserDeatils = openUserModal === undefined ? false : openUserModal;
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    document.body.setAttribute('active-theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
            {jwtToken ? <div className="col-12 p-0">
              <Header />
              <div className="app-container col-12">
                <SideNav isOpen={toggleSideNav} />
                <div className="app-outlet">
                  <AccountDetails isOpen={openUserDeatils} />
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
            <Login/>}
        </div>
      </div>
    </div>
  );
}
interface AppState {
  isAuthenticated: boolean;
}
export default App;
