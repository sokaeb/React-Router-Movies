import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <nav>
        <div className='nav-links'>
          <Link to='/'>Movies</Link>
          <Link to='/SavedList'>Saved</Link>
        </div>
      </nav>
      <SavedList list={[ /* This is stretch */]} />
      
       <Switch>

          <Route path='/movie/:id'>
            <Movie movie={movie} />
          </Route>

          <Route path='/SavedList'>
            <SavedList />
          </Route>

          <Route path='/'>
            <MovieList movie={movieList} />
          </Route>

        </Switch>
      
    </div>
  );
};

export default App;
