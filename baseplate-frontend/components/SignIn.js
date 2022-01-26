import useForm from '../lib/useForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { ProductsPageHeading } from './styles/ProductsPageStyles';
import { Form } from './styles/Form';
import AccountContainer from './AccountContainer';
import { useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';

export default function SignIn({ type }) {
  const { setAccountActive, setStopScrolling } = useContext(NavCtx);

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const SIGNIN_MUTATION = gql`
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

  // mutation functions
  const [signIn, { error, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  // handle submit of signin form
  async function handleSubmit(e) {
    e.preventDefault();
    await signIn();
    resetForm();
    setAccountActive(false);
    setStopScrolling(false);
  }
  return (
    <AccountContainer>
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
      </Form>
    </AccountContainer>
  );
}
