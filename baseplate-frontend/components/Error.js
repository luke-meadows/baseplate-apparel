export default function Error({ errorMessage, section }) {
  console.log(errorMessage);
  let userMessage;
  if (errorMessage.includes('duplicate key error') && section === 'sign')
    userMessage = 'User already exists, please Login.';
  if (errorMessage.includes('minLength'))
    userMessage = 'Password must be at least 8 characters.';
  if (errorMessage === 'Invalid username or password.')
    userMessage = errorMessage;
  return (
    <div style={{ marginTop: '1rem' }}>
      <p
        style={{
          color: 'red',
          fontSize: '1.2rem',
          fontWeight: '300',
        }}
      >
        *{userMessage}
      </p>
    </div>
  );
}
