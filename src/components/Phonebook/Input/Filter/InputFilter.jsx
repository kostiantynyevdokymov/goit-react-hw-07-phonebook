import React from 'react';
import Input from '../Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactSlice';

const InputFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };
  return (
    <div>
      <Input
        type="text"
        name="filter"
        placeholder="Find contact"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

export default InputFilter;
