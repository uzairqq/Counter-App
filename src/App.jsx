import React, { useState } from 'react';
import { Button, Form, Card, } from 'react-bootstrap';
import './App.css';

const App = () => {

    let [count, setCount] = useState(0);
    let [countManipulate, setCountManipulate] = useState(1);


    return (
        <div>
            <div className="d-flex vh-100">
                <div className="d-flex w-100 justify-content-center align-self-center">
                    <Card border="primary" style={{ width: '30rem', height: '20rem' }}>
                        <Card.Header><h1>Counter Application</h1></Card.Header>
                        <Card.Body>
                            <Card.Title> <b>Count Value :{count} </b></Card.Title>
                            <b>Set Count :</b>
                            <Card.Text>
                                <Form.Control
                                    type="number"
                                    onChange={e => setCountManipulate(e.target.value)}
                                    value={countManipulate}
                                >
                                </Form.Control>
                                <br />
                                <Button className="btn btn-space btn-success  btn-circle btn-xl ml-4 mr-5 "
                                    onClick={() => setCount(count + Number(countManipulate))}>
                                    +
                                 </Button>
                                {" "}
                                <Button className="btn btn-primary btn-circle btn-xl ml-4 mr-5"
                                    onClick={() => setCount(count - Number(countManipulate))}>
                                    -
                                 </Button>
                                {" "}
                                <Button className="btn btn-danger btn-circle btn-xl ml-4"
                                    onClick={() => setCount(0)}>
                                    R
                                 </Button>
                                {" "}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default App;