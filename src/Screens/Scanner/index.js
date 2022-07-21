import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap'; 
import Header from '../../Components/Header';
import { QrReader } from 'react-qr-reader';
import { useLocation, useNavigate } from 'react-router';
import { postData } from '../../api';
import urls from '../../api/urls';
import { CheckResponseWM } from '../../Helpers/CheckResponse';
const Scanner = (props) => { 
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const [Data, setData] = useState({});
    const handleScan = data => {
        if (!!data) { 
             setData(data)
             let body = JSON.parse(JSON.stringify(eval("(" + data + ")"))); 
             let bodyString = JSON.stringify(body)
             console.log(bodyString)            
             postData(`${urls.SetScentApi}`,bodyString).then((result) => {    
              if (!!result) {   
                navigate('/survey',{state:{result,bodyString}});
                }
            })
        }
    }
    const handleError = err => {
    console.error(err)
    }
  return (
    <Container fluid className='main-page'>
        <Header />
      <Container>
      <div style={{marginTop:30}}>
      <QrReader 
      constraints={{
        facingMode: 'environment'
    }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            handleScan(result?.text)
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
            </div> 
            <p>{JSON.stringify(Data)}</p>
      </Container>
    </Container>
  );
}

export default Scanner;
