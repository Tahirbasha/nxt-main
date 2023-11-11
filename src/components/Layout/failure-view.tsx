import Cookies from "js-cookie";

const FailureView = () => {
    const isDarkTheme = Cookies.get('theme') === 'Dark';
    return (
        <div className="failure-view">
        {isDarkTheme ?
            <img src="..\failure-view-light-theme-img.png" alt="something went wrong" className="failure-image" />
            :
            <img src="..\failure-view-dark-theme-img.png" alt="something went wrong" className="failure-image" />
        }
        <h3>Oops! Something Went Wrong</h3>
        <p>We are having some trouble to complete your request. Please try again.</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Retry</button>
    </div>
    );
}
export default FailureView;