import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header></Header>
            <h1>Contact Me</h1>
            <h3>Get in Touch via:</h3>
            <ul>
                <li><a href="https://twitter.com/jessicaisace" target="_blank">@jessicaisace</a></li>
                <li>Email</li>
                <li>LinkedIn</li>
            </ul>
            <Footer></Footer>
        </div>
        
    )
}

export default ContactPage