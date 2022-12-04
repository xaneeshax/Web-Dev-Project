import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createSongsThunk, deleteSongThunk, findAllSongsThunk} from "./songs-thunks";
import {userLikesSongThunk} from "../likes/likes-thunks";
import "./index.css";

const Songs = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {songs} = useSelector((state) => state.songs)
    const [song, setSong] = useState({title: 'New songs'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllSongsThunk())
    }, [])
    return(
        <div className="page">
            <h1>Songs</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createSongsThunk(
                            {
                                title: song.title
                            }
                        ))
                    }}>Create</button>
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setSong({...song, title: e.target.value})}
                        value={song.title}/>
                </li>
                {
                    songs.map((song) =>
                        <li className="list-group-item"
                            key={song._id}>
                            <i onClick={() => {
                                dispatch(deleteSongThunk(song._id))
                            }}
                                className="bi bi-trash float-end"></i>

                            <i onClick={() => {
                                dispatch(userLikesSongThunk({
                                    uid: 111, mid: song._id
                                }))
                            }} className="float-end bi bi-hand-thumbs-up me-2"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>


                            {song.title}
                        </li>
                    )
                }
            </ul>

            <h1>Browse</h1>
            <nav class="main-nav">
                <a class="link is-active" href="#">Overview</a>
                <a class="link" href="#">Charts</a>
                <a class="link" href="#">Genres and Moods</a>
                <a class="link" href="#">New Releases</a>
                <a class="link" href="#">Discover</a>
                <a class="link" href="#">More</a>
            </nav>

            <h2>Featured Lists</h2>
            <ul class="music-list">
                <li class="music-list-item">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title">How Can I Forget</h3>
                    <p class="song-creator">MKTO, Ryan Riback</p>
                </li>
                <li class="music-list-item">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title">How Can I Forget</h3>
                    <p class="song-creator">MKTO, Ryan Riback</p>
                </li>
                <li class="music-list-item">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title">How Can I Forget</h3>
                    <p class="song-creator">MKTO, Ryan Riback</p>
                </li>
                <li class="music-list-item">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title">How Can I Forget</h3>
                    <p class="song-creator">MKTO, Ryan Riback</p>
                </li>
                {/* <li class="music__list-item"><span class="song__title">Just Go</span><span class="song__creator">The Goes</span></li>
                <li class="music__list-item"><span class="song__title">Fanboy</span><span class="song__creator">Young Joe</span></li>
                <li class="music__list-item"><span class="song__title">Fly</span><span class="song__creator">20 Cent</span></li>
                <li class="music__list-item"><span class="song__title">Jill</span><span class="song__creator">Don't Even</span></li>
                <li class="music__list-item"><span class="song__title">Home and Country</span><span class="song__creator">Wandering Ants</span></li>
                <li class="music__list-item"><span class="song__title">Victor Knows</span><span class="song__creator">The Creatives</span></li>
                <li class="music__list-item"><span class="song__title">Roadtrippin'</span><span class="song__creator">The Wayfarers</span></li>
                <li class="music__list-item"><span class="song__title">However You Want</span><span class="song__creator">The Shilts</span></li>
                <li class="music__list-item"><span class="song__title">Just Say Yes</span><span class="song__creator">The Tweeters</span></li>
                <li class="music__list-item"><span class="song__title">New York</span><span class="song__creator">V2</span></li>
                <li class="music__list-item"><span class="song__title">Hallowed Grounds</span><span class="song__creator">Paper and Pencil</span></li>
                <li class="music__list-item"><span class="song__title">Fanboy</span><span class="song__creator">Young Joe</span></li>
                <li class="music__list-item"><span class="song__title">Roadtrippin'</span><span class="song__creator">The Wayfarers</span></li>
                <li class="music__list-item"><span class="song__title">Victor Knows</span><span class="song__creator">The Creatives</span></li>
                <li class="music__list-item"><span class="song__title">Home and Country</span><span class="song__creator">Wandering Ants</span></li>
                <li class="music__list-item"><span class="song__title">Hallowed Grounds</span><span class="song__creator">Paper and Pencil</span></li>
                <li class="music__list-item"><span class="song__title">Springtime Forever</span><span class="song__creator">Near and Far</span></li>
                <li class="music__list-item"><span class="song__title">Love Song</span><span class="song__creator">The Sprints</span></li>
                <li class="music__list-item"><span class="song__title">Say It Ain't So</span><span class="song__creator">The Three Beards</span></li>
                <li class="music__list-item"><span class="song__title">She Goes</span><span class="song__creator">The Kilts</span></li> */}
            </ul>

        </div>
    )
}

export default Songs;