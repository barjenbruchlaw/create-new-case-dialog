import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import MainHeader from '../../components/MainHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddCasePage3 = () => {
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
                        <h2> Is this case only for failure to pay rent or other lease violations:</h2>
                    </Row>

                    <Row>
                        <Col className='p-5'>


                        </Col>
                        <Col className='p-5'>


                        </Col>
                    </Row>

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addCasePage2' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addRPCasePage4' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>
    )
}

export default AddCasePage3