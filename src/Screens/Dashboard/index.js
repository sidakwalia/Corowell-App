import React, { useState } from 'react';
import { Col, Container, Form, Image, Row, Table } from 'react-bootstrap';
import ComButton from '../../Components/ComButton';
import { Link, useLocation, useNavigate } from "react-router-dom";
import urls from '../../api/urls';
const Dashboard = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  var DashboardData = JSON.parse(sessionStorage.result); 
  let UserInfo = {
    user_name : !!DashboardData.user_name ? DashboardData.user_name : null,
    user_id : !!DashboardData.userid ? DashboardData.userid : null
  }

  const TestResults =  !!DashboardData.test_results && !!Object.keys(DashboardData.test_results) && Object.keys(DashboardData.test_results).length > 0 ? Object.keys(DashboardData.test_results).map(key => DashboardData.test_results[key]) : {}
 
  let Results = TestResults;
  
  const [StepOne, setStepOne] = useState('')
  const [Cough, setCough] = useState('');
  const [Fever, setFever] = useState('');
  const [Fatigue, setFatigue] = useState('');
  const [Diarrhea, setDiarrhea] = useState('');
  const [Headache, setHeadache] = useState('');
  const [Stuffynose, setStuffynose] = useState('');
  const [SoreThroat, setSoreThroat] = useState('');
  const [Pain, setPain] = useState('');
  const [Nausea, setNausea] = useState('');
  const [Vomiting, setVomiting] = useState('');
  const [LossofSmell, setLossofSmell] = useState('');
  const [LossofTaste, setLossofTaste] = useState('');  
  // Handle Form values
  const HandleFormChange = ({ target = {} }) => {
    let { value = '', name = '', checked = false } = target;
    switch (name) {
      case 'Cough':
      return setCough(value);
      case 'Fever':
      return setFever(value);
      case 'Fatigue':
      return setFatigue(value);
      case 'Diarrhea':
      return setDiarrhea(value);
      case 'Headache':
      return setHeadache(value);
      case 'Stuffynose':
      return setStuffynose(value); 
      case 'SoreThroat':
      return setSoreThroat(value);
      case 'Pain':
      return setPain(value);
      case 'Nausea':
      return setNausea(value);
      case 'Vomiting':
      return setVomiting(value);
      case 'LossofSmell':
      return setLossofSmell(value);
      case 'LossofTaste':
      return setLossofTaste(value); 
    }
  } 
  // Form Steps
  const handleStep = () => { 
      setStepOne(1);  
  } 
  const handleStepTwo = () => { 
    setStepOne(2); 
  } 
  // Sign up Api
  const handleScanner = () => {   
    let symptoms = {
        cough: Cough,
        fever: Fever,
        fatigue: Fatigue,
        diarrhea: Diarrhea,
        headache: Headache,
        stuffy_nose: Stuffynose,
        sore_throat: SoreThroat,
        pain: Pain,
        nausea: Nausea,
        vomiting: Vomiting,
        loss_of_smell: LossofSmell,
        loss_of_taste: LossofTaste 
    } 
    sessionStorage.setItem("symptoms",  JSON.stringify(symptoms));
    return navigate('/scanner',{state:{symptoms,UserInfo}});
  }
  return (
    <Container fluid className='main-page'>
    <header>
      <Image width="150" src={`${process.env.PUBLIC_URL}/Asset/niander.png`} />
    </header>
    <Container className='dashboard'>
      <Row className='section-page'>
        <Col className='mt-3' >
          {
            !StepOne && StepOne == 0 ? <>
            {
              !!DashboardData.user_type == 0 ? <>
                 <h3>Group ID : {DashboardData.group_id}</h3>
                <p>Ask each group member to enter this ID</p> 
                {
                  Results.length > 0 ? <>
                  <Table bordered hover>
                  <tbody>
                    {
                      Results.map((item) => {
                        return <tr>
                          <td>{item.patient_name}</td>
                      <td><span className={item.covid_results}></span></td>
                        </tr>
                      })
                    } 
                  </tbody>
              </Table>
              </> : <>
              <p className='text-center'>There are no results found</p>
              </>
                }
              </> : <> 
              <h4 class="text-primary">{DashboardData.user_name}</h4>
              {
                  Results.length > 0 ? <>
                  
                  <p>Recent Test Results:</p>
                  <Table bordered hover>
                  <tbody>
                    {
                      Results.map((item) => {
                        return <tr>
                          <td>{item.time_of_test.split(' ')[0]} {item.time_of_test.split(' ')[1]}{item.time_of_test.split(' ')[2]}</td>
                      <td><span className={item.covid_results}></span></td>
                        </tr>
                      })
                    } 
                  </tbody>
              </Table>
              </> : <>
              <p>There are no results found</p>
              </>
                }
            <div className='d-flex align-items-center'>
              <ComButton Type='button' Name='Take Corowell Test' onClick={(e) => handleStep(e)}  />
            </div>
            </>
            } 
           
            </> : !!StepOne && StepOne == 1 ? <>
          <h5>Do you have any of the following symptoms conditions:</h5>
          <div className='questions'>
          <div className='mb-3'>
          <p>Cough</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Cough" id="Cough-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Cough" id="Cough-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Fever</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Fever" id="Fever-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Fever" id="Fever-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Fatigue</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Fatigue" id="Fatigue-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Fatigue" id="Fatigue-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Diarrhea</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Diarrhea" id="Diarrhea-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Diarrhea" id="Diarrhea-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Headache</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Headache" id="Headache-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Headache" id="Headache-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Stuffy nose</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Stuffynose" id="Stuffynose-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Stuffynose" id="Stuffynose-2" value="No" label="No" /> 
          </div> 
        </div> 
        <ComButton onClick={(e) => handleStepTwo(e)} Disabled = { Cough  == '' || Fever  == '' || Fatigue  == '' || Diarrhea  == '' || Headache  == '' || Stuffynose == '' ? 'disabled' : ''  } Type="button" Name="Next" /> 
          </div>
          </> : StepOne == 2 ? <>
          <h5>Do you have any of the following symptoms :</h5>
          <div className='questions '>

        <div className='mb-3'>
          <p>Sore Throat</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio"  onChange={(e) => HandleFormChange(e)} name="SoreThroat" checked={SoreThroat === 'Yes'} id="SoreThroat-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="SoreThroat" checked={SoreThroat === 'No'} id="SoreThroat-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Pain</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Pain" checked={Pain === 'Yes'} id="Pain-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Pain" checked={Pain === 'No'} id="Pain-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Nausea</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Nausea" checked={Nausea === 'Yes'} id="Nausea-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Nausea" checked={Nausea === 'No'} id="Nausea-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Vomiting</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Vomiting" checked={Vomiting === 'Yes'} id="Vomiting-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Vomiting" checked={Vomiting === 'No'} id="Vomiting-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Loss of smell</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="LossofSmell" checked={LossofSmell === 'Yes'} id="LossofSmell-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="LossofSmell" checked={LossofSmell === 'No'} id="LossofSmell-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Loss of taste</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="LossofTaste" checked={LossofTaste === 'Yes'} id="LossofTaste-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="LossofTaste" checked={LossofTaste === 'No'} id="LossofTaste-2" value="No" label="No" /> 
          </div> 
        </div> 
        <ComButton Disabled = { SoreThroat  == '' || Pain  == '' || Nausea  == '' || Vomiting  == '' || LossofSmell  == '' || LossofTaste == '' ? 'disabled' : ''  }  onClick={(e) =>  handleScanner(e)} Type="button" Name="Next" /> 
            </div> 
        
          </> : <></>
          }
          
        </Col> 
      </Row>
    </Container>
    </Container>
    );
  }
  
  export default Dashboard;
  