import { useState } from 'react';
import Button from '@lf-mono-web/components/lib/Button';
import { useAppDispatch } from 'src/Common/redux/hooks';
import InputField from '@lf-mono-web/components/lib/InputField';
import { login } from 'src/Auth/redux/reducer';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await dispatch(
      login({ email, password }),
    );
    if (response.meta.requestStatus === 'rejected') {
      alert('not valid');
    } else if (
      response.meta.requestStatus === 'fulfilled'
    ) {
      navigate('/');
    }
  };

  return (
    <div>
      <h4>Login </h4>
      <small>{error}</small>
      <InputField
        onChange={e => {
          setEmail(e.target.value);

          if (e.target.value) {
            setError('');
          }
        }}
        label="email"
      />
      <InputField
        onChange={e => setPassword(e.target.value)}
        label="password"
      />

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
