import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <div>
      <ul className={css.container}>
        {contacts.map(item => {
          return (
            <li key={item.id}>
              <Contact contacts={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
