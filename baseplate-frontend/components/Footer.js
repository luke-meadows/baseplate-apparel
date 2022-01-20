import styled from 'styled-components';
import EmailForm from './EmailForm';
import { StyledInput } from './SubscribeBanner';
export default function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <IconContainer>
          <i className="footer-icon icon-twitter"></i>
          <i className="footer-icon icon-facebook"></i>
          <i className="footer-icon icon-instagram"></i>
        </IconContainer>
        <EmailForm placeholder="Sign Up to our newsletter" />
      </FooterTop>
      <FooterBottom>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>UK Shipping </li>
          <li>UK Returns </li>
          <li>International Shipping </li>
          <li>International Returns </li>
          <li>FAQs</li>
        </ul>
      </FooterBottom>
      <p>
        <span className="link">Terms and Conditions</span> |{' '}
        <span className="link">Privacy</span> | © Baseplate{' '}
        {new Date().getFullYear()}
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 4rem 18rem;
  border-top: 1px solid #51515187;
  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 4rem;
  }
  .link {
    cursor: pointer;
  }
  .link:hover {
    color: var(--main-blue);
  }
`;

const FooterTop = styled.div`
  width: fit-content;
  margin: 0 auto 4rem auto;
  display: flex;
  align-items: center;
`;
const FooterBottom = styled.div`
  max-width: 1200px;
  margin: auto;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      font-size: 1.3rem;
      color: #515151;
      cursor: pointer;
      font-weight: 300;
    }
    li:hover {
      color: var(--main-blue);
    }
  }
`;

const IconContainer = styled.div`
  margin-right: 3rem;
`;
