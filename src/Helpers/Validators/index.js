export const EmailValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let EmailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else if (!EmailVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid email address' })); return false; }
    else if (!!Value && Value.length > 50) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 50 characters' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};
export const EmailOnlyValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let EmailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!!Value && !EmailVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid email address' })); return false; }
    else if (!!Value && Value.length > 50) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 50 characters' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const PasswordValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else if (Value.length < 8) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Password should contain at least 8 characters' })); return false; }
    if (!!Value && Value.length > 30) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 30 characters' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const ConfirmPasswordValidation = (Password, { Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (PasswordValidation(Password)) {
        if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
        else if (Value !== Password.Value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Password and confirm password does not match' })); return false; }
        else if (Value === Password.Value) { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
    }
};

export const RequiredValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || (!!Value && Value.trim() == '')) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const Required50CharValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || (!!Value && Value.trim() == '')) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (!!Value && Value.length > 50) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 50 characters' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};

export const Required150CharValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || (!!Value && Value.trim() == '')) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (!!Value && Value.length > 150) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 50 characters' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};
export const NumberNonRequiredValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (Value < 0) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: "Field shouldn't contain symbols" })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};
export const NumberRequiredValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (Value < 0) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: "Field shouldn't contain symbols" })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const NumberWithPercentRequiredValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (Value > 100) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter between 1-100' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};


export const SelectRequiredValidation = ({ Value = {}, IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    //let { value = 0 } = Value;
    //console.log(Value.value);
    if (!Value.value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (!!Value.value && Value.value.length === 0) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const ArrayRequiredValidation = ({ Value = [], IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (!!Value && Value.length === 0) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
}; 

export const CheckValidations = (log = []) => { if (!!log && !!log.length) return !log.some(d => d === false); else return false; }