import { ThreeDots } from "react-loader-spinner";

const Loader = () => {

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#000000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        />
    );
};

export default Loader;