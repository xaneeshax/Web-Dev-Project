import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import "./index.css";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Bopify Users</h1>
            <h2>Number of Users: {users.length}</h2>
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
                <hr></hr>
                <h3>Top Albums</h3>
                <ul class="musiclist">
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                    </ul>
                <hr></hr>
                <h3>Top Songs</h3>
                <ul class="musiclist">
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                    </ul>
                <hr></hr>
                <h3>Recently Played</h3>
                    <ul class="musiclist">
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                    </ul>
                <hr></hr>   
                <h3>Favorites</h3>
                <ul class="musiclist">
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                        <article class="music-list-item">
                            <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                            <h3 class="song-title">How Can I Forget</h3>
                            <p class="song-creator">MKTO, Ryan Riback</p>
                        </article>
                    </ul>
                <hr></hr> 
            </ul>
        </>
    )
}

export default Users