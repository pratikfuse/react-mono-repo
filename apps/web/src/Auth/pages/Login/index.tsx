import Button from '@lf-mono-web/components/lib/Button';
import { useAppDispatch } from 'src/Common/redux/hooks';
import InputField from '@lf-mono-web/components/lib/InputField';
import { useState } from 'react';
import actions from 'src/Auth/redux/actions';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  return (
    <div>
      Login Page
      <InputField
        label="email"
        onChange={e => setEmail(e.target.value)}
      />
      <InputField
        label="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch(
            actions.logIn({
              email,
              password,
              navigate, // pass navigate to action to navigate to the app route on successful authentication
            }),
          );
        }}
      >
        LogIn
      </Button>
    </div>
  );
};

export default LoginPage;
