import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { login } from "../apis/api-calls";
import Cookies from "js-cookie";


const Login = () => {
    const { activeTheme } = useSelector((state: any) => state.LayoutReducer);
    const initialState: IloginPageState = { username: '', password: '' };
    const [loginState, setLoginState] = useState<IloginPageState>(initialState)
    const isDarkTheme = activeTheme === 'Dark';
    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token');
        if (jwtToken) {
            window.location.assign('/Homepage');
        }
    }, []);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loginState.username === '' || loginState.password === '') {
            document.getElementById(loginState.username === '' ? 'userName' : 'password')?.classList.add('required-field');
            return null;
        }
        const loginResponse = await login({ username: loginState.username, password: loginState.password });
        if (loginResponse.isSuccess) {
            window.location.assign('/Homepage');
        } else {
            setLoginState({ ...loginState, errorMsg: loginResponse.errorMsg });
        }
    }
    return (
            <div className="login-container col-12">
                <div className="login-form shadow px-3 py-4">
                    <div className="logo-container">
                        {isDarkTheme ?
                            <img src="..\nxt-watch-logo-dark-theme-img.png" alt="nxtwatch logo" className="app-logo" />
                            :
                            <img src="..\nxt-watch-logo-light-theme-img.png" alt="nxtwatch logo" className="app-logo" />
                        }
                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group my-3">
                                <label htmlFor="userName">USERNAME</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    placeholder="Username"
                                    value={loginState.username}
                                    onChange={(e) => {
                                        document.getElementById('userName')?.classList.remove('required-field');
                                        setLoginState({ ...loginState, username: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password">PASSWORD</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={loginState.password}
                                    onChange={(e) => {
                                        document.getElementById('password')?.classList.remove('required-field');
                                        setLoginState({ ...loginState, password: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="form-group my-3">
                                <button type="submit" className="btn btn-primary w-100">Submit</button> <br />
                                {loginState.errorMsg ?
                                    <small className="form-text text-danger"> {loginState.errorMsg} </small> :
                                    null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}
interface IloginPageState {
    username: string;
    password: string;
    errorMsg?: string
}
export default Login;