import styled from 'styled-components';
import SignIn from '../components/SignIn';
import Logout from './Logout';
import SignUp from './SignUp';
import { useUser } from './User';
export function AccountSection() {
  const user = useUser();
  if (user) return <Logout user={user} />;
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
  position: fixed;
  left: 50%;
  top: 50%;
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
