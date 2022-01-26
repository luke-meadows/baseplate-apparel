import useForm from '../lib/useForm';
import { gql } from '@apollo/client';
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
  const [signIn, { error, loading }] = useMutation(SIGNIN_emMUTATION, {
    varia,
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form method="POST">
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
      </form>
    </div>
  );
}
