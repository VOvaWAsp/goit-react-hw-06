import css from './Contact.module.css';
// import { FaPhoneAlt } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";

export const Contact = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <h2 className={css.text}>
        {/* <RxAvatar size={26} /> */}
        {contacts.name}
      </h2>
      <p className={css.text}>
        {/* <FaPhoneAlt size={16} /> */}
        {contacts.number}
      </p>
      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
};
