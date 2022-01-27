import useForm from '../lib/useForm';
import { Form } from './styles/Form';
import { ProductsPageHeading } from './styles/ProductsPageStyles';
import { gql, useMutation } from '@apollo/client';
import { SignContainer } from './styles/SignContainer';
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

  async function handleSubmit(e) {
    e.preventDefault();
    await signUp();
  }

  return (
    <SignContainer>
      <ProductsPageHeading>
        <h4>Create Account</h4>
      </ProductsPageHeading>
      <Form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
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
        <button>{type}</button>
      </Form>
    </SignContainer>
  );
}
