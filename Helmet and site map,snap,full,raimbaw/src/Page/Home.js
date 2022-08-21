
import React, { useState } from 'react';
import { Button, Card, CodeInput, PhoneInput } from 'react-rainbow-components';
import styled from 'styled-components';

import { Helmet } from 'react-helmet-async'
const Home = () => {
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const [phone, setPhone] = useState();

const labelStyle = {
  fontSize: '16px',
  maxWidth: '287px',
  marginBottom: '40px'
};
const cardStyle = { padding: '40px' };
const codeInputStyle = { marginBottom: '41px' };

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 400px;
`;

const handleOnSubmit = () => {
  const isValid = code?.length === 6;
  if(!isValid) {
      setError('Invalid Code');
      console.log(phone);
  }else{
      setError();
  }
};

  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Home page.' />
      <link rel='canonical' href="/home"/>
    </Helmet>
    <h1>{code}</h1>
    <h1>{phone?.phone}</h1>
      <Card style={cardStyle}>
            <CodeInput
                id="codeinput-3"
                value={code}
                label='To continue, please enter the 6-digit verification code.'
                length={6}
                onChange={setCode}
                style={codeInputStyle}
                error={error}
            />
            <div className="rainbow-flex rainbow-justify_center">
                <Button
                    label="Continue"
                    onClick={handleOnSubmit}
                    variant="brand"
                />
            </div>
            <PhoneInput
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={setPhone}
            value={phone}
        />
        </Card>
    </>
  )
}

export default Home