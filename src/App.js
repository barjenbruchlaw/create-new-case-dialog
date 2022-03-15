import React from 'react'
import PageNavBar from './components/PageNavBar.js'
import { Container, Row, Col } from 'react-bootstrap'
import './bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div>

      <PageNavBar />

      <main className='page-main'>
      <h1 className='text-center'>Home</h1>

      </main>

    </div>
  )
}

export default App

