import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import ComButton from '../../Components/ComButton';
import Header from '../../Components/Header';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { postData } from '../../api';
import urls from '../../api/urls';
import { CheckResponseWM } from '../../Helpers/CheckResponse';
const Survey = (props) => {
  const navigate = useNavigate();
const location = useLocation();
const surveyData = location.state.resultData;
const ticketData = location.state.bodyString;
const UserName = localStorage.getItem("user_name");
const Email = localStorage.getItem("email_id");
    const [SurveyScent, setSurveyScent] = useState(true);
    const [ScentFeedback, setScentFeedback] = useState('')
    const [ Qus1, setQus1 ] = useState(0);
    const [ Qus2, setQus2 ] = useState(0);
    const [ Qus3, setQus3 ] = useState(0);
    const [ Qus4, setQus4 ] = useState(0);
    const [ Qus5, setQus5 ] = useState(0);
    const [ Qus6, setQus6 ] = useState(0);
    const surveyNext = () => setSurveyScent(false);
    // const HandleFormChange = ({ target = {} }) => {
    //   let { name = '', value = '' } = target;
    //   switch (name) {
    //     case 'Scent': return setNewDataNotes(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
    //     case 'NewDate': return setNewDate(value) 
    //   }
    // }
    const HandleFormChange = ({ target = {} }) => {
      let { name = '', value = '' } = target;
      switch (name) {
          case 'ScentFeedback': return setScentFeedback(value) 
          case 'Qus1': return setQus1(value) 
          case 'Qus2': return setQus2(value) 
          case 'Qus3': return setQus3(value) 
          case 'Qus4': return setQus4(value) 
          case 'Qus5': return setQus5(value) 
          case 'Qus6': return setQus6(value) 
          console.log(Qus1)
      }
      console.log(Qus1)
  }

    const handleResult = () => {
      // let formdata = new FormData();;
      // formdata.append('name', ItemName.Value);
      // formdata.append('restaurant_id', RestaurantData.id);
      // formdata.append('description', ItemDescription.Value);
      // formdata.append('is_discounted', !!IsDiscountedPrice ? 1 : 0);
      let formData ={
        "card": ticketData,
        "userAnswers": {
            "scentFeedback": ScentFeedback,
            "survey": {
                "q1": Qus1,
                "q2": Qus2,
                "q3": Qus3,
                "q4": Qus4,
                "q5": Qus5,
                "q6": Qus6
            }
        },
        "userName": JSON.parse(UserName),
        "email_id": JSON.parse(Email)
    }
    console.log(formData);
      postData(urls.GenerateTestApi,formData).then((result) => {    
        if (CheckResponseWM(result)) {         
        console.log(result)
        if (result.status_code==200) {   
          navigate('/result',{state:{result}});
          }
        }
      })
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
                            <RangeSlider
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
                </div>
                <ComButton Type='button' Name='Continue' Disabled={ Qus1 == 0 && Qus2 == 0 && Qus3 == 0 && Qus4 == 0 && Qus6 == 0 && 'disabled'} onClick={handleResult} />
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
