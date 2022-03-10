import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import MainHeader from '../../components/MainHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddRPCasePage4 = () => {

    const [residentNumber, setResidentNumber] = useState(0)

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
                        <Form><label><h4 className="fw-bold mx-5"> How many residents are listed on the lease: </h4></label> <input className="text-center fw-bold" value={residentNumber} onChange={(e)=>{setResidentNumber(e.target.value)}}  /></Form>
                    </Row>
                    


                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addCasePage3' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addRPCasePage5' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>

    )
}

export default AddRPCasePage4