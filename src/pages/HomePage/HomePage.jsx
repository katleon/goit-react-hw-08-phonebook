import { useSelector } from 'react-redux';
import WelcomeBack from '../../components/WelcomeBack/WelcomeBack';

import {
  Center,
  MainHeader,
  Paragraph,
  StyledLink,
} from 'pages/HomePage/HomePage.styled';

const HomePage = () => {
  const token = useSelector(state => state.token);

  return (
    <Center>
      <MainHeader>Phonebook</MainHeader>
      {!token && (
        <Paragraph>
          Welcome to my Phonebook App. Please{' '}
          <StyledLink to="/register">Sign up </StyledLink>or{' '}
          <StyledLink to="/login">Log in</StyledLink> to get started.
        </Paragraph>
      )}
      {token && <WelcomeBack />}
    </Center>
  );
};

export default HomePage;
