import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
const Result = () => { 

  return (
    <Container fluid className='main-page'>
        <Header />
      <Container>
        <Row className='section-page'>
          <Col className='result-page'>
           <h5>Show Pass</h5>
           <div className='badges'>
           <Image width="100" className='badge-coro' src={`${process.env.PUBLIC_URL}/pass-badge.png`} />
           <h4>Passed: All Clear</h4>
           <div className='result-info'>
                <label>NAME</label>
                <h3><Image src={`${process.env.PUBLIC_URL}/user.svg`} /> Markus Heller</h3>
           </div>
           <div className='result-info'>
                <label>ISSUED ON</label>
                <h3><Image src={`${process.env.PUBLIC_URL}/time.svg`} /> 12:20</h3>
                <h3><Image src={`${process.env.PUBLIC_URL}/calendar.svg`} /> 20 Jul 2020</h3>
           </div>
           </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Result;
