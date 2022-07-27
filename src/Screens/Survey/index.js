import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { postData } from '../../api';
import urls from '../../api/urls';
import { CheckResponseWM } from '../../Helpers/CheckResponse';
import ComInput from '../../Components/ComInput';
const Survey = (props) => {
  const navigate = useNavigate();
const location = useLocation(); 
const Email = JSON.parse(!!sessionStorage.email ? sessionStorage.email : null);
const symptoms = JSON.parse(!!sessionStorage.symptoms ? sessionStorage.symptoms : null);
const DashboardData = JSON.parse(!!sessionStorage.result ? sessionStorage.result : null);
const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

const surveyData = location.state.result;
const ticketData = location.state.bodyString;
console.log(DashboardData) 
    const [SurveyScent, setSurveyScent] = useState(true);
    const [ScentFeedback, setScentFeedback] = useState('')
    const [UserName, setUserName] = useState({ Value: '', IsError: false, ErrorMessage: '' })
    const [ Qus1, setQus1 ] = useState(0);
    const [ Qus2, setQus2 ] = useState(0);
    const [ Qus3, setQus3 ] = useState(0);
    const [ Qus4, setQus4 ] = useState(0);
    const [ Qus5, setQus5 ] = useState(0);
    const [ Qus6, setQus6 ] = useState(0);
    const [ Terms1, setTerms1 ] = useState(false);
    const [ Terms2, setTerms2 ] = useState(false);
    const surveyNext = () => setSurveyScent(false);

    const HandleFormChange = ({ target = {} }) => {
      let { name = '', value = '', checked = false } = target;
      switch (name) {
          case 'ScentFeedback': return setScentFeedback(value) 
          case 'Qus1': return setQus1(value) 
          case 'Qus2': return setQus2(value) 
          case 'Qus3': return setQus3(value) 
          case 'Qus4': return setQus4(value) 
          case 'Qus5': return setQus5(value) 
          case 'Qus6': return setQus6(value) 
          case 'Terms1': return setTerms1(checked) 
          case 'Terms2': return setTerms2(checked) 
          case 'UserName':
                return setUserName(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
          console.log(Qus1)
      } 
  } 
    const handleResult = () => {   
    if(!!DashboardData && !!DashboardData.userid){
        let dataResult = {
          "card": {
            "ri": JSON.parse(ticketData).ri,
            "sig":JSON.parse(ticketData).sig,
            "sn": JSON.parse(ticketData).sn,
            "v": JSON.parse(ticketData).v
        },
        "userAnswers": {
            "scentFeedback":ScentFeedback,
            "survey": {
                "q1": Qus1,
                "q2":Qus2,
                "q3": Qus3,
                "q4": Qus4,
                "q5": parseInt(Qus5),
                "q6": Qus6
            }
        },
        "nianderId": DashboardData.userid.toString(),
        "nianderGroup": DashboardData.group_id,
        "symptoms":symptoms,
        "email_id": Email
      };

    console.log(dataResult);
      postData(urls.GenerateTestApi,dataResult).then((result) => {    
        if (CheckResponseWM(result)) {        
        if (result.status_code==200) {   
          navigate('/result',{state:{result}});
          }
        } 
        else{ 
          navigate('/scanner',{state:{}}); 
          }
      })
    }
    else{
      let dataResult = {
        "card": {
          "ri": JSON.parse(ticketData).ri,
          "sig":JSON.parse(ticketData).sig,
          "sn": JSON.parse(ticketData).sn,
          "v": JSON.parse(ticketData).v
      },
      "userName":UserName.Value,
      "userAnswers": {
          "scentFeedback":ScentFeedback,
          "survey": {
              "q1": Qus1,
              "q2":Qus2,
              "q3": Qus3,
              "q4": Qus4,
              "q5": parseInt(Qus5),
              "q6": Qus6
          }
      }
    };
    postData(urls.GenerateTestApi,dataResult).then((result) => {    
      if (CheckResponseWM(result)) {        
      if (result.status_code==200) {   
        navigate('/result',{state:{result}});
        }
      } 
      else{ 
        navigate('/scanner',{state:{}}); 
        }
    })
    }
      
    } 
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
                {
                    surveyData.keys.map((items) => {
                       return <>
                       <Form.Check 
                  type="radio" 
                  value={items}
                  onChange={(e) => HandleFormChange(e)}
                  name="ScentFeedback"
                  id={`g-${items}-1`}
                  label={items}
                />
                       </>
                    })
                  } 
                </div>
                <ComButton Type='button' Name='Continue' Disabled={!ScentFeedback && "disabled"}  onClick={!!ScentFeedback && surveyNext} />
        
                </> : <>
                <h4>Self Assessment</h4> 
                <div className="section-questions">
                    <div className='questions'> 
                        <p>Have you been tested "positive" for a COVID-19 infection in the last 10 days?</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus1"
                        id="g-Qus1-1"
                        value="yes"
                        label="Yes" 
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus1"
                        id="g-Qus1-2"
                        value="no"
                        label="No" 
                        /> 
                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Have you been in contact with a confirmed suspected or infected person in the last 7 days?</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus2"
                        id="g-Qus2-1"
                        value="yes"
                        label="Yes" 
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus2"
                        id="g-Qus2-2"
                        value="no"
                        label="No" 
                        /> 

                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Do you suffer from fever, cough, shortness of breath, sore throat, unusual fatigue, or muscular pain?</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus3"
                        id="g-Qus3-1"
                        value="yes"
                        label="Yes" 
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus3"
                        id="g-Qus3-2"
                        value="no"
                        label="No" 
                        /> 

                        </div>
                    </div> 
                    <div className='questions'> 
                        <p>Did you have a recent smell disorder?</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus4"
                        id="g-Qus4-1"
                        value="yes"
                        label="Yes" 
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus4"
                        id="g-Qus4-2"
                        value="no"
                        label="No" 
                        /> 

                        </div>
                    </div>
                    <div className='questions'> 
                        <p>Please rate your ability to detect the scent on the Corowell ticket on a scale of 0 to 10, "0" being impossible to "10" being very easily.</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Group as={Row} className="w-100 justify-content-center">
                          <Col xs="9">
                            <Form.Range
                              value={Qus5}
                              min="0"
                              max="10"
                              onChange={e => setQus5(e.target.value)}
                            />
                          </Col>
                          <Col xs="2">
                            <Form.Control value={Qus5}/>
                          </Col>
                        </Form.Group>
                        </div>
                    </div>
                    <div className='questions'> 
                        <p>I have truthfully answered all questions</p>
                        <div className='d-flex justify-content-between'>
                        <Form.Check
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus6"
                        id="g-Qus6-1"
                        value="yes"
                        label="Yes" 
                        />
                        <Form.Check
                        className='invert'
                        inline 
                        type="radio"
                        onChange={(e) => HandleFormChange(e)}
                        name="Qus6"
                        id="g-Qus6-2"
                        value="no"
                        label="No" 
                        /> 
                        </div>
                    </div>  
                    { 
                      !!DashboardData && !!DashboardData.userid ?  <>
                      <ComButton Type='button' Name='Continue' Disabled={ Qus1 == 0 && Qus2 == 0 && Qus3 == 0 && Qus4 == 0 && Qus6 == 0 && 'disabled'} onClick={handleResult} />
                      </> : <>
                                         
                        <ComButton Type='button' Name='Continue' onClick={() => handleShow('xxl-down')} />
                        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header className='d-flex align-items-center justify-content-center'> <Image width="100" src={`${process.env.PUBLIC_URL}/logo.png`} />
                        </Modal.Header>
                        <Modal.Body>
                        <Form.Group className="my-3">
                        <h5 className='mb-3'>Enter your Name for Corrowell Pass:</h5>
                        <ComInput Error={UserName.IsError} ErrorMessage={UserName.ErrorMessage} Value={UserName.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="UserName" Placeholder="" />
                        </Form.Group>   
                        <div key={`Terms1`} className="mb-3">
                        <Form.Check 
                          type="checkbox"
                          name='Terms1'
                          onChange={(e) => HandleFormChange(e)}
                          id={`Terms1`} 
                          checked={Terms1}
                          label={`I have read and understood this Data Privacy Statement`}
                        /> 
                      </div>
                      <div key={`Terms2`} className="mb-3">
                        <Form.Check 
                          type="checkbox"
                          name='Terms2'
                          onChange={(e) => HandleFormChange(e)}
                          id={`Terms2`} 
                          checked={Terms2}
                          label={`I accept the terms of this Data Privacy Statement`}
                        /> 
                      </div>
                      <ComButton Type='button' Name='Continue' Disabled={ !Terms1 || !Terms2 || !UserName.Value ? 'disabled' : ''} onClick={handleResult} />
                        </Modal.Body>
                      </Modal>
                      </>
                    }
                    
                </div>
                
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
