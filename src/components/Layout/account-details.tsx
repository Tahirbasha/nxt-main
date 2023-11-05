import { Link } from "react-router-dom";
import SvgIons from "../constants/svgPaths";

const AccountDetails = (props: AccountDetails) => {
    return (
        <div className="user-modal shadow" style={{ height: props.isOpen ? '250px' : '0px' }}>
        <ul className="user-modal-list">
            <li className="nav-item">
                <div>
                <button className="btn btn-outline-transparent" >
                    <img src="..\nxt-watch-profile-img.png" alt="profile-icon" height={30}/>
                </button>
                </div>
                <div className="account-details-container">
                    <ul>
                        <li>Tahir <br />@abcd</li>
                        <li className="text-primary">View your channel</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    );
}
interface AccountDetails {
    isOpen: boolean;
}
export default AccountDetails;