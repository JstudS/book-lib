import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import GenreBar from '../components/GenreBar';
import LibList from '../components/LibList';
import PaginationForLib from '../components/PaginationForLib';

const Library = () => {
    return (
        <Container className='mx-4'>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <GenreBar />
                    <LibList />
                    <PaginationForLib />
                </Col>
            </Row>
        </Container>
    );
};

export default Library;