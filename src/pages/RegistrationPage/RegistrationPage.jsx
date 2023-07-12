import { useSignupMutation } from 'services/phonebookApi';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../../redux/Actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import {
  Center,
  MainHeader,
  Inputbox,
  Input,
  Span,
  Btn,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { name, email, password };
    evt.preventDefault();
    await signup(credentials)
      .unwrap()
      .then(({ token }) => Cookies.set('token', token))
      .then(() => navigate('/contacts'))
      .catch(() => {
        toast.warn('User with this email address already exists');
      });
    const token = Cookies.get('token');
    dispatch(addToken(token));

    form.reset();
  };

  return (
    <Center>
      <MainHeader>Sign up</MainHeader>
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
              type="text"
              name="name"
              title="Please enter your name"
              required
              placeholder=" "
            />
            <Span>Name</Span>
          </label>
        </Inputbox>
        <Inputbox>
          <label>
            <Input
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              placeholder=" "
            />
            <Span>Password</Span>
          </label>
        </Inputbox>
        <Inputbox>
          <Btn type="submit">Sign up</Btn>
        </Inputbox>
      </form>
    </Center>
  );
};

export default RegistrationPage;
