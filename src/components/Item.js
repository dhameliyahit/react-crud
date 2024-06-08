import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ index, item, onDelete, onUpdate }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
                <Button variant="primary" onClick={() => onUpdate(item)}>Update</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
            </td>
        </tr>
    );
};

export default Item;
