import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import {useDispatch} from 'react-redux';
import './index.css';

const BopifySearch = () => {
    const [song, setSong] = useState(null);
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    const accessToken = parts[2];
    const songID = parts[3];

    console.log(accessToken);
    console.log(songID);

    useEffect(() => {

        const searchParams = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            }
        }

        fetch('https://api.spotify.com/v1/tracks/' + songID, searchParams)
            .then(response => response.json())
            .then(data => {
                console.log('song data');
                console.log(data);
                setSong(data);
            })

    }, [])


    return (
        <>
            <h1>Bopify Details</h1>
            { song &&
            <div>
                <h3 >{song.name}</h3>
                <img src={song.album.images[0].url}/>
                <h5 style={{color: 'white'}}>{'By: ' + song.artists[0].name}</h5>
                <h6 style={{color: 'white'}}>Release Date: {song.album.release_date}</h6>
                <h6 style={{color: 'white'}}>Album: {song.album.name}</h6>
                <h6 style={{color: 'white'}}>Track Number: {song.track_number}</h6>
                <h6 style={{color: 'white'}}>Duration: {song.duration_ms}</h6>
            </div>}
        </>
    )
}

export default BopifySearch;