import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ItemForm = ({ onSave, currentItem }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentItem) {
            setName(currentItem.name);
            setEmail(currentItem.email);
            setPassword(currentItem.password);
        } else {
            setName('');
            setEmail('');
            setPassword('');
        }
    }, [currentItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: currentItem ? currentItem.id : Date.now(), name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
        <Form onSubmit={handleSubmit} className='mt-5'>
         <h1>Add Record</h1>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Button className='my-3 w-100' variant="primary" type="submit">
                {currentItem ? 'Update' : 'Create'}
            </Button>
        </Form>
    </>
    );
};

export default ItemForm;
