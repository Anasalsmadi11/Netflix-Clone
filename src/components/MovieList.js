import Movie from "./Movie";
import { useEffect, useState } from 'react';
import axios from 'axios'

function MovieList(){
    const[movieData, setMovieData]=useState([])
    const sendReq= async()=>{
        const serverUrl= `${process.env.REACT_APP_SERVER_URL}trending` // here (allMemes) is a path in the server i put it to get the data in that route in the server
         const result= await axios.get(serverUrl)
         console.log(result.data)
         setMovieData(result.data)

        }
        useEffect(()=>{
           sendReq()
        },[])
    return(
        <>
        {/* <button onClick={sendReq}>send req</button> */}

        <Movie movieData={movieData}/>
        </>
    )
}

export default MovieList;