import React from 'react'
import Layout from '../../components/layout/layout';
import { Jumbotron } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Layout>
                <Jumbotron>
                    <h1>Welcome to Admin</h1>
                </Jumbotron>
            </Layout>
        </div>
    )
}

export default Home
