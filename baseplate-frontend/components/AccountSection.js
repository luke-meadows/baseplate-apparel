import { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from './SignUp';
export function AccountSection() {
  return (
    <StyledAccountSection>
      <SignIn type="Login" />
      <Line />
      <SignUp type="Create Account" />
    </StyledAccountSection>
  );
}

const StyledAccountSection = styled.div`
  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.3);
  height: 50rem;
  width: 100rem;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  background: black;
  z-index: 2;
  background: #ebebe6;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
`;

const Line = styled.div`
  border-left: 1px solid #51515187;
  width: 1px;
  line-height: 0;
  height: 80%;
  margin: auto 0;
`;
