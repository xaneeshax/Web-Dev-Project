import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createSongsThunk, deleteSongThunk, findAllSongsThunk} from "./songs-thunks";
import {userLikesSongThunk} from "../likes/likes-thunks";

const Songs = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {songs} = useSelector((state) => state.songs)
    const [song, setSong] = useState({title: 'New songs'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllSongsThunk())
    }, [])
    return(
        <>
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
        </>
    )
}

export default Songs;