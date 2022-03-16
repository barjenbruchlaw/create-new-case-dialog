import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

const AddUDCasePage12 = () => {

    return (
        <div>

            <PageNavBar />

            <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className="fw-bold"> Upload the relevant documents below:</h4>
                    </Row>


                    <Form.Group className='mb-3' controlId='uploadDocuments'> {/* If possible, I would like the drag file to this square for the upload */}

                        <Row className='p-2'><Form.Label>Upload lease here:</Form.Label><Form.Control type='file' /></Row>

                        <Row className='p-2'><Form.Label>Upload notice of violation here:</Form.Label><Form.Control type='file' /></Row>

                        <Row className='p-2'><Form.Label>Upload all other supporting documents here:</Form.Label><Form.Control type='file' /></Row>

                    </Form.Group>


                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addUDCasePage11' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addUDCasePage13' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>


                </Container>

            </main>

        </div>

    )
}

export default AddUDCasePage12