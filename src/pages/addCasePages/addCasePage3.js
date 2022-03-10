import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import MainHeader from '../../components/MainHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddCasePage3 = () => {
    
    const [RPUD, setRadio] = useState("RP")
    
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
                        <h2> Is the main reason for this case due to failure to pay rent or for other reasons:</h2>
                    </Row>

                    <Row>

                        <Form className='p-5'> <h3>

                            <Form.Check inline className='m-5' label='Rent Payment only' type='radio' checked={ RPUD === 'RP' } value='RP' onChange={ (e) => { setRadio(e.target.value) }} />
                            <Form.Check inline className='m-5' label='Non-rent eviction (breach of lease, squatters, etc.)' type='radio' checked={ RPUD === 'UD' } value='UD' onChange={ (e) => { setRadio(e.target.value) }} />

                        </h3></Form>

                    </Row>

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addCasePage2' className='btn btn-dark mx-5 px-5'>Back</a><a href={RPUD === 'RP' ? '/addRPCasePage4' : '/addUDCasePage4' } className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>
    )
}

export default AddCasePage3