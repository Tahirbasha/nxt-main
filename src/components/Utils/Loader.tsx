import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={Cookies.get("theme") === "Dark" ? "#fff" : "#000000"}
            ariaLabel="three-dots-loading"
            wrapperClass="loader"
            visible={true}
        />
    );
};

export default Loader;