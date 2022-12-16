import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1>Login</h1>
            <hr></hr>
            <div class="spacer"></div>
            <h2>Username</h2>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <div class="spacer-small"></div>
            <h2>Password</h2>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>
            <div class="spacer-small"></div>
            <button  className="btn btn-primary w-100" onClick={handleLoginBtn}>Login</button>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <h2>Welcome to Bopify!</h2>
            <div class="spacer"></div>
            <div class="spacer"></div>

        </>
    )
}
export default Login