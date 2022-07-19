import React, { Suspense } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ComButton from '../../Components/ComButton';
import ComInput from '../../Components/ComInput';
const Register = () => {
  return (
    <Container fluid className='auth-page'>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <div className='auth-page-box'>
              <h3>Sign Up</h3>
              <p>Already have an account? <Link to="/">Sign In</Link></p>
              <Form>
              <ComInput Placeholder='Email address' />
              <ComInput Placeholder='Password' />
              <ComButton Name='Continue'></ComButton>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Register;