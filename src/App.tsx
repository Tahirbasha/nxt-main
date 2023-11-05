import React, { useEffect, useState } from 'react';
import './App.css';
import './theme.css';
import AppRoutes from './components/Routes/routes';
import Header from './components/Layout/Header';
import { useSelector } from 'react-redux';
import SideNav from './components/Layout/SideNav';
import AccountDetails from './components/Layout/account-details';
import Cookies from 'js-cookie';
import Login from './components/Login/login';

function App() {
  const { activeTheme, isSideNavOpen, openUserModal } = useSelector((state: any) => state.LayoutReducer);
  const initialAppState: AppState = { isAuthenticated: false };
  const [AppState, setAppState] = useState<AppState>(initialAppState);
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
