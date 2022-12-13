import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createSongsThunk, deleteSongThunk, findAllSongsThunk} from "./songs-thunks";
import {userLikesSongThunk} from "../likes/likes-thunks";
import "./index.css"

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

            <hr></hr>
            <h2>New Releases</h2>
            <ul class="musiclist-main">
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
            </ul>

            <hr></hr>
            <h2>Top Charts</h2>
            <ul class="musiclist-main">
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
            </ul>

            <hr></hr>
            <h2>Trending Genres</h2>
            <ul class="musiclist-main">
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
            </ul>

            <hr></hr>
            <h2>Discover</h2>
            <ul class="musiclist-main">
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
                <article class="music-list-item-main">
                    <img src="https://images.genius.com/6ec7f3034fb593d32f3298f21aa35245.500x500x1.jpg"/>
                    <h3 class="song-title-main">How Can I Forget</h3>
                    <p class="song-creator-main">MKTO, Ryan Riback</p>
                </article>
            </ul>
        </div>
    )
}

export default Songs;