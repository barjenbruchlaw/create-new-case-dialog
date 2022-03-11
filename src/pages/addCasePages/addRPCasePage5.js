import React, {useState} from 'react'
import PageNavBar from '../../components/PageNavBar'
import MainHeader from '../../components/MainHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddRPCasePage5 = () => {

    return (
        <div className='grid-container'>

            <MainHeader />

            <div className='page-sidebar'>
                <PageNavBar />
            </div>

            <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className="fw-bold"> Enter the balance information below:</h4>
                    </Row>

                    
                            <Form.Group className='mb-3' controlId='inputRentOwed'>

                                <Row className='p-2'><Col  xs={6}><Form.Label>Monthly Rent Amount</Form.Label>
                                <Form.Control type='currency' placeholder='Enter Monthly Rent Amount' />{/* Input field should be in dollar currency format */}</Col>
                                <Col xs={6}><Form.Label>Date Rent is Due</Form.Label>
                                <Form.Control type='date'/></Col></Row>

                                <Row className='p-2'><Col  xs={6}><Form.Label>Rent Balance</Form.Label>
                                <Form.Control placeholder='Enter Rent Balance' />{/* Input field should be in dollar currency format */}</Col>
                                <Col xs={6}><Form.Label>Date of Balance</Form.Label>
                                <Form.Control type='date'/></Col></Row>

                                <Row className='p-2'><Col  xs={4}><Form.Label>Late Fee Balance</Form.Label>
                                <Form.Control placeholder='Enter Late Fee Balance' />{/* Input field should be in dollar currency format */}</Col>
                                <Col  xs={4}><Form.Label>Utility Balance</Form.Label>
                                <Form.Control placeholder='Enter Utility Balance' />{/* Input field should be in dollar currency format */}</Col>
                                <Col  xs={4}><Form.Label>Additional Fee Balance</Form.Label>
                                <Form.Control placeholder='Enter Additional Fee Balance' />{/* Input field should be in dollar currency format */}</Col>
                                </Row>

                                <Row className='p-2'><Col xs={6}><Form.Label>Total Amount Owed</Form.Label><Form.Control />{/* Input field should be in dollar currency format and totals all other currency fields */}</Col></Row>    

                            </Form.Group>


                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addRPCasePage4' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addRPCasePage6' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>


                </Container>

            </main>

        </div>

    )
}

export default AddRPCasePage5