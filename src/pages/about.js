import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p>My bio information would go here, I am a fullstack developer form Corby, looking to increase their React/Gatsby knowledge and hopefully move up into the 50's!!</p>
                <p>Go to my <Link to='/contact'>contact page</Link> to see how you can get in touch! </p>
            </Layout>
        </div>
    )
}

export default AboutPage