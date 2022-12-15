import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {userLikesSongThunk} from "../likes/likes-thunks";
import Login from './Login.js';

const BopifySearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {songs, loading} = useSelector((state) => state.bopify)
    const [accessToken, setAccessToken] = useState('');
    const [albums, setAlbums] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const queryString = window.location.hash;

        if (queryString) {
            const queryList = queryString.replace('#', '').split('&');
            let accessString = queryList[0];
            accessString = accessString.split('=')[1];
            setAccessToken(accessString);
        }
    }, [])

    async function search() {
        console.log('Search for ' + searchTerm);

        const searchParams = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }

        const artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist', searchParams)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id });

        console.log('Artist ID is ' + artistId);

        const albums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market=US&limit=50', searchParams)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.items);
            })

    }
    console.log(albums);
    return (
        <>
            <h1>Bopify Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <Login/>
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            search();
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
            <Container>
                <Row className="mx- row row-cols-4">
                    <Card>
                        <Card.Img src={"#"} />
                        <Card.Body>
                            <Card.Title>
                                Album here
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default BopifySearch