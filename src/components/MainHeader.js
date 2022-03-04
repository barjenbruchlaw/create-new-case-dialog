import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const MainHeader = () => {
  return (
    <>
    
    <header className='page-header'><Container><Row>
        <Col><h1>Docket Manager v. 0.3</h1></Col>
        <Col className='text-end mt-auto'>Signed in as <a href='/' style={{ color: 'white' }}>Brian Barjenbruch</a></Col>
        </Row></Container></header>
    
    </>
  )
}

export default MainHeader