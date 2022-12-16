import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import ThoughtsList from "./tuits/ThoughtsList";
import Thoughts from "./thoughts";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}!</h2>
            }
            <button 
                onClick={handleLogoutBtn}
                className="btn btn-primary w-30"
            >
                Logout
            </button>
            <div class="spacer-small"></div>

            <h3>Top Artists</h3>
            <ul class="artistlist">
                <article class="artist-list-item">
                    <img class="artist-pic" src="https://i.scdn.co/image/ab6761610000e5eb46e7a06fa6dfefaed6a3f0db"/>
                    <h3 class="song-title">Shawn Mendes</h3>
                </article>
                <article class="artist-list-item">
                    <img class="artist-pic" src="https://i.scdn.co/image/ab6761610000e5eb46e7a06fa6dfefaed6a3f0db"/>
                    <h3 class="song-title">Shawn Mendes</h3>
                </article>
                <article class="artist-list-item">
                    <img class="artist-pic" src="https://i.scdn.co/image/ab6761610000e5eb46e7a06fa6dfefaed6a3f0db"/>
                    <h3 class="song-title">Shawn Mendes</h3>
                </article>
                <article class="artist-list-item">
                    <img class="artist-pic" src="https://i.scdn.co/image/ab6761610000e5eb46e7a06fa6dfefaed6a3f0db"/>
                    <h3 class="song-title">Shawn Mendes</h3>
                </article>
                <article class="artist-list-item">
                    <img class="artist-pic" src="https://i.scdn.co/image/ab6761610000e5eb46e7a06fa6dfefaed6a3f0db"/>
                    <h3 class="song-title">Shawn Mendes</h3>
                </article>
            </ul>
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
            
            <h3>Song Board</h3>
            {/* <Thoughts />
            <ThoughtsList /> */}
        </>

        

        
    )
}
export default Profile