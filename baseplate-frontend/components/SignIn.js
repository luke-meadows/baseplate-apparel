import useForm from '../lib/useForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { ProductsPageHeading } from './styles/ProductsPageStyles';
import { Form } from './styles/Form';
import { useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { SignContainer } from './styles/SignContainer';
import Error from './Error';

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
        }
      }
    }
  }
`;

export default function SignIn({ type }) {
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });

  // mutation functions
  const [signIn, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  if (data) {
    console.log(data);
  }

  const error =
    data?.authenticateUserWithPassword?.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? 'Invalid username or password.'
      : null;
  console.log(error);

  // handle submit of signin form
  async function handleSubmit(e) {
    e.preventDefault();
    await signIn();
    clearForm();
  }

  return (
    <SignContainer>
      <ProductsPageHeading>
        <h4>Login</h4>
      </ProductsPageHeading>
      <Form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">{type}</button>
        {error && <Error errorMessage={error} section="sign" />}
      </Form>
    </SignContainer>
  );
}
