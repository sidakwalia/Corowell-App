export const EmailValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let EmailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
    else if (!EmailVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Invalid Email' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const PasswordValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
    else if (Value.length < 8) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Password should contain at least 8 characters' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const ConfirmPasswordValidation = (Password, { Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (PasswordValidation(Password)) {
        if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
        else if (Value !== Password.Value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Password and confirm password does not match' })); return false; }
        else if (Value === Password.Value) { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
    }
};

export const RequiredValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const PhoneNoValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
    else if (Value.length < 8) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Phone no must be at least 8 characters long' })); return false; }
    else if (Value.length > 12) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Phone no must be maximum 12 characters long' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const OTPValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState) => {
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This Field Is Required' })); return false; }
    else if (Value.length !== 6) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Invalid OTP' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const CheckValidations = (log = []) => { if (!!log && !!log.length) return !log.some(d => d === false); else return false; }

export const PhoneNoVal = (value = '') => {
    if (!value) return false;
    if (value.trim().length > 12) return false;
    if (value.trim().length < 8) return false;
    return true;
}

export const EmailVal = (value = '') => {
    let EmailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (value.trim() == '') return false;
    else if (!EmailVal.test(value)) return false;
    else return true;
}

export const RequiredVal = (value = '') => {
    if (value.trim() == '') return false;
    return true;
}