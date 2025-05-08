
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
        <div>
        <input type="text" name="" id="" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={()=>{handleSearch(input)}} >Search</button>
        <p>{error}</p>
        
        </div>
        <ul>
          {
            movies.map((movie)=>(
              <div key={movie.imdbID} >
                <li><h1>{movie.Title}</h1></li>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              
            ))
          }
        </ul>
    </div>
  )
}

export default App
