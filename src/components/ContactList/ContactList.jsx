import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { useDeleteContactMutation } from 'services/phonebookApi';

import { List, Btn, ElementWrapper } from './ContactList.styled';

function ContactList({ contacts }) {
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = useMemo(
    () =>
      contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [normalizedFilter, contacts]
  );

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ElementWrapper key={'el' + id}>
          <List key={id}>
            <a href={`tel:${number}`}>
              {name} <br />
              {number}
            </a>
          </List>
          <Btn key={'btn' + id} onClick={() => deleteContact(id)}>
            Delete <BsTrash3 />
          </Btn>
        </ElementWrapper>
      ))}
    </ul>
  );
}

export default ContactList;
