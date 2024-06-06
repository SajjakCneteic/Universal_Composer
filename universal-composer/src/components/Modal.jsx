// SuccessModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h2>Welcome to Universal Composer</h2>
        <p>Your instance & login credentials <br /> have been sent to your email successfully!</p>
        <Link to='/login'><Button onClick={onClose}>Close</Button></Link>
      </ModalContainer>
    </Overlay>
  );
};

export default SuccessModal;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 500px;
  width: 80%;
  animation: ${fadeIn} 0.3s ease-out;

  h2 {
    margin-bottom: 25px;
    font-size: 24px;
    color: #333;
  }

  p {
    margin-bottom: 25px;
    font-size: 18px;
    color: #666;
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
