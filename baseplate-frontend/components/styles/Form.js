import styled from 'styled-components';

export const Form = styled.form`
  input {
    border: 1px solid #51515187;
    margin-bottom: 1rem;
    line-height: 0;
    outline: none;
    width: 27.41rem;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    &:focus {
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.2);
    }
  }
  * {
    line-height: initial;
  }
  label {
    color: rgba(0, 0, 0, 0.7);
    display: block;
    margin-bottom: 0.5rem;
  }

  button {
    background: var(--main-blue);
    display: block;
    width: fit-content;
    height: initial;
    padding: 0.59rem 3rem;
    margin-top: 1rem;
    font-size: 1.3rem;
  }
`;
