import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { RegisterRequest } from '../../api';
import urls from '../../api/urls';
import ComButton from '../../Components/ComButton';
import ComInput from '../../Components/ComInput';
import { CheckResponseWM } from '../../Helpers/CheckResponse';
import { CheckValidations, EmailValidation, PasswordValidation } from '../../Helpers/Validators';
const Register = () => {
    const [UserName, setUserName] = useState({ Value: '', IsError: false, ErrorMessage: '' })
    const [EmailId, setEmailId] = useState({ Value: '', IsError: false, ErrorMessage: '' })
    const [Password, setPassword] = useState({ Value: '', IsError: false, ErrorMessage: '' })

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
    
    const handleSignup = () => {
      if (CheckValidations([
          EmailValidation(EmailId, setEmailId), 
          PasswordValidation(Password, setPassword)
      ])){
        let body = {
          email_id: EmailId.Value,
          user_name: UserName.Value,
          password: Password.Value,
      }
      RegisterRequest(urls.RegisterApi, body).then((result) => {            
              if (CheckResponseWM(result)) {
                  if (result.status_code == 200) {
                    return <Navigate to='/scanner' />
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
              <h3>Sign Up</h3>
              <p>Already have an account? <Link to="/">Sign In</Link></p>
              <Form>
              <ComInput Error={UserName.IsError} ErrorMessage={UserName.ErrorMessage} Value={UserName.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="UserName" Placeholder="Enter Email" />
              <ComInput Error={EmailId.IsError} ErrorMessage={EmailId.ErrorMessage} Value={EmailId.Value} onChange={(e) => HandleFormChange(e)} Type="email" Name="EmailId" Placeholder="Enter Email" />
              <ComInput Error={Password.IsError} ErrorMessage={Password.ErrorMessage} Value={Password.Value} onChange={(e) => HandleFormChange(e)} Type="password" Name="Password" Placeholder="Enter password" />                            
              <ComButton onClick={(e) => handleSignup(e)} Type="button" Name="Sign Up" />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Register;