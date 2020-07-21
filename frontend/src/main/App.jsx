import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import { Logo, Nav, Footer } from '../components/index '

export default props => 
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    