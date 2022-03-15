import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { HouseDoorFill } from 'react-bootstrap-icons'
import { BookmarkCheck } from 'react-bootstrap-icons'
import { FileEarmarkFill } from 'react-bootstrap-icons'
import { FolderFill } from 'react-bootstrap-icons'
import { ListCheck } from 'react-bootstrap-icons'
import { CurrencyDollar } from 'react-bootstrap-icons'
import { Gear } from 'react-bootstrap-icons'
import { GearFill } from 'react-bootstrap-icons'
import '../bootstrap.min.css'

const PageNavBar = () => {
    return (
      <Navbar bg="light">
      <Container className='fw-bold text-center'>
        <Nav.Link href="#dash"><HouseDoorFill className='fs-3' /><br />Dashboard</Nav.Link>
        <Nav.Link href="#search"><Search className='fs-3' /><br />Search for a case</Nav.Link>
        <Nav.Link href="/addcase"><BookmarkCheck className='fs-3' /><br />Add new case</Nav.Link>
        <Nav.Link href="#createdoc" disabled><FileEarmarkFill className='fs-3' /><br />Create Documents</Nav.Link>
        <Nav.Link href="#filecase" disabled><FolderFill className='fs-3' /><br />File case with court</Nav.Link>
        <Nav.Link href="#docket" disabled><ListCheck className='fs-3' /><br />Prepare docket for court</Nav.Link>
        <Nav.Link href="#invoice" disabled><CurrencyDollar className='fs-3' /><br />Prepare invoices</Nav.Link>
        <Nav.Link href="#system" ><Gear className='fs-3' /><br />System Maintenance</Nav.Link>
        <Nav.Link href="#settings"><GearFill className='fs-3' /><br />Settings</Nav.Link>
      </Container>
    </Navbar>
    )
}

export default PageNavBar

