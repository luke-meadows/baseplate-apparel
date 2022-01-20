import styled from 'styled-components';

export default function EmailForm({ placeholder, withLabel }) {
  return (
    <StyledForm>
      {withLabel && (
        <label htmlFor="email">
          Sign Up to our newsletter for 15% off your first order
        </label>
      )}
      <div>
        <StyledInput name="email" placeholder={placeholder} type="email" />
        <button type="submit">Submit</button>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: 1px solid black;
  padding: 1px;
  div {
    display: flex;
    height: 4rem;
  }
  label {
    color: white;
    font-size: 1.5rem;
  }
  button {
    height: 100%;
  }
`;

export const StyledInput = styled.input`
  line-height: 0;
  outline: none;
  border: none;
  width: 27.41rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
`;
