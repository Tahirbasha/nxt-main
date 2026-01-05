import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import SvgIons from "../constants/svg-paths";
import { useDispatch } from "react-redux";
import { HOME_PAGE_SEARCHBY } from "../redux-store/layout";
import { useState, } from "react";
import Cookies from "js-cookie";

const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialState: HeaderState = { isSideNavOpen: true, isModalOpen: false, searchBy: '' };
    const [HeaderState, setHeaderState] = useState<HeaderState>(initialState);
    const handleLogout = async () => {
        setHeaderState({ ...HeaderState, isModalOpen: false });
        Cookies.remove('jwt_token');
        navigate('/', { replace: true })
    }
    const getSearchByValue = (searchBy: string) => {
        setHeaderState({ ...HeaderState, searchBy });
    }
    const handleSearchBy = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: HOME_PAGE_SEARCHBY, data: HeaderState.searchBy });
    }
    useEffect(() => {
        return () => {
            setHeaderState({ ...HeaderState, searchBy: '' });
        }
    }, []);
    return (
        <nav>
            <div className="navbar-container py-2 px-1">
                <div>
                    <button
                        className="btn btn-outline-transparent hamburger-btn"
                        onClick={() => props.handleSideNavToggle()}
                    >
                        <span dangerouslySetInnerHTML={{ __html: SvgIons.hamBurger }} />
                    </button>
                    <div className="app-logo-container">
                        <Link to="/Homepage">
                            <img src="/nxt-watch-logo-dark-theme-img.png" alt="nxtwatch logo" className="app-logo app-logo-dark" />
                            <img src="/nxt-watch-logo-light-theme-img.png" alt="nxtwatch logo" className="app-logo app-logo-light" />
                        </Link>
                    </div>
                </div>
                <div>
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
                        <button className="btn btn-outline search-icon-btn" type="submit">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.search }} />
                        </button>
                    </form>
                    <ul className="controls-container px-3">
                        <li className="nav-item me-3">
                            <button
                                className="btn btn-outline-transparent theme-btn-dark"
                                onClick={() => props.getTheme('Light')}
                            >
                                <span dangerouslySetInnerHTML={{ __html: SvgIons.lightMode }} />
                            </button>
                            <button
                                className="btn btn-outline-transparent theme-btn-light"
                                onClick={() => props.getTheme('Dark')}
                            >
                                <span dangerouslySetInnerHTML={{ __html: SvgIons.darkMode }} />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="logout-button"
                                onClick={() => setHeaderState({ ...HeaderState, isModalOpen: true })}
                            >Logout
                            </button>
                            <button
                                className="nav-logout"
                                onClick={() => setHeaderState({ ...HeaderState, isModalOpen: true })}
                            > <span dangerouslySetInnerHTML={{ __html: SvgIons.logoutLight }} />
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
interface HeaderProps {
    getTheme: (theme: string) => void;
    handleSideNavToggle: () => void;
}
export default Header;