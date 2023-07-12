import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { useGetContactsQuery } from 'services/phonebookApi';
import Notification from 'components/Notification/Notification';
import isEmpty from 'utilities/isEmpty';
import Loader from 'components/Loader/Loader';

import {
  Center,
  MainHeader,
  SecondHeader,
  SpinnerWrapper,
} from './Contacts.styled';

const Contacts = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  let content;

  if (isLoading) {
    content = (
      <SpinnerWrapper>
        <Loader />
      </SpinnerWrapper>
    );
  } else if (isSuccess && !isEmpty(contacts)) {
    content = <ContactList contacts={contacts} />;
  } else if (isSuccess && isEmpty(contacts)) {
    content = <Notification />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      <Center>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm contacts={contacts} />
        <SecondHeader>Contacts</SecondHeader>
        <Filter />
        {content}
      </Center>
    </>
  );
};

export default Contacts;
