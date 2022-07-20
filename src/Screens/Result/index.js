import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Result = (props) => { 
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    const body =location.state;
    const handleTest = () => {
        navigate('/scanner',{state:{body}}); 
    }
  return (
    <Container fluid className='main-page'>
        <Header />
      <Container>
        <Row className='section-page'>
          <Col className='result-page'>
           <h5>Show Pass</h5>
           <div className='badges'>
           <Image width="100" className='badge-coro' src={`${process.env.PUBLIC_URL}/pass-badge.png`} />
           <h4>{location.state.body.covid_results ? "Passed: All Clear" : "Failed"}</h4>
           <div className='result-info'>
                <label>NAME</label>
                <h3><Image src={`${process.env.PUBLIC_URL}/user.svg`} /> {location.state.body.patient_name}</h3>
           </div>
           <div className='result-info'>
                <label>ISSUED ON</label>
                <h3><Image src={`${process.env.PUBLIC_URL}/time.svg`} /> {location.state.body.time_of_test.split(' ')[3]}</h3>
                <h3><Image src={`${process.env.PUBLIC_URL}/calendar.svg`} /> {location.state.body.time_of_test.split(',')[0]}</h3>
           </div>
           </div>
           <div className='test-button'>
                <ComButton Name='Click to test again'onClick={handleTest} ></ComButton>
           </div>
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Result;
