import React from "react"; 

const ComInput = ({
  Type = "",
  Placeholder = "",
  ClassName = "",
  Name = "",
  Value,
  For = "",
  onChange = () => { },
  Error = false,
  ErrorMessage = '',
  disabled = false
}) => (
  <div className='theme-input-field'>
    <input
      type={Type}
      onChange={(e) => onChange(e) || null}
      for={For}
      className={`${ClassName}`}
      value={Value}
      placeholder={Placeholder}
      name={Name}
      disabled={disabled}
    />
    {!!Error ? <span className='error-message'>{!!ErrorMessage ? ErrorMessage : ''}</span> : <></>}
  </div>
);

export default ComInput;
