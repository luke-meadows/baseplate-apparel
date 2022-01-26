import useForm from '../lib/useForm';
import AccountContainer from './AccountContainer';
import { Form } from './styles/Form';
import { ProductsPageHeading } from './styles/ProductsPageStyles';
export default function SignUp({ type }) {
  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  return (
    <AccountContainer>
      <ProductsPageHeading>
        <h4>Create Account</h4>
      </ProductsPageHeading>
      <Form>
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
          type="text"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button>{type}</button>
      </Form>
    </AccountContainer>
  );
}
