import styled from 'styled-components';
export default function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <IconContainer>
          <i class="footer-icon icon-twitter"></i>
          <i class="footer-icon icon-facebook"></i>
          <i class="footer-icon icon-instagram"></i>
        </IconContainer>
      </FooterTop>
      <FooterBottom>
        <h1>bottom</h1>
      </FooterBottom>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: var(--medium-screen-padding);
`;

const FooterTop = styled.div`
  border: 1px solid blue;
`;
const FooterBottom = styled.div`
  border: 1px solid green;
`;

const IconContainer = styled.menu``;
