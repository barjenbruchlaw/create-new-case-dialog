import React from 'react'
import PageNavBar from '../components/PageNavBar'
import MainHeader from '../components/MainHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../App.css'

const Addcase = () => {
    return (
        <div className='grid-container'>

        <MainHeader />
            
        <div className='page-sidebar'>
        <PageNavBar />
        </div>

        <main className='page-main py-5'>
        <h1 className='text-center font-weight-bold'>Add Case</h1>

        <Container>
            <Row className="py-5">
                <h4> Choose the property manager and property owner</h4>
            </Row>

            <Row>
                <Col className='p-5'>

{/* This should populate from the property manager assigned to the user; attorneys and paralegals can access all */}

                <Form.Select aria-label="Select PM">
                    <option>Select Property Management Company</option>
                    <option value="1">ABC Company</option>
                    <option value="2">JKL Properties</option>
                    <option value="3">XYZ Asset Management</option>
                </Form.Select>
                </Col>
                <Col className='p-5'>

{/* This should populate from the property owners associated with the property manager and assigned to the user; attorneys and paralegals can access all assigned to the manager */}

                <Form.Select aria-label="Select Owner">
                    <option>Select Property Owner</option>
                    <option value="1">123 Main, LLC</option>
                    <option value="2">456 Main, LLC</option>
                    <option value="3">789 Main, LLC</option>
                </Form.Select>
                
                </Col>
            </Row>

            <Row>
            <Col className='px-5'></Col>
            <Col>
            <Button variant="dark" disabled className='btn px-5'>Back</Button><Button variant="dark" className='btn mx-5 px-5'>Next</Button>
            
            </Col>

            </Row>
        </Container>

        </main>

    </div>
    )
}

export default Addcase
