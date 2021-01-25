import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/layout/layout'
import Input from '../../components/UI/input/input';
const SignIn = () => {
    return (
        <div>
            <Layout>
                <Container>



                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>


                                <Input

                                    type="email"
                                    placeholder="Email"
                                    label="Email"
                                    value=""
                                    onChange={() => { }}

                                />

                                <Input

                                    type="password"
                                    placeholder="Password"
                                    label="Password"
                                    value=""
                                    onChange={() => { }}

                                />

                                <Button variant="primary" type="submit">
                                    Submit
                        </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </Layout>
        </div>
    )
}

export default SignIn
