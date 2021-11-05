import React from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import token from "./App.js";
import "../CSS/Movies.css";
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Box from '@material-ui/core/Box';


function Movies()
{
    return (
        <div className="Movie-Details">
            <MovieDetails />
        </div>
    )
}


function MovieDetails()
{
    const [Movie, setMovie] = useState([])
    const history = useHistory()
    const token = localStorage.getItem("token");

    const [loading, SetLoading] = useState(false);

    const local = "http://localhost:4000/";
    const url = "https://books-my-shows.herokuapp.com/";

    // console.log(token)
    useEffect(() =>
    {
        SetLoading(true)
        fetch(`${local}u`)
            .then(res => res.json())
            .then(res => setMovie(res));
        SetLoading(false)
    }, [Movie])

    const verify = () =>
    {
        try
        {

            if ((token !== "undefined") && (token !== "") && (token !== null))
            {
                history.push("/book-ticket");
            } else
            {
                history.push("/login");
            }


        } catch (err)
        {
            console.log("Something went wrong")

        }
    }


    return (
        <div className="container">
            {/* {loading && <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>} */}
            {Movie.map((data) =>
            {
                const { _id, contentType, movie_name, description, poster_path, release_date } = data;
                // console.log("movie 57 ", data)
                return (
                    <div className="Card">
                        <div>
                            <img src={`data:${contentType};base64,${poster_path}`}></img>
                            <div className="Card-Details">
                                <h2>{movie_name}</h2>
                                <p>{description}</p>
                                {/* <p>{release_date}</p> */}
                                <div className="Button">
                                    <button style={{ padding: "5px 10px 28px 10px" }} onClick={verify}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}



export default Movies