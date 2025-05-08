
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  let [movies,setMovies]=useState([])
  let [input,setInput]=useState('')
  let [error,setError]=useState('')
  
  function handleSearch(input){
      fetch(`https://www.omdbapi.com/?s=${input}&apikey=99eb9fd1`)
      .then(response=>response.json())
      .then(data=>{
        if(data.Response=== "True"){
          setMovies(data.Search)
          setError('')
        }else{
          setMovies([])
          setError('Invalid movie name. Please try again.')
        }
      })
      .catch(err=>console.log('error Occured',err))
      // if(movies.length===0){
      //   setError('Invalid movie name. Please try again.')
      // }
  }
  // console.log(movies)
  return (
    <div>
        Search Movie
        <form onSubmit={(e)=>{e.preventDefault();handleSearch(input)}}  >
        <input type="text" name="" id="" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button >Search</button>
        </form>
        {error && <p className="error">{error}</p>}
        <ul>
          {
            movies.map((movie)=>(
              <li key={movie.imdbID} >
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
              
            ))
          }
        </ul>
    </div>
  )
}

export default App
