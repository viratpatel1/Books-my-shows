import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import EditMovieFrom from './EditMovieFrom';

const local = "http://localhost:4000/";
const url = "https://books-my-shows.herokuapp.com/";

function EditMovie()
{
    const match = useRouteMatch();
    const [todo, setTodo] = useState();


    useEffect((id) =>
    {

        fetch(`${url}admin/updatemovies/${match.params.id}`)
            .then(res => res.json())
            .then(res => setTodo(res))
        // .then((res) => console.log("19 ", res))
    }, [todo])

    const onSubmit = async (data) =>
    {
        try
        {
            // console.log("26 ", data)
            await axios.put(`${url}admin/updatemovies/${match.params.id}`, data)
                .then(res => console.log("Updated Successfully"))
                .catch(() => console.log("Error"))
        } catch (error)
        {
            console.log(error.response.data.message)
        }

    }

    return (
        <>
            <h4>Edit Item</h4>
            {/* <h6>{match.params.id}</h6> */}
            {todo ? (<EditMovieFrom todo={todo} onSubmit={onSubmit} />) : (<h3>Loading...</h3>)}
        </>
    )
}

export default EditMovie



