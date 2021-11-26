import styled from 'styled-components';

export const DeliveryBanner = () => {
  return (
    <StyledDeliveryBanner>
      <h5>
        Free UK delivery on all orders over £80{' '}
        <span className="material-icons">local_shipping</span>
      </h5>
    </StyledDeliveryBanner>
  );
};

const StyledDeliveryBanner = styled.div`
  width: 100%;
  background: #ebebe6;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono';
  font-weight: 400;
  h5 {
    display: flex;
    align-items: center;
  }
  span {
    margin: 0 0 0.1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
