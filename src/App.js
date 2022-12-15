import Songs from "./songs";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import BopifySearch from "./bopify/bopify-search";
import BopifyDetails from "./bopify/bopify-details";
import {likesReducer} from "./likes/likes-reducer";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import Users from "./users";
import usersReducer from "./users/users-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import songsReducer from "./songs/songs-reducer";
import bopifyReducer from "./bopify/bopify-reducer";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    bopify: bopifyReducer,
    likes: likesReducer,
    users: usersReducer
  }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
        <Provider store={store}>
          <BrowserRouter>
            <CurrentUser>
              <Navigation/>
              <Routes>
                <Route index element={<Songs/>}/>
                <Route path="/search" element={<BopifySearch/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile/>
                  </ProtectedRoute>
                }/>
                <Route path="/details/:accessToken/:songID" element={<BopifyDetails/>}/>
              </Routes>
            </CurrentUser>
          </BrowserRouter>
        </Provider>
      </div>
  );
}

export default App;
