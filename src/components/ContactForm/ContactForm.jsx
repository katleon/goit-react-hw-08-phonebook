import { useAddContactMutation } from 'services/phonebookApi';
import { toast } from 'react-toastify';

import { Inputbox, Input, Span, Btn } from './ContactForm.styled';

function ContactForm({ contacts }) {
  const [addContact] = useAddContactMutation();

  const handleSubmit = event => {
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    event.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name)
        return toast.warn(
          `${name} is already in your contacts with the phone number ${contact.number}`
        );

      if (contact.number === number)
        return toast.warn(
          `${number} is already in your contacts with the name ${contact.name}`
        );
    }
    addContact({ name, number });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Inputbox>
        <label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder=" "
          />
          <Span>Name</Span>
        </label>
      </Inputbox>
      <Inputbox>
        <label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder=" "
          />
          <Span>Number</Span>
        </label>
      </Inputbox>
      <Inputbox>
        <Btn type="submit">Add contact</Btn>
      </Inputbox>
    </form>
  );
}

export default ContactForm;
