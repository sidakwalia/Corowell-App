import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
const Survey = () => {

    const [SurveyScent, setSurveyScent] = useState(true);
    const surveyNext = () => setSurveyScent(false);

  return (
    <Container fluid className='main-page'>
        <Header />
      <Container>
        <Row className='section-page'>
          <Col className='survey-page'>
          <Form> 

          {
          !!SurveyScent ? <>
          <h4>Fragrance Selection</h4>
            <h6>Scratch.Smell.Select:</h6>
                <div className="mb-3 section-scent">
                <Form.Check 
                  type="radio"
                  name="group"
                  id="g-radio-1"
                  label="Popcorn"
                />
                <Form.Check 
                  type="radio"
                  name="group"
                  id="g-radio-2"
                  label="Peppermint"
                />
                <Form.Check 
                  type="radio"
                  name="group"
                  id="g-radio-3"
                  label="Chocolate"
                />
                <Form.Check 
                  type="radio"
                  name="group"
                  id="g-radio-4"
                  label="Cheese"
                />
                <Form.Check 
                  type="radio"
                  name="group"
                  id="g-radio-5"
                  label="Lavender"
                />
                </div>
                <ComButton Type='button' Name='Continue' onClick={surveyNext} />
        
                </> : <>
                <h4>Self Assessment</h4> 
                <div className="section-questions">
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q1"
                        id="g-q1-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q1"
                        id="g-q1-2"
                        label="No"
                        />

                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q2"
                        id="g-q2-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q2"
                        id="g-q2-2"
                        label="No"
                        />

                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q3"
                        id="g-q3-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q3"
                        id="g-q3-2"
                        label="No"
                        />

                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q4"
                        id="g-q4-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q4"
                        id="g-q4-2"
                        label="No"
                        />

                        </div>
                    </div>
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q5"
                        id="g-q5-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q5"
                        id="g-q5-2"
                        label="No"
                        />

                        </div>
                    </div>
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q6"
                        id="g-q6-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q6"
                        id="g-q6-2"
                        label="No"
                        />

                        </div>
                    </div>
                    <div className='questions'> 
                        <p>Do you suffer from Covid19-typical symptoms of the disease - such as fever, cough and shortness of breath? </p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        name="q7"
                        id="g-q7-1"
                        label="Yes"
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        name="q7"
                        id="g-q7-2"
                        label="No"
                        />

                        </div>
                    </div>
                </div>
                <Link to="/result"><ComButton Type='button' Name='Continue' /> </Link>
          </>
                
            } 
              </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Survey;
