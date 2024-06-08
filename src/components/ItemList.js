import React from 'react';
import Item from './Item';
import { Table } from 'react-bootstrap';

const ItemList = ({ items, onDelete, onUpdate }) => {
    return (
        <div>
            <h1>Item List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <Item
                            key={item.id}
                            index={index + 1}
                            item={item}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ItemList;
