import { useContext } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import { Ctx } from '../lib/NavCtxProvider';
import Logout from './Logout';
import SignUp from './SignUp';
import { useUser } from './User';
export function AccountSection() {
  const user = useUser();
  const { setStopScrolling, setAccountActive } = useContext(Ctx);
  function handleClose() {
    setStopScrolling(false);
    setAccountActive(false);
  }
  if (user) return <Logout user={user} />;
  return (
    <StyledAccountSection>
      <AccountContainer>
        <SignIn type="Login" />
        <Line />
        <SignUp type="Create Account" />
        <button onClick={handleClose} className="close">
          &#215;
        </button>
      </AccountContainer>
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
  z-index: 2;
  background: #ebebe6;
  border-radius: 0.5rem;
  @media (max-width: 1300px) {
    height: 100vh;
    width: 100vw;
  }
  .close{
    position: absolute;
    /* top: 1rem; */
    right: 2rem;
    width:1rem;
      font-size: 3rem;
      background: none;
      font-weight: 200;
      :hover {
        color: var(--main-blue);
        background: none;
      }
    }
  }
`;

const AccountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    overflow-y: scroll;
  }
`;

const Line = styled.div`
  border-left: 1px solid #51515187;
  width: 1%;
  height: 80%;
  margin: auto 0;
  @media (max-width: 900px) {
    border-left: none;
    border-bottom: 1px solid #51515187;
    height: 1%;
    width: 80%;
    margin: 0;
  }
`;
