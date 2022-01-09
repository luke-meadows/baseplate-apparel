import styled from 'styled-components';
import Image from 'next/image';
import SubscribeImage from '../public/img/assets/pexels-mbardo-8976456.jpg';
export default function SubscribeBanner() {
  return (
    <StyledBanner>
      <Image src={SubscribeImage} />
      <FormContainer>
        <StyledForm>
          <label htmlFor="email">
            Sign Up to our newsletter for 15% off your first order
          </label>
          <div>
            <StyledInput name="email" placeholder="Email" type="email" />
            <button type="submit">Submit</button>
          </div>
        </StyledForm>
      </FormContainer>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  position: relative;
  margin: 6rem 0 -1rem 0;
  width: 100vw;
`;
const FormContainer = styled.div`
  padding: 6rem;
  background: black;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;
const StyledForm = styled.form`
  div {
    display: flex;
    margin-top: 1rem;
  }
  label {
    color: white;
    font-size: 1.5rem;
  }
  button {
    height: 4rem;
  }
`;

export const StyledInput = styled.input`
  height: 4rem;
  line-height: 0;
  outline: none;
  border: none;
  display: block;

  width: 27.41rem;
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem 1rem;
`;
