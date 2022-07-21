import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import ComInput from './Components/ComInput'; 
import ComButton from './Components/ComButton';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CheckValidations, EmailValidation, PasswordValidation } from './Helpers/Validators';
import urls from './api/urls';
import { LoginRequest } from './api';
import { CheckResponseWM } from './Helpers/CheckResponse';
import ConvertFormData from './Helpers/ConvertFormData';
const App = (props) => {
  console.log(props);
  // const saved = localStorage.getItem("user_name");
  // if(!!saved){
  //   navigate('/scanner');
  // }
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("email_id") === null) {
      
    }
    else{
      navigate('/scanner',{state:{}}); 
    }
}, []);
  const [UserName, setUserName] = useState({ Value: '', IsError: false, ErrorMessage: '' })
    const [Password, setPassword] = useState({ Value: '', IsError: false, ErrorMessage: '' })
    const [EmailId, setEmailId] = useState({ Value: '', IsError: false, ErrorMessage: '' })

    const HandleFormChange = ({ target = {} }) => {
        let { value = '', name = '', checked = false } = target;
        switch (name) {
            case 'UserName':
                return setUserName(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
            case 'EmailId':
                return setEmailId(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
            case 'Password':
                return setPassword(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
        }
    }
    
    const handleLogin = () => {
      if (CheckValidations([
          // EmailValidation(EmailId, setEmailId), 
          PasswordValidation(Password, setPassword)
      ])){
        let body = {
          email_id: EmailId.Value,
          user_name: UserName.Value,
          password: Password.Value,
      }
          LoginRequest(urls.LoginApi, body).then((result) => {    
            if (CheckResponseWM(result)) {        
                  if (result.status_code == 200) {
                    localStorage.setItem("user_name", JSON.stringify(UserName.Value));
                    localStorage.setItem("email_id", JSON.stringify(EmailId.Value));
                    if(!!result.result){
                      const body = result.result;
                      console.log(result.result)
                      navigate('/result',{state:{body}});  
                    }
                    else{
                      navigate('/scanner',{state:{}});
                    }
                  }
                  }
          })
      }
      return;
  }
  return (
    <Container fluid className='auth-page'>
      <Container>
        <Row> 
          <Col lg={12} md={12}>
            <div className='auth-page-box'>
            <Image width="150" src={`${process.env.PUBLIC_URL}/logo.png`} className="mb-4 mx-auto d-flex align-items-center justify-content-center" />
              <h3>Sign In</h3>
              <p>New User? <Link to="/register">Create an account</Link></p>
              <Form>
              <ComInput Error={UserName.IsError} ErrorMessage={UserName.ErrorMessage} Value={UserName.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="UserName" Placeholder="Username" />
              <ComInput Error={EmailId.IsError} ErrorMessage={EmailId.ErrorMessage} Value={EmailId.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="EmailId" Placeholder="Enter Email" />
              <ComInput Error={Password.IsError} ErrorMessage={Password.ErrorMessage} Value={Password.Value} onChange={(e) => HandleFormChange(e)} Type="password" Name="Password" Placeholder="Enter password" />                            
              <ComButton onClick={(e) => handleLogin(e)} Type="button" Name="Login" />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
