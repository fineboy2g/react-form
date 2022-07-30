import React, { useState } from "react";
import {Col, Form, Row, Button, Card } from "react-bootstrap";


const UsersForm =(props) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[gen, setGen] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);

    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleGenChange =(event) => {
        setGen(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email,
            gen,
        };
        props.onSubmit(newUser);
        
        // clear inputs
        setEmail("");
        setName("");
        setGen("");
    };

    return (
        <>
        <Row>
            <Col md={2}></Col>
            <Col>
            <Card className="p-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                     >
                         <Form.Label>Name</Form.Label>
                         <Form.Control
                           type="text"
                           placeholder="enter name"
                           onChange={handleNameChange}
                           value={name}

                           />
                      </Form.Group>

                      <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                     >
                         <Form.Label>Email</Form.Label>
                         <Form.Control
                           type="text"
                           placeholder="enter email"
                           onChange={handleEmailChange}
                           value={email}

                           />
                        </Form.Group>

                        <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                     >
                         <Form.Label>Gen</Form.Label>
                         <Form.Control
                           type="text"
                           placeholder="gen"
                           onChange={handleGenChange}
                           value={name}

                           />
                        </Form.Group>

                    <Button variant="primary" className="w-25" type={"submit"}>
                        Submit
                        </Button>


                </Form>
            </Card>
           </Col>
           <Col md={2}></Col>
        </Row>
        
        </>
    );

};
export default UsersForm;