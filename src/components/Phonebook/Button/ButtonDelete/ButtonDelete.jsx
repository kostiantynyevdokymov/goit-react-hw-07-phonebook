import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './ButtonDelete.styled';
import { useDeleteContactMutation } from 'servies/API';

const ButtonDelete = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <DeleteBtn
      type="button"
      disabled={isLoading}
      onClick={() => deleteContact(id)}
    >
      {isLoading ? 'wait...' : 'Delete'}
    </DeleteBtn>
  );
};

export default ButtonDelete;

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
