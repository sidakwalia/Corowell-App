import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap'; 
import Header from '../../Components/Header';
// import { QrReader } from 'react-qr-reader';
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
            //  let bodyString = JSON.stringify(body)
            let bodyString = {"sn": "C10012000004D", "sig": "DOHZXGGT", "v": 2, "ri": "fbff"}
             console.log(bodyString)            
             postData(`${urls.SetScentApi}`,bodyString).then((result) => {    
              let resultData ={
                "keys": [
                    "lavender",
                    "lavender",
                    "orange",
                    "watermelon",
                    "strawberry",
                    "peach",
                    "lemon",
                    "cardamom",
                    "dill",
                    "rose"
                ],
                "values": [
                    "lavender",
                    "Lavender",
                    "Orange",
                    "Watermelon",
                    "Strawberry",
                    "Peach",
                    "Lemon",
                    "Cardamom",
                    "Dill",
                    "Rose"
                ]
            }
              console.log(result)
              
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
      {/* <div style={{marginTop:30}}>
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
            <p>{JSON.stringify(Data)}</p> */}
      </Container>
    </Container>
  );
}

export default Scanner;
