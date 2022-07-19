import React, { useState } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
// import ComInput from '../../Components/ComInput';
// import ComButton from '../../Components/ComButton';
// import { Link, Redirect } from 'react-router-dom';
// import { CheckValidations, EmailValidation, PasswordValidation } from '../../Helpers/Validators';
// // import { LoginRequest } from '../../api';
// // import urls from '../../api/urls';
// import { CheckResponseWM } from '../../Helpers/CheckResponse';
// import ConvertFormData from '../../Helpers/ConvertFormData';

const Login = (props) => {

    const [Loader, setLoader] = useState(false);
    const [EmailId, setEmailId] = useState({ Value: 'restaurant@gleeca.com', IsError: false, ErrorMessage: '' })
    const [Password, setPassword] = useState({ Value: '123456789', IsError: false, ErrorMessage: '' })

    const loginCredentials = ({ target = {} }) => {
        let { value = '', name = '' } = target;
        switch (name) {
            case 'EmailId':
                return setEmailId(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
            case 'Password':
                return setPassword(i => ({ ...i, Value: value, IsError: false, ErrorMessage: '' }))
        }
    }

    const handleLogin = () => {
        // if (CheckValidations([EmailValidation(EmailId, setEmailId), PasswordValidation(Password, setPassword)])) {
        //     setLoader(true);
        //     LoginRequest(urls.LoginApi, ConvertFormData({ email: EmailId.Value, password: Password.Value })).then((result) => {
        //         if (CheckResponseWM(result)) {
        //             props.dispatch(UserAction(result))
        //             if (!result.data.is_email_verify) {
        //                 props.history.push('/otp');
        //             }
        //         }
        //         setLoader(!true);
        //     })
        // }
        return;
    }

    let { status = 0, data = {} } = !!props.user ? props.user : {}

    // if (!!status) {
    //     if (!data.is_email_verify) return <Redirect to='/otp' />
    // }

    return (
        <>
            <Container fluid className="auth">
                 <h1>sad</h1>
            </Container>
        </>
    )
}

// const mapStateToProps = (state) => ({
//     user: state.user,
// });

export default Login;