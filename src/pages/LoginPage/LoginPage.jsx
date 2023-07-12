import { addToken } from '../../redux/Actions';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'services/phonebookApi';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import {
  Center,
  MainHeader,
  Inputbox,
  Input,
  Span,
  Btn,
} from './LoginPage.styled';

const LoginPage = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };
    evt.preventDefault();
    await login(credentials)
      .unwrap()
      .then(({ token }) => Cookies.set('token', token))
      .catch(() => {
        toast.warn('Please check your email address or password');
      });

    const token = Cookies.get('token');
    dispatch(addToken(token));
    navigate('/contacts');

    form.reset();
  };

  return (
    <>
      <Center>
        <MainHeader>Log in</MainHeader>
        <form onSubmit={handleSubmit}>
          <Inputbox>
            <label>
              <Input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter your e-mail address (example: characters@characters.domain)"
                required
                placeholder=" "
              />
              <Span>Email</Span>
            </label>
          </Inputbox>
          <Inputbox>
            <label>
              <Input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
                required
                placeholder=" "
              />
              <Span>Password</Span>
            </label>
          </Inputbox>
          <Inputbox>
            <Btn type="submit">Log in</Btn>
          </Inputbox>
        </form>
      </Center>
    </>
  );
};

export default LoginPage;
