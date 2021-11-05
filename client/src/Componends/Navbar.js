import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { SwitchContext } from '../App.js';
// import { reducer } from "../useRuducer/reducer";


function Navbar()
{
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    const res = JSON.parse(userInfo)
    // console.log("16 ", userInfo, res.Name)
    const { state, dispatch } = useContext(SwitchContext);

    const Rendering = () =>
    {
        if (state)
        {
            return (
                <>
                    <li>
                        <Link style={{ textDecoration: 'none', color: "black" }} exact to="/" >Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: "black" }} onClick={() =>
                        {
                            dispatch({ type: "User", payload: false })
                            localStorage.removeItem("token")
                        }} exact to="/login" >Logout</Link>
                    </li>
                </>
            )
        }
        else
        {
            return (
                <>
                    <li>
                        <Link style={{ textDecoration: 'none', color: "black" }} exact to="/" >Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: "black" }} exact to="/sign-up" >Register</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: "black" }} exact to="/login" >Login</Link>
                    </li>
                    <li>
                        {/* <h4>{res.Name}</h4> */}
                    </li>

                </>
            )
        }

    }

    useEffect(() =>
    {
        Rendering()
    }, [])

    return (
        <div className="nav-menu">
            <div>
                <h2>Book My Show</h2>
            </div>
            <ul>
                <Rendering />
            </ul>
        </div>
    )
}

export default Navbar;

