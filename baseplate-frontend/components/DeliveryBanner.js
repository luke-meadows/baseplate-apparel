import { motion } from 'framer-motion';
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

const StyledDeliveryBanner = styled(motion.div)`
  width: 100%;
  background: #eeeeee;
  height: 4rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  font-family: 'Lexend', sans-serif;

  h5 {
    font-weight: 300;
    display: flex;
    align-items: center;
    color: #515151;
  }
  span {
    margin: 0 0 0.1rem 1rem;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    color: #515151;
  }
`;
