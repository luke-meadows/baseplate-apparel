import useForm from '../lib/useForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

export default function SignIn() {
  const { inputs, handleChange } = useForm({
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
    const res = await signIn();
    console.log(res);
  }
  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
