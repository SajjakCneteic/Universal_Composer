// // Login.js
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import loginBg from '../asset/loginBg.png';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { ImGithub } from "react-icons/im";
import { Link } from 'react-router-dom';
import { VscEye , VscEyeClosed} from "react-icons/vsc";
import SuccessModal from '../components/Modal';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    background-image: url(${loginBg});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
  }
`;

const Title = styled.span`
  text-align: center;
  margin: auto;
  padding: 10px;
  color: white;
  background-color: #00417E;
  margin-bottom: 10px;
  border-radius: 8px;
  font-size: 1rem;
`;

const LoginContainer = styled.div`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 450px;
  backdrop-filter: blur(5px);
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* background: rgba(0, 0, 0, 0.5); */

  .orcont {
    text-align: center;
  }

  .register {
    font-size: 14px;
    text-align: center;
  }

  label {
    color: white;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 20px 30px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 2rem 0;
  border: none;
  border-radius: 5px;
  background-color: #1e3c72;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover{
    background-color: #34538d;
  }

  @media (max-width: 480px) {
    margin: 1.5rem 0;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const SocialButton = styled(Button)`
  flex: 1;
  margin: 0 0.25rem;
  background: #fff;
  color: #000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
`;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <GlobalStyle />
            <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'center' }}>
                <Title className='title'>Composer Register</Title>
            </div>
            <LoginContainer>
                <Subtitle>Welcome To Composer</Subtitle>
                <label>First Name</label>
                <Input type="text" placeholder="First Name" />
                <label>Last Name</label>
                <Input type="text" placeholder="Last Name" />
                <label>Phone Number</label>
                <Input type="number" placeholder="Phone Number" />
                <label>Plans And Pricing</label>
                <Select>
                    <option value="">Default</option>
                    <option value="express">Express</option>
                    <option value="standard">Standard</option>
                    <option value="enterprise">Enterprise</option>
                </Select>
                <label>Email</label>
                <Input type="email" placeholder="Email" />
                <label>Password</label>
                <PasswordContainer>
                    <Input type={showPassword ? "text" : "password"} placeholder="Password" />
                    <ToggleButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VscEye /> : <VscEyeClosed />}
                    </ToggleButton>
                </PasswordContainer>
                
                <Button>Sign in</Button>
                {/* <p className='orcont'>or continue with</p>
        <SocialLogin>
          <SocialButton><FcGoogle /></SocialButton>
          <SocialButton><ImGithub /></SocialButton>
          <SocialButton><BiLogoFacebookCircle color='#399bf0' /></SocialButton>
        </SocialLogin>
        */}
        <p className='register'>
          Don't have an account yet? <StyledLink to='/register'>Register for free</StyledLink>
        </p> 
            </LoginContainer>
            <SuccessModal isOpen={true}/>
        </>
    );
};

export default Login;









