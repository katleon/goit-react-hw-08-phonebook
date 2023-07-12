import { useCurrentUserQuery } from 'services/phonebookApi';
import { Paragraph } from './WelcomeBack.styled';

function WelcomeBack() {
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useCurrentUserQuery();

  let name;

  if (isLoading) {
    name = 'Is loading...';
  } else if (isSuccess) {
    name = user.name;
  } else if (isError) {
    name = error.toString();
  }
  return (
    <Paragraph>
      Welcome back <b>{name}!</b>
    </Paragraph>
  );
}

export default WelcomeBack;
