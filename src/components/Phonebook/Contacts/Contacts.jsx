import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from './Contacts.styled';
import LabelFilter from '../LabelFilter/LabelFilter';
import InputFilter from '../Input/Filter/InputFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import { useGetContactsQuery } from 'servies/API';
import { useSelector } from 'react-redux';

const Contacts = ({ name }) => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return (
    <ContactsList>
      <p>{name}</p>
      <LabelFilter title="Find contacts by name">
        <InputFilter />
      </LabelFilter>
      <ul>
        {visibleContacts.map(data => (
          <li key={data.id}>
            <span>
              {data.name}: {data.number}
            </span>
            <ButtonDelete id={data.id} />
          </li>
        ))}
      </ul>
    </ContactsList>
  );
};
export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
};
