import React, { useEffect, createContext, useReducer, useState } from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const local = "http://localhost:4000/";
const url = "";

const BookingModal = () =>
{
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [name, setName] = useState();
    const token = localStorage.getItem("token");

    useEffect(() =>
    {
        if (!token)
        {
            history.push("/login");
        } else
        {
            history.push("/book-ticket");
        }
    }, []);

    const onSubmit = handleSubmit(async (data) =>
    {
        try
        {
            const { text, number, email } = data
            console.log(data)
            axios.post(`${local}book-ticket`, { text, number, email })
                .then((res) => toast(res.data.message))
                .catch((error) => toast(error.response.data.message))
        } catch (error)
        {
            console.log("Error")
        }
    })

    return (
        <div>
            <Form onSubmit={onSubmit} >
                <Col>
                    <Row>
                        <Form.Control {...register("text")} name="text" type="text" placeholder="Names" />
                    </Row>
                    <br />

                    <Form.Control {...register("email")} name="email" type="email" placeholder="Email" />
                    <br />
                    <Row>
                        <Form.Control {...register("number")} name="number" type="number" placeholder="Number of Ticket" />
                    </Row>
                    <Button variant="info" type="submit" >Book now</Button>
                </Col>
                <ToastContainer />
            </Form>
        </div>
    )
}

export default BookingModal
