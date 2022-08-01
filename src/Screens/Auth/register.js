import React, { useState } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterRequest } from '../../api';
import urls from '../../api/urls';
import ComButton from '../../Components/ComButton';
import ComInput from '../../Components/ComInput';
import { CheckResponseWM } from '../../Helpers/CheckResponse';
import { CheckValidations, EmailValidation, PasswordValidation, RequiredValidation } from '../../Helpers/Validators';
const Register = () => {
  const navigate = useNavigate(); 
  
  // Define Form fields
  const [ StepOne, setStepOne ] = useState(true); 
  const [ StepTwo, setStepTwo ] = useState(1); 
  const [EmailId, setEmailId] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [Password, setPassword] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [ Admin, setAdmin ] = useState('');
  const [Name, setName] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [ Gender, setGender ] = useState(''); 
  const [OrgName, setOrgName] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [Address, setAddress] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [ InsuranceCarrier, setInsuranceCarrier ] = useState(false);
  const [InsuranceCompany, setInsuranceCompany] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [InsuranceNumber, setInsuranceNumber] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [Age, setAge] = useState({ Value: 0, IsError: false, ErrorMessage: '' });
  const [GroupNo, setGroupNo] = useState({ Value: '', IsError: false, ErrorMessage: '' });
  const [Ethnicity, setEthnicity] = useState('');
  const [SmokingStatus, setSmokingStatus] = useState('');
  const [Lung, setLung] = useState('');
  const [Heart, setHeart] = useState('');
  const [Liver, setLiver] = useState('');
  const [Diabetes, setDiabetes] = useState('');
  const [Kidney, setKidney] = useState('');
  const [Neurological, setNeurological] = useState('');
  const [Autoimmune, setAutoimmune] = useState('');
  const [Cancer, setCancer] = useState('');
  
  
  // Handle Form values
  const HandleFormChange = ({ target = {} }) => {
    let { value = '', name = '', checked = false } = target;
    switch (name) {
      case 'EmailId':
      return setEmailId(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Password':
      return setPassword(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Admin':
      return setAdmin(value);      
      case 'Name':
      return setName(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'OrgName':
      return setOrgName(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Address':
      return setAddress(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'InsuranceCarrier':
      return setInsuranceCarrier(value);    
      case 'InsuranceCompany':
      return setInsuranceCompany(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'InsuranceNumber':
      return setInsuranceNumber(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Gender':
      return setGender(value);  
      case 'SmokingStatus':
      return setSmokingStatus(value);    
      case 'Age':
      return setAge(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Ethnicity':
      return setEthnicity(value)
      case 'GroupNo':
      return setGroupNo(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
      case 'Lung':
      return setLung(value);
      case 'Heart':
      return setHeart(value);
      case 'Liver':
      return setLiver(value);
      case 'Diabetes':
      return setDiabetes(value);
      case 'Kidney':
      return setKidney(value);
      case 'Neurological':
      return setNeurological(value);
      case 'Autoimmune':
      return setAutoimmune(value);
      case 'Cancer':
      return setCancer(value);
    }
  }
  
  console.log(Ethnicity)
  // Form Steps
  const handleStep = () => {
    if (CheckValidations([
      EmailValidation(EmailId, setEmailId), 
      PasswordValidation(Password, setPassword)
    ])){
      setStepOne(false); 
    }
  } 
  const handleStepTwo = () => { 
    setStepTwo(2); 
  } 
  const handleStepThree = () => { 
    if (CheckValidations([ 
      RequiredValidation(GroupNo,setGroupNo)
    ])){
      setStepTwo(3); 
    }
    
  } 
  // Sign up Api
  const handleSignup = () => { 
    let disease = {
    lungs: Lung,
    heart: Heart,
    liver: Liver,
    diabetes: Diabetes,
    kidney: Kidney,
    neurolo: Neurological,
    autoimmune: Autoimmune,
    cancer: Cancer
  } 
      let body = {
        email_id: EmailId.Value,
        password: Password.Value, 
        group_admin : Admin,
        name : Name.Value,
        name_org : OrgName.Value,
        address : Address.Value,
        insurance_flag : !!InsuranceCarrier ? 'Yes' : 'no' ,
        insurance_comp : InsuranceCompany.Value,
        insurance_number : InsuranceNumber.Value,
        age : Age.Value,
        ethinicity : Ethnicity,
        gender : Gender,
        smoking_status : SmokingStatus,
        group_id : GroupNo.Value,
        affiliations : OrgName.Value,
        disease_details : disease
      }
      console.log(body)
      RegisterRequest(urls.RegisterApi, body).then((result) => {            
        if (CheckResponseWM(result)) {
          console.log(result);
          if (result.status_code == 200) { 
            localStorage.setItem("islogged", "true");
            sessionStorage.setItem("result",  JSON.stringify(result));
            sessionStorage.setItem("email",  JSON.stringify(EmailId.Value));
            return navigate('/dashboard',{state:{result}});
          }
        }
      }) 
    return;
  }
  return (
    <Container fluid className='auth-page'>
    <Container>
    <Row>
    <Col lg={12} md={12}>
    <div className='auth-page-box'>
    <Image width="180" src={`${process.env.PUBLIC_URL}/Asset/niander.png`} className="mb-4 mx-auto d-flex align-items-center justify-content-center" />
    <h3>Sign Up</h3>
    <p>Already have an account? <Link to="/">Sign In</Link></p>
    <Form>
    {
      !!StepOne ? <> 
      <ComInput Error={EmailId.IsError} ErrorMessage={EmailId.ErrorMessage} Value={EmailId.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="EmailId" Placeholder="Enter Email" />
      <ComInput Error={Password.IsError} ErrorMessage={Password.ErrorMessage} Value={Password.Value} onChange={(e) => HandleFormChange(e)} Type="password" Name="Password" Placeholder="Enter password" />                            
      <div className='d-flex justify-content-between'>
      <p>Group Admin ?</p>
      <div className='d-flex justify-content-between'>
      <Form.Check
      inline 
      type="radio"
      onChange={(e) => HandleFormChange(e)}
      name="Admin"
      id="Admin-1"
      value="yes" 
      checked={Admin === 'yes'}
      label="Yes" 
      />
      <Form.Check 
      inline 
      type="radio"
      onChange={(e) => HandleFormChange(e)}
      name="Admin"
      id="Admin-2" 
      checked={Admin === 'no'}
      value="no"
      label="No" 
      /> 
      </div>
      </div>
      <ComButton onClick={(e) => handleStep(e)} Type="button" Name="Sign Up" />
      </> : !!Admin && Admin == 'yes' ?
      <>
      <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <ComInput Error={Name.IsError} ErrorMessage={Name.ErrorMessage} Value={Name.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="Name" Placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Name of your Organization</Form.Label>
      <ComInput Error={OrgName.IsError} ErrorMessage={OrgName.ErrorMessage} Value={OrgName.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="OrgName" Placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Address of your organization</Form.Label>
      <ComInput Error={Address.IsError} ErrorMessage={Address.ErrorMessage} Value={Address.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="Address" Placeholder="" />
      </Form.Group>
      <div className='mb-3'>
      <p>Do you have a central insurance carrier</p>
      <div className='d-flex mt-2'>
      <Form.Check
      inline 
      type="radio"
      onChange={(e) => HandleFormChange(e)}
      name="InsuranceCarrier"
      id="InsuranceCarrier-1"
      value="1"
      label="Yes" 
      checked={InsuranceCarrier === '1'}
      />
      <Form.Check 
      inline 
      type="radio"
      onChange={(e) => HandleFormChange(e)}
      name="InsuranceCarrier"
      id="InsuranceCarrier-2"
      value="0"
      label="No" 
      checked={InsuranceCarrier === '0'}
      /> 
      </div> 
      </div>
      {
        !!InsuranceCarrier && InsuranceCarrier == 1 ? <>
        <Form.Group className="mb-3">
        <Form.Label>Insurance Company</Form.Label>
        <ComInput Error={InsuranceCompany.IsError} ErrorMessage={InsuranceCompany.ErrorMessage} Value={InsuranceCompany.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="InsuranceCompany" Placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Insurance Number</Form.Label>
        <ComInput Error={InsuranceNumber.IsError} ErrorMessage={InsuranceNumber.ErrorMessage} Value={InsuranceNumber.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="InsuranceNumber" Placeholder="" />
        </Form.Group>
        </> : <>
        </>
      }
      <ComButton onClick={(e) => handleSignup(e)} Type="button" Name="Sign Up" />
      </> :<>
      {
        StepTwo == 1 ? <>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <ComInput Error={Name.IsError} ErrorMessage={Name.ErrorMessage} Value={Name.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="Name" Placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <ComInput Error={Address.IsError} ErrorMessage={Address.ErrorMessage} Value={Address.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="Address" Placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <ComInput Error={Age.IsError} ErrorMessage={Age.ErrorMessage} Value={Age.Value} onChange={(e) => HandleFormChange(e)} Type="number" Name="Age" Placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Ethnicity</Form.Label>
        <Form.Select aria-label="Default select example" name="Ethnicity" defaultValue={Ethnicity} onChange={(e) => HandleFormChange(e)} >
        <option  disabled>Select</option>
        <option selected value="white">White</option>
        <option value="Mixed / Multiple ethnic groups">Mixed / Multiple ethnic groups</option>
        <option value="Asian / Asian British">Asian / Asian British</option>
        <option value="Black / African / Caribbean / Black British">Black / African / Caribbean / Black British</option>
        <option value="other">Other ethnic group</option>
        </Form.Select>
        </Form.Group>
        <div className='mb-3'>
        <p>Gender</p>
        <div className='d-flex mt-2'>
        <Form.Check
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="Gender"
        id="Gender-1"
        value="Male"
        label="Male"  
        />
        <Form.Check 
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="Gender"
        id="Gender-2"
        value="Female"
        label="Female"  
        /> 
        <Form.Check 
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="Gender"
        id="Gender-3"
        value="Unspecified"
        label="Unspecified"  
        /> 
        </div> 
        </div>
        <div className='mb-3'>
        <p>Smoking Status</p>
        <div className='d-flex mt-2'>
        <Form.Check
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="SmokingStatus"
        id="SmokingStatus-1"
        value="Smoker"
        label="Yes"  
        />
        <Form.Check 
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="SmokingStatus"
        id="SmokingStatus-2"
        value="Non-Smoker"
        label="No"  
        /> 
        </div> 
        </div>
        <ComButton onClick={(e) => handleStepTwo(e)} Type="button" Name="Next" />
        </> : StepTwo == 2 ? <>
        <div className='mb-3'>
        <p>Do you have insurance</p>
        <div className='d-flex mt-2'>
        <Form.Check
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="InsuranceCarrier"
        id="InsuranceCarrier-1"
        value="1"
        label="Yes" 
        checked={InsuranceCarrier === '1'}
        />
        <Form.Check 
        inline 
        type="radio"
        onChange={(e) => HandleFormChange(e)}
        name="InsuranceCarrier"
        id="InsuranceCarrier-2"
        value="0"
        label="No" 
        checked={InsuranceCarrier === '0'}
        /> 
        </div> 
        </div>
        
        {
          !!InsuranceCarrier && InsuranceCarrier == 1 ? <>
          <Form.Group className="mb-3">
          <Form.Label>Insurance Company</Form.Label>
          <ComInput Error={InsuranceCompany.IsError} ErrorMessage={InsuranceCompany.ErrorMessage} Value={InsuranceCompany.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="InsuranceCompany" Placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Insurance Number</Form.Label>
          <ComInput Error={InsuranceNumber.IsError} ErrorMessage={InsuranceNumber.ErrorMessage} Value={InsuranceNumber.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="InsuranceNumber" Placeholder="" />
          </Form.Group>
          </> : <>
          </>
        }
        <Form.Group className="mb-3">
        <Form.Label>Affiliations / Organization</Form.Label>
        <ComInput Error={OrgName.IsError} ErrorMessage={OrgName.ErrorMessage} Value={OrgName.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="OrgName" Placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Group No</Form.Label>
        <ComInput Error={GroupNo.IsError} ErrorMessage={GroupNo.ErrorMessage} Value={GroupNo.Value} onChange={(e) => HandleFormChange(e)} Type="text" Name="GroupNo" Placeholder="" />
        </Form.Group>
        <ComButton onClick={(e) => handleStepThree(e)} Type="button" Name="Next" /> 
        </> : StepTwo == 3 ? <>
        <h5>Do you have any of the following health conditions:</h5>
        <div className='mb-3'>
          <p>Lung Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Lung" id="Lung-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Lung" id="Lung-2" value="No" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Heart Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Heart" id="Heart-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Heart" id="Heart-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Liver Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Liver" id="Liver-1" value="Yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Liver" id="Liver-2" value="No" label="No" /> 
          </div> 
        </div> 
        <div className='mb-3'>
          <p>Diabetes Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Diabetes" id="Diabetes-1" value="yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Diabetes" id="Diabetes-2" value="no" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Kidney Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Kidney" id="Kidney-1" value="yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Kidney" id="Kidney-2" value="no" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Neurological Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Neurological" id="Neurological-1" value="yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Neurological" id="Neurological-2" value="no" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Autoimmune Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Autoimmune" id="Autoimmune-1" value="yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Autoimmune" id="Autoimmune-2" value="no" label="No" /> 
          </div> 
        </div>
        <div className='mb-3'>
          <p>Cancer Disease</p>
          <div className='d-flex mt-2'>
          <Form.Check inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Cancer" id="Cancer-1" value="yes" label="Yes" />
          <Form.Check  inline  type="radio" onChange={(e) => HandleFormChange(e)} name="Cancer" id="Cancer-2" value="no" label="No" /> 
          </div> 
        </div>
        <ComButton onClick={(e) => handleSignup(e)} Type="button" Name="Sign Up" /> 
        </>  : <></>
      }
      </>
    }
    
    
    </Form>
    </div>
    </Col>
    </Row>
    </Container>
    </Container>
    );
  }
  
  export default Register;