import styled from 'styled-components';
import Image from 'next/image';
import SubscribeImage from '../public/img/assets/pexels-mbardo-8976456.jpg';
import EmailForm from './EmailForm';
export default function SubscribeBanner() {
  return (
    <StyledBanner>
      <Image
        placeholder="blur"
        blurDataURL={SubscribeImage}
        src={SubscribeImage}
      />
      <FormContainer>
        <EmailForm placeholder="Email" withLabel={true} />
      </FormContainer>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  position: relative;
  margin: 0 0 -1rem 0;
  width: 100vw;
`;

const FormContainer = styled.div`
  padding: 6rem;
  background: black;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`;
