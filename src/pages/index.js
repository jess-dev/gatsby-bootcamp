import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header></Header>
            <h1>Hello</h1>
            <h2>I'm Jess a fullstack developer living in beautiful Corby!</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
            <Footer></Footer>
        </div>
        
    )
}

export default IndexPage