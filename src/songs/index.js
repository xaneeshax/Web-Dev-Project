import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {createSongsThunk, deleteSongThunk, findAllSongsThunk} from "./songs-thunks";
import {userLikesSongThunk} from "../likes/likes-thunks";
import "./index.css"
import {Container} from "react-bootstrap";

const Songs = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {songs} = useSelector((state) => state.songs)
    const [song, setSong] = useState({title: 'New songs'})
    const [artistId, setArtistId] = useState('');
    const [artistSongs, setArtistSongs] = useState(null);
    const [artistAlbums, setArtistAlbums] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState(null);

    const dispatch = useDispatch()
    const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=8f42d26f7e9048f0aec9eb23f33978d2&response_type=token&show_dialog=true&redirect_uri=http://localhost:3000/&scope=streaming';

    useEffect(() => {
        const queryString = window.location.hash;
        let accessToken;

        if (queryString) {
            const queryList = queryString.replace('#', '').split('&');
            let accessString = queryList[0];
            accessString = accessString.split('=')[1];
            accessToken = accessString;
        }

        console.log(accessToken);
        const searchParams = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }

        fetch('https://api.spotify.com/v1/search?q=Lady+Gaga&type=artist', searchParams)
            .then(response => response.json())
            .then(data => {
                setArtistId(data.artists.items[0].id);
            });

        fetch('https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?market=US', searchParams)
            .then(response => response.json())
            .then(data => {
                setArtistSongs(data.tracks);
            });

        fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums', searchParams)
            .then(response => response.json())
            .then(data => {
                setArtistAlbums(data.items);
            });

        fetch('https://api.spotify.com/v1/artists/' + artistId + '/related-artists', searchParams)
            .then(response => response.json())
            .then(data => {
                console.log(data.artists);
                setRelatedArtists(data.artists);
            });


        dispatch(findAllSongsThunk())
    }, [])

    async function getTopTracks() {
        console.log('Search for Top Tracks');

    }
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
            <Container>
                <a className="btn btn-success float-end m-2" href={AUTH_URL}>
                    Login with Spotify
                </a>
            </Container>

            <hr></hr>
            <h2>Top Songs</h2>
            <ul className="musiclist-main">
            { artistSongs && artistSongs.map((song) => {
                return (
                    <article className="music-list-item-main">
                        <img src={song.album.images[0].url}/>
                        <h3 className="song-title-main">{song.name}</h3>
                        <b><p className="song-creator-main">{song.artists[0].name}</p></b>
                        <p className="song-creator-main">{song.album.name}</p>
                    </article>
                )
            })}
            </ul>

            <hr></hr>
            <h2>Top Albums</h2>
            <ul className="musiclist-main">
                { artistAlbums && artistAlbums.map((album) => {
                    return (
                        <article className="music-list-item-main">
                            <img src={album.images[0].url}/>
                            <h3 className="song-title-main">{album.name}</h3>
                            <b><p className="song-creator-main">{album.release_date}</p></b>
                        </article>
                    )
                })}
            </ul>

            <hr></hr>
            <h2>Related Artists</h2>
                <ul className="artistlist">
                { relatedArtists && relatedArtists.map((artist) => {
                    return (
                        <article className="artist-list-item">
                            <img className="artist-pic" src={artist.images[0].url}/>
                            <h3 className="song-title">{artist.name}</h3>
                        </article>
                    )
                })}
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