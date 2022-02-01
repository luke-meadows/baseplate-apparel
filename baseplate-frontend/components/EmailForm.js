import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';

const CREATE_EMAIL_MUTATION = gql`
  mutation CREATE_EMAIL_MUTATION($email: String!) {
    createEmail(data: { email: $email }) {
      email
    }
  }
`;
export default function EmailForm({ placeholder, withLabel }) {
  const [email, setEmail] = useState({ email: '' });
  const [createEmail, { data, error, loading }] = useMutation(
    CREATE_EMAIL_MUTATION,
    {
      variables: email,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setEmail({ email: await e.target.email.value });
    await createEmail();
    e.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      {withLabel && (
        <label htmlFor="email">
          Sign Up to our newsletter for 15% off your first order
        </label>
      )}
      <InputContainer>
        <StyledInput
          onChange={(e) => setEmail({ email: e.target.value })}
          name="email"
          placeholder={placeholder}
          type="email"
        />
        <button type="submit">Submit</button>
      </InputContainer>
    </StyledForm>
  );
}

const InputContainer = styled.div`
  border: 1px solid #51515187;
`;

const StyledForm = styled.form`
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
