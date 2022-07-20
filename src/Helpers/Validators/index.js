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

export const PhoneNoValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let phoneVal = /^[0-9]*$/i
    if (!Value || Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else if (!!Value && !phoneVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid Phone number' })); return false; }
    // else if (Value.length < 8) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Phone no must be at least 8 characters long' })); return false; }
    // else if (Value.length > 12) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Phone no must be maximum 12 characters long' })); return false; }
    else if (Value.length < 10) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid phone number' })); return false; }
    else if (Value.length > 12) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid phone number' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const PhoneNoOnlyValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let phoneVal = /^[0-9]*$/i
    console.log(!phoneVal.test(Value));
    console.log(!!Value && !phoneVal.test(Value));
    if (!!Value && !phoneVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid Phone number' })); return false; }
    else if (!!Value && Value.length < 10) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid phone number' })); return false; }
    else if (!!Value && Value.length > 12) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid phone number' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const PINValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    else if (Value.length < 4) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'PIN must be at least 4 characters long' })); return false; }
    else if (Value.length > 4) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'PIN must be maximum 4 characters long' })); return false; }
    else { !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' })); return true; }
};

export const OTPValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState) => {
    if (Value.trim() == '') { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
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
    if (!value || value.trim() == '') return false;
    return true;
}

export const AddMoreMultiValidation = (TotalList = [], setState = () => { }) => {
    let ClonedTotalList = [...TotalList];
    let allow = !false;
    if (!!ClonedTotalList && ClonedTotalList.length) {
        ClonedTotalList.map(item => {
            let { Value = '', IsError = false, ErrorMessage = '' } = item;
            if (!Value) {
                item.IsError = true; item.ErrorMessage = 'This field is required'; if (!!allow) { allow = false }
            }
            if (!!Value && Value.length === 0) { item.IsError = true; item.ErrorMessage = 'This field is required'; if (!!allow) { allow = false } }
            else { if (!!IsError) { item.IsError = true; item.ErrorMessage = 'This field is required' }; if (!!allow) { allow = true } }
        })
    }
    setState([...ClonedTotalList])
    if (!allow) return false
    else return true
};

export const DomainValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    if (!Value || (!!Value && Value.trim() == '')) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field is required' })); return false; }
    if (!!Value && Value.length < 3) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Sorry, your subdomain name must be between 3 and 30 characters long.' })); return false; }
    else if (!!Value && Value.length > 30) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Sorry, your subdomain name must be between 3 and 30 characters long.' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};
export const NameNumChar50Validation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let NameVal = /^[a-zA-Z0-9\s]*$/i
    if (!!Value && Value.length > 50) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 50 characters' })); return false; }
    else if (!NameVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid inputs' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};
export const NameChar30Validation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let NameVal = /^[a-zA-Z\s]*$/i
    if (!!Value && Value.length > 30) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above 30 characters' })); return false; }
    else if (!NameVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid inputs' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};
export const MaxCharValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { },CharCount = 0) => {
    if (!!CharCount && Value.length > CharCount) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above '+CharCount+' characters' })); return false; }
    else {
        !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
        return true;
    }
};
export const MinMaxCharValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { },MinCharCount = 0,MaxCharCount = 250) => {
    if(!!Value && Value.length >0){
        if (!!MaxCharCount && Value.length > MaxCharCount) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain above '+MaxCharCount+' characters' })); return false; }
        else if (!!MinCharCount && Value.length < MinCharCount) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field may not contain below '+MinCharCount+' characters' })); return false; }
        else {
            !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
            return true;
        }
    }
};
export const AlphaNumericSpecialValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let NameVal = /^[ A-Za-z0-9_@./#&+-,]*$/
    if(!!Value && Value.length >0){
        if (!NameVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'This field accept only Alpha Numeric and Special(_@./#&+-) characters' })); return false; }
        else {
            !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
            return true;
        }
    }
};
export const UrlValidation = ({ Value = '', IsError = false, ErrorMessage = '' }, setState = () => { }) => {
    let NameVal = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    if(!!Value && Value.length >0){
        if (!NameVal.test(Value)) { !IsError && setState(prev => ({ ...prev, IsError: true, ErrorMessage: 'Please enter a valid url' })); return false; }
        else {
            !!IsError && setState(prev => ({ ...prev, IsError: false, ErrorMessage: '' }));
            return true;
        }
    }
};
