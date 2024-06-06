import React, { useState } from 'react';
import loginBg from '../asset/loginBg.png';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 /* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */

  body {
    background-image: url(${loginBg});
    background-size: cover;
    /* height: 100vh; */
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    /* font-family: "Bebas Neue", sans-serif;  */
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 36px;
  margin: 30px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 90%;
  backdrop-filter: blur(10px);
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const AccordionWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  z-index: 20;
`;

const AccordionItem = styled.div`
  /* border: 1px solid #f0f0f0; */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: #f9f9f9;
  border: none;
  padding: 15px 20px;
  text-align: left;
  cursor: pointer;
  outline: none;
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #eaeaea; */
  }

  div {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 0.5s ease;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 5px 5px;
  padding: 15px 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #fff;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
 /* margin-top: 30px;
 margin-right:10px; */
`;

const InputLabel = styled.label`
  color: #fff;
  font-size: 18px;
  font-weight:bold;
`;

const SubmitButton = styled.button`
  display: block;
  background-color: #ffd700;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #f0c300;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 50px;
  font-size: 23px;
  color: #ccc;
  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #ccc;
  }

  &:before {
    margin-right: .25em;
  }

  &:after {
    margin-left: .25em;
  }
`;

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [autoSetup, setAutoSetup] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCheckboxChange = () => {
    setAutoSetup(!autoSetup);
  };

  return (
    <>
      <GlobalStyle />
        <Subtitle>Set Up Instances</Subtitle>
      <Container>
        <InputLabel style={{fontSize:'26px'}} htmlFor="autoSetupCheckbox">
        Do things manually 
          </InputLabel>
        <AccordionWrapper>
          <AccordionItem>
            <AccordionButton onClick={() => toggleAccordion(1)}>
              <div>Vendure</div>
              <div>{openIndex === 1 ? '-' : '+'}</div>
            </AccordionButton>
            <AccordionContent isOpen={openIndex === 1}>
              <FormGroup>
                <FormLabel htmlFor="vendure-shop-domain">Shop Domain</FormLabel>
                <FormInput id="vendure-shop-domain" type="text" placeholder="Shop Domain" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="vendure-admin-username">Admin Username</FormLabel>
                <FormInput id="vendure-admin-username" type="text" placeholder="Admin Username" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="vendure-admin-password">Admin Password</FormLabel>
                <FormInput id="vendure-admin-password" type="password" placeholder="Admin Password" />
              </FormGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton onClick={() => toggleAccordion(2)}>
              <div>Strapi</div>
              <div>{openIndex === 2 ? '-' : '+'}</div>
            </AccordionButton>
            <AccordionContent isOpen={openIndex === 2}>
              <FormGroup>
                <FormLabel htmlFor="magento-strapi-domain">Strapi Domain</FormLabel>
                <FormInput id="magento-strapi-domain" type="text" placeholder="Strapi Domain" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="magento-admin-username">Admin Username</FormLabel>
                <FormInput id="magento-admin-username" type="text" placeholder="Admin Username" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="magento-admin-password">Admin Password</FormLabel>
                <FormInput id="magento-admin-password" type="password" placeholder="Admin Password" />
              </FormGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton onClick={() => toggleAccordion(3)}>
              <div>Typesense</div>
              <div>{openIndex === 3 ? '-' : '+'}</div>
            </AccordionButton>
            <AccordionContent isOpen={openIndex === 3}>
              <FormGroup>
                <FormLabel htmlFor="shopify-typesense-domain">Typesense Domain</FormLabel>
                <FormInput id="shopify-typesense-domain" type="text" placeholder="Typesense Domain" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="shopify-admin-api-key">TYPESENSE_ADMIN_API_KEY</FormLabel>
                <FormInput id="shopify-admin-api-key" type="text" placeholder="TYPESENSE_ADMIN_API_KEY=xyz" />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="shopify-search-api-key">TYPESENSE_SEARCH_ONLY_API_KEY</FormLabel>
                <FormInput id="shopify-search-api-key" type="text" placeholder="TYPESENSE_SEARCH_ONLY_API_KEY=xyz" />
              </FormGroup>
            </AccordionContent>
          </AccordionItem>
        </AccordionWrapper>

{/* ----------- or ----------- */}
<Divider>OR</Divider>

        <CheckboxContainer>
          <input
            style={{width:'25px',height:'18px'}}
            type="checkbox"
            id="autoSetupCheckbox"
            checked={autoSetup}
            onChange={handleCheckboxChange}
          />
          <InputLabel style={{marginLeft:'10px'}} htmlFor="autoSetupCheckbox">
            Allow us to do the setup automatically.
          </InputLabel>
        </CheckboxContainer>
        <SubmitButton>Submit</SubmitButton>
      </Container>
    </>
  );
};

export default Accordion;
