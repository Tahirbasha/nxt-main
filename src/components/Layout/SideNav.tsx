import { Link } from "react-router-dom";
import SvgIons from "../constants/svgPaths";

const SideNav = (props: SideNavProps) => {
    return (
        <div className={`sidenav col-12 ${props.isOpen ? 'sidenav-width' : 'sidenav-shrink' }`}>
            <ul className="side-navbar">
                <li className="nav-item">
                    <Link className="nav-link" to="/Homepage">
                        <button className="btn btn-outline-transparent">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.homeLight }} />
                            {props.isOpen ? <span className="mx-2">Home</span> : null}
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Trending">
                        <button className="btn btn-outline-transparent">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.trendingLight }} />
                            {props.isOpen ? <span className="mx-2">Trending</span> : null}
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Gaming">
                        <button className="btn btn-outline-transparent">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.gameLight }} />
                            {props.isOpen ? <span className="mx-2">Gaming</span> : null}
                        </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Saved">
                        <button className="btn btn-outline-transparent">
                            <span dangerouslySetInnerHTML={{ __html: SvgIons.savedLight }} />
                            {props.isOpen ? <span className="mx-2">Saved Videos</span> : null}
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

interface SideNavProps {
    isOpen: boolean
}

export default SideNav;