import React, {useEffect, useState} from 'react';
import './App.css';
import {landingPageDTO} from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Menu from "./movies/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexGenres from './genres/IndexGenres';

function App() {

    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: 'Muhammad sallallohu alayhi vassallam Allohning elchisi',
                        poster: 'https://asilmedia.org/rasmlar/images/2022/05/05/4554564.jpg'
                    },

                    {
                        id: 2,
                        title: 'Islomga bag\'ishlangan umr',
                        poster: 'https://files.itv.uz/uploads/content/poster/2021/12/24/943665805b33ae91e0e515f2a488632f-q-700x1002.jpeg'
                    },

                    {
                        id: 3,
                        title: 'Yunus Emro',
                        poster: 'https://telegra.ph/file/f5a850e5ee5e507696e85.jpg'
                    },
                ],
                upcomingReleases: [
                    {
                        id: 4,
                        title: 'Rashk filmi Azon cinema mahsuloti',
                        poster: 'https://yt3.ggpht.com/ytc/AMLnZu9C8ISx47BAHDND8yZ0gtQzFckYLPtgpZkU2wz9=s900-c-k-c0x00ffffff-no-rj'
                    },
                ]
            })
        }, 1000)

        return () => clearTimeout(timerId);
    })


    return (
        <>
            <BrowserRouter>

                <Menu/>
                <div className={'container'}>
                    <Routes>
                        <Route path={'/'} element={
                           <>
                               <h3>In Theatre</h3>
                               <MoviesList movies={movies.inTheaters}/>
                               <h3>Upcoming Releases</h3>
                               <MoviesList movies={movies.upcomingReleases}/>
                           </>
                        }/>


                        <Route path={'/genres'} element={<IndexGenres/>}/>
                    </Routes>
                </div>
            </BrowserRouter>


        </>
    )
        ;
}


export default App;
