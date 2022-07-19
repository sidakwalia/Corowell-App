import React, { Suspense } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ComInput from './Components/ComInput'; 
import ComButton from './Components/ComButton';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <Container fluid className='auth-page'>
      <Container>
        <Row>
          <Col lg={4} md={4} className="auth-page-qr"> 
          <hr className='d-md-none' />
          </Col>
          <Col lg={8} md={8}>
            <div className='auth-page-box'>
              <h3>Sign In</h3>
              <p>New User? <Link to="/register">Create an account</Link></p>
              <Form>
              <ComInput Placeholder='Email address' />
              <ComInput Placeholder='Password' />
              <Link to="/survey"><ComButton Name='Continue'></ComButton></Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
