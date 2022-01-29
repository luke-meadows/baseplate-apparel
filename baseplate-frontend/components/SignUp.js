import useForm from '../lib/useForm';
import { Form } from './styles/Form';
import { ProductsPageHeading } from './styles/ProductsPageStyles';
import { gql, useMutation } from '@apollo/client';
import { SignContainer } from './styles/SignContainer';
import { SIGNIN_MUTATION } from '../components/SignIn';
import { CURRENT_USER_QUERY } from '../components/User';
import Error from './Error';
import Loading from './Loading';

export default function SignUp({ type }) {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION(
      $name: String!
      $email: String!
      $password: String!
    ) {
      createUser(data: { name: $name, email: $email, password: $password }) {
        id
        name
        email
      }
    }
  `;

  const [signUp, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });
  const [signIn, { signInLoading = loading }] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: inputs.email,
      password: inputs.password,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signUp();
    // await user creation then log user in
    if (res.data.createUser) {
      await signIn();
    }
    clearForm();
  }

  return (
    <SignContainer>
      {signInLoading && <Loading />}
      {loading && <Loading />}
      <ProductsPageHeading>
        <h4>Create Account</h4>
      </ProductsPageHeading>
      <Form method="POST" onSubmit={handleSubmit} disabled={loading}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          autoComplete="false"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          autoComplete="false"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          autocomplete="off"
        />
        <button>{type}</button>
        {error && <Error errorMessage={error.message} section="sign" />}
      </Form>
    </SignContainer>
  );
}
