import React from 'react';
import './App.css';
import Menu from "./movies/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexGenres from './genres/IndexGenres';
import LandingPage from "./movies/LandingPage";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexActors from "./actors/IndexActors";
import CreateActor from "./genres/CreateGenre";
import EditActor from "./actors/EditActor";
import CreateMovieTheater from './movietheaters/CreateMovieTheater';
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheater from "./movietheaters/IndexMovieTheaters";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";

function App() {


    return (
        <>
            <BrowserRouter>

                <Menu/>
                <div className={'container'}>
                    <Routes>
                        <Route path={'/'} element={<LandingPage/>}/>

                        <Route path={'/genres'} element={<IndexGenres/>}/>
                        <Route path={'/genres/create'} element={<CreateGenre/>}/>
                        <Route path={'/genres/edit'} element={<EditGenre/>}/>

                        <Route path={'/actors'} element={<IndexActors/>}/>
                        <Route path={'/actors/create'} element={<CreateActor/>}/>
                        <Route path={'/actors/edit'} element={<EditActor/>}/>

                        <Route path={'/movieTheaters'} element={<IndexMovieTheater/>}/>
                        <Route path={'/movieTheaters/create'} element={<CreateMovieTheater/>}/>
                        <Route path={'/movieTheaters/edit'} element={<EditMovieTheater/>}/>

                        <Route path={'/movies/create'} element={<CreateMovie/>}/>
                        <Route path={'/movies/filter'} element={<FilterMovies/>}/>
                        <Route path={'/movies/edit'} element={<EditMovie/>}/>
                    </Routes>
                </div>
            </BrowserRouter>


        </>
    )
        ;
}


export default App;
