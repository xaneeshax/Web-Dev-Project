import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id} className="list-group-item">
                        {user.username}
                    </li>
                    )
                }
            </ul>

            <ul class="sidebar-music">
            <h2 class="sidebar-header">Your Music</h2>
                <li>Your Daily Mix</li>
                <li>Songs</li>
                {/* <div class="roww">
                    <div class="blockk">Lorem</div>
                    <div class="blockk">Ipsum</div>
                    <div class="blockk">Dolor</div>
                </div> */}
                <li>Albums</li>
                <nav>
                    <a class="link is-active" href="#">
                        <img 
                            id="pfp" 
                            src="https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521" 
                            width="150"
                        />
                    </a>
                    <a class="link is-active" href="#">
                        <img 
                            id="pfp" 
                            src="https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521" 
                            width="150"
                        />
                    </a>
                    <a class="link" href="#">Charts</a>
                    <a class="link" href="#">Genres and Moods</a>
                    <a class="link" href="#">New Releases</a>
                    <a class="link" href="#">Discover</a>
                    <a class="link" href="#">More</a>
                </nav>
                <li>Artists</li>
                <li>Favorites</li>
                <li>Recommended for You</li>
            </ul>
        </>
    )
}

export default Users