import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Result = (props) => { 
    const location = useLocation();
    const navigate = useNavigate();
    localStorage.clear();
    sessionStorage.clear();
    const body = !!location.state.body ? location.state.body : location.state.result;
    const dataFinal = body;
    const handleTest = () => {
        navigate('/scanner',{state:{body}}); 
    }
  return (
    <Container fluid className='main-page'>
        <Header />
      <Container>
        <Row className='section-page'>
          <Col className='result-page'>
           <h5>Result Notification</h5>
           { 
           dataFinal.covid_results == "pass" ? <>
           <div className='badges'>
            <div className='passed'>
            <Image width="100" className='badge-coro' src={`${process.env.PUBLIC_URL}/pass-badge.png`} />
              <p>COVID-19 Symptom<br />
                Screening Test</p>
            </div>
           
           <h4>Passed</h4>
           <div className='result-info'>
                <label>NAME</label>
                <h3>
                  {/* <Image src={`${process.env.PUBLIC_URL}/user.svg`} /> */}
                   {dataFinal.patient_name}</h3>
           </div>
           <div className='result-info'>
                <label>ISSUED ON</label>
                <h3>
                  {/* <Image src={`${process.env.PUBLIC_URL}/time.svg`} /> */}
                  {dataFinal.time_of_test.split(' ')[3]}</h3>
                <h3>
                  {/* <Image src={`${process.env.PUBLIC_URL}/calendar.svg`} /> */}
                  {dataFinal.time_of_test.split(',')[0]}</h3>
           </div>
           </div>
           <div className='test-button d-none'>
                <ComButton Name='Click to test again'onClick={handleTest} ></ComButton>
           </div>
           </> : <>
           <div className='badges'>
           <Image width="100%" className='w-100' src={`${process.env.PUBLIC_URL}/doctor.jpg`} />
           <h4 className='bg-error'>Sorry, you did not pass</h4>
            <p>Unfortunately you did not pass the <br />
            COVID-19 Symptom Screening Test
            </p>
            <p>This could be an indication of a<br />
            COVID-19 infection.
            </p>
<p> Please go get a confirmatory test to verify infection</p>
           </div>
           </>
          }
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Result;
