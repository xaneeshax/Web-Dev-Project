import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    const [role, setRole] = useState('LISTENER')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, role}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <>
            <h1>Register</h1>
            <hr></hr>
            <h2>Username</h2>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <h2>Password</h2>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password}/>
            <h2>Role</h2>
            <select className='form-select' aria-label="Role Selection" onChange={(e) => setRole(e.target.value)}>
                <option selected value={'LISTENER'}>LISTENER</option>
                <option value={'ARTIST'}>ARTIST</option>
            </select>
            <div class="spacer-small"></div>
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
            <div class="spacer"></div>
            <div class="spacer"></div>
            <h2>bop bop</h2>
            <div class="spacer"></div>
            <h2>bop</h2>
        </>
    )
}
export default Register