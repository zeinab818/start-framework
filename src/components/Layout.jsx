import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer1 from './footer1/Footer1'
import Footer2 from './footer2/Footer2'

export default function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
            <Footer1/>
            <Footer2/>
        
        </>
    )
}
