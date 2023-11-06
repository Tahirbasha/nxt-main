import { Link } from "react-router-dom";
import SvgIons from "../constants/svgPaths";
import { useDispatch } from "react-redux";
import { HOME_PAGE_SEARCHBY, TOGGLE_SIDENAV, TOGGLE_THEME, TOGGLE_USER_DETAILS } from "../ReduxStore/layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Header = () => {
    const dispatch = useDispatch();
    const { activeTheme, isSideNavOpen, openUserModal } = useSelector((state: any) => state.LayoutReducer);
    const isDarkTheme = activeTheme === 'Dark';
    const initialState: HeaderState = { isSideNavOpen: true, isModalOpen: false, searchBy: '' };
    const [HeaderState, setHeaderState] = useState<HeaderState>(initialState);
    const handleLogout = () => {
        Cookies.remove('jwt_token');
        window.location.assign('/');
    }
    const getSearchByValue = (searchBy: string) => {
        setHeaderState({...HeaderState, searchBy});
    }
    const handleSearchBy = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: HOME_PAGE_SEARCHBY, data: HeaderState.searchBy});
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button
                    className="btn btn-outline-transparent hamburger"
                    onClick={() => dispatch({ type: TOGGLE_SIDENAV, data: !isSideNavOpen })}
                >
                    <span dangerouslySetInnerHTML={{ __html: SvgIons.hamBurger }} />
                </button>
                <span className="app-logo-container">
                    <Link to="/Homepage">
                        {isDarkTheme ?
                            <img src="..\nxt-watch-logo-dark-theme-img.png" alt="nxtwatch logo" className="app-logo" />
                            :
                            <img src="..\nxt-watch-logo-light-theme-img.png" alt="nxtwatch logo" className="app-logo" />
                        }
                    </Link>
                </span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form 
                    className="d-flex search-container" 
                    role="search" 
                    onSubmit={(e) => handleSearchBy(e)}
                    >
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            onChange={(e) => getSearchByValue(e.target.value)}
                        />
                        <button className="btn btn-outline" type="submit">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.search }} />
                        </button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            {
                                isDarkTheme ?
                                    <button
                                        className="btn btn-outline-transparent"
                                        onClick={() => dispatch({ type: TOGGLE_THEME, data: 'Light' })}
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{ __html: SvgIons.lightMode }}
                                        />
                                    </button> :
                                    <button
                                        className="btn btn-outline-transparent"
                                        onClick={() => dispatch({ type: TOGGLE_THEME, data: 'Dark' })}
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{ __html: SvgIons.darkMode }}
                                        />
                                    </button>
                            }
                        </li>
                        <li className="nav-item me-3">
                            <button
                                className="btn btn-outline-transparent"
                                onClick={() => dispatch({ type: TOGGLE_USER_DETAILS, data: !openUserModal })}
                            >
                                <img src="..\nxt-watch-profile-img.png" alt="profile-icon" height={30} />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="logout-button"
                                onClick={() => setHeaderState({ ...HeaderState, isModalOpen: true })}
                            >Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {HeaderState.isModalOpen ?
                <div className="custom-modal">
                    <div className="custom-modal-body">
                        <div>
                            <p>Are you sure, you want to logout ?</p>
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => setHeaderState({ ...HeaderState, isModalOpen: false })}
                            >No
                            </button>
                            <button className="btn btn-primary mx-2" onClick={() => handleLogout()}>Yes</button>
                        </div>
                    </div>
                </div>
                : null}
        </nav>
    );
}
interface HeaderState {
    isSideNavOpen: boolean;
    isModalOpen: boolean;
    searchBy: string;
}
export default Header;