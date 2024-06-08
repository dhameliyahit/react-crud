import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);

    const handleSave = (item) => {
        if (currentItem) {
            setItems(items.map(i => (i.id === item.id ? item : i)));
            setCurrentItem(null);
        } else {
            setItems([...items, item]);
        }
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleUpdate = (item) => {
        setCurrentItem(item);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <ItemForm onSave={handleSave} currentItem={currentItem} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemList items={items} onDelete={handleDelete} onUpdate={handleUpdate} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
