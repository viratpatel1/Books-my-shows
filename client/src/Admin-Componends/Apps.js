// import './CSS/App.css';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
// import Movies from '../Admin/Movies';
import Movies from "./Movies"
import EditMovie from './EditMovie';
import AdminMovies from "./AdminMovies";



function Apps()
{
    const history = useHistory();
    const token = localStorage.getItem("token");
    useEffect(() =>
    {
        try
        {

            if ((token !== "undefined") && (token !== "") && (token !== null))
            {
                history.push("/admin");

            } else
            {
                history.push("/login");
            }


        } catch (err)
        {
            console.log("Something went wrong")

        }

    }, [])

    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/admin/uploadmovies' exact component={Movies} />
                <Route path='/admin/viewmovies' exact component={AdminMovies} />
                <Route path='/admin/updatemovies/:id' exact component={EditMovie} />
            </Switch>
        </Router>
    );
}

export default Apps;
