import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import loginBg from '../asset/loginBg.png';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { ImGithub } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    background-image: url(${loginBg});
    background-size: cover;
    /* height: 100vh; */
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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const tokenExpiration = sessionStorage.getItem('login-token-expiration');
    const currentTime = new Date().getTime();

    if (tokenExpiration && currentTime < tokenExpiration) {
      navigate('/');
    } else {
      sessionStorage.removeItem('login-token');
      sessionStorage.removeItem('login-token-expiration');
    }
  }, [navigate]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:IXwazaxs/auth/login', {
          email: email,
          password: password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(response);

        if (response.data.authToken) {
          const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
          sessionStorage.setItem('login-token', response.data.authToken);
          sessionStorage.setItem('login-token-expiration', expirationTime);

          toast.success('User Login Successfully');
          navigate('/');
        } else {
          toast.error('Username or password is incorrect. Please try again.');
        }
        
      } catch (error) {
        console.error('There was an error!', error);
        toast.error('Username or password is incorrect. Please try again.');
      }
    }
  };

  // const handleSubmit = async () => {
  //   let valid = true;

  //   if (!validateEmail(email)) {
  //       setEmailError('Invalid email format');
  //       valid = false;
  //   } else {
  //       setEmailError('');
  //   }

  //   if (password.length < 6) {
  //       setPasswordError('Password must be at least 6 characters long');
  //       valid = false;
  //   } else {
  //       setPasswordError('');
  //   }

  //   if (valid) {
  //       try {
  //           const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:IXwazaxs/auth/login', {
  //               email: email,
  //               password: password
  //           }, {
  //               headers: {
  //                   'Content-Type': 'application/json'
  //               }
  //           });

  //           console.log(response)

  //           if (response.data.authToken) {
  //               localStorage.setItem('login-token', response.data.authToken);
  //               toast.success('User Login Successfully');
  //               navigate('/');
  //           } else {
  //             toast.error('Username or password is incorrect. Please try again.');
  //           }
            
  //       } catch (error) {
  //           console.error('There was an error!', error);
  //           toast.error('Username or password is incorrect. Please try again.');
  //       }
  //   }
  // };

  return (
    <>
      <div><Toaster/></div>
      <GlobalStyle />
      <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'center' }}>
        <Title className='title'>Composer Login</Title>
      </div>
      <LoginContainer>
        <Subtitle>Welcome To Composer</Subtitle>
        <label>Email</label>
        <Input type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p style={{ color: '#e93838' ,marginTop:'-18px',marginBottom:'18px'}}>{emailError}</p>}
        <label>Password</label>
        <PasswordContainer>
          <Input type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
          <ToggleButton onClick={togglePasswordVisibility}>
            {showPassword ? <VscEye size={22} /> : <VscEyeClosed size={22} />}
          </ToggleButton>
        </PasswordContainer>
        {passwordError && <p style={{ color: '#e93838',marginTop:'-18px',marginBottom:'18px' }}>{passwordError}</p>}
        <StyledLink className='forgot' to="/forgot-password">Forgot Password?</StyledLink>
        <Button onClick={() => handleSubmit()}>Sign in</Button>
        {/* <p className='orcont'>or continue with</p>
        <SocialLogin>
          <SocialButton><FcGoogle /></SocialButton>
          <SocialButton><ImGithub /></SocialButton>
          <SocialButton><BiLogoFacebookCircle color='#399bf0' /></SocialButton>
        </SocialLogin>
        <p className='register'>
          Don't have an account yet? <StyledLink to='/register'>Register for free</StyledLink>
        </p> */}
      </LoginContainer>
    </>
  );
};

export default Login;
