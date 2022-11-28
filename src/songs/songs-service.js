import axios from "axios";
const SONG_API_URL = 'http://localhost:4000/songs'

export const createSong = async (newSong) => {
    const response = await axios.post(SONG_API_URL, newSong)
    const actualSong = response.data
    return actualSong
}
export const findAllSongs = async () => {
    const response = await axios.get(SONG_API_URL)
    const songs = response.data
    return songs
}
export const updateSong = async () => {}
export const deleteSong = async (mid) => {
    const response = await axios.delete(`${SONG_API_URL}/${mid}`)
    const status = response.data
    return mid;
}