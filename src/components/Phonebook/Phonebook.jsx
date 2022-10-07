import { useState } from 'react';
import InputName from './Input/Name/InputName';
import FormPhonebook from './Form/Form';
import LabelPhonebook from './Label/Label';
import InputNumber from './Input/Number/InputNumber';
import ButtonSubmit from './Button/ButtonSubmit';
import { useAddContactMutation, useGetContactsQuery } from 'servies/API';
import Notiflix from 'notiflix';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const formSubmitHandle = async data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      Notiflix.Notify.warning(`${data.name} is already in contact`);
      return;
    }
    try {
      await addContact(data);
      Notiflix.Notify.success('Contact added');
    } catch (error) {
      Notiflix.Notify.failure('Something wrong... try again');
    }
  };

  const clickOnBtnSubmit = async event => {
    event.preventDefault();
    formSubmitHandle({ name, number });
    reset();
  };

  return (
    <div>
      <FormPhonebook onSubmit={clickOnBtnSubmit}>
        <LabelPhonebook title="Name">
          <InputName value={name} onChange={handleChange} />
        </LabelPhonebook>
        <LabelPhonebook title="Number">
          <InputNumber value={number} onChange={handleChange} />
        </LabelPhonebook>
        <ButtonSubmit text="Add contact" />
      </FormPhonebook>
    </div>
  );
};

export default Phonebook;
