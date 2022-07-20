import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap'; 
import Header from '../../Components/Header';
import { QrReader } from 'react-qr-reader';
const Scanner = () => { 
    const [Data, setData] = useState('No result');
    const handleScan = data => {
        if (data) {
             setData(data)
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
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
            </div>
            <p>{Data}</p>
      </Container>
    </Container>
  );
}

export default Scanner;
