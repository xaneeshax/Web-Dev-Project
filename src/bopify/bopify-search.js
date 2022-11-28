import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findSongBySearchTermThunk} from "./bopify-thunks";
import {userLikesSongThunk} from "../likes/likes-thunks";

const BopifySearch = () => {
    const [searchTerm, setSearchTerm] = useState('Avatar')
    const {songs, loading} = useSelector((state) => state.bopify)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findSongBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Bopify Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findSongBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    songs && songs.map((song) =>
                        <li key={song.bopifyID} className="list-group-item">
                            <i onClick={() => {
                                dispatch(userLikesSongThunk({
                                    uid: 111, mid: song.bopifyID
                                }))
                            }} className="float-end bi bi-hand-thumbs-up"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>
                            {song.Title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default BopifySearch