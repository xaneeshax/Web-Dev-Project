import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=8f42d26f7e9048f0aec9eb23f33978d2&response_type=token&show_dialog=true&redirect_uri=http://localhost:3000/search&scope=streaming';

export default function Login() {
    return (
        <div>
            <Container>
                <a className="btn btn-success float-end m-2" href={AUTH_URL}>
                    Login with Spotify
                </a>
            </Container>
        </div>
    )
}