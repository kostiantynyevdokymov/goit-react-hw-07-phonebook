import Main from './Main/Main';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';
import { useGetContactsQuery } from '../servies/API';

const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  return (
    <Main title="Phonebook">
      <Phonebook />
      {!isLoading && data.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <p>Phonebook empty</p>
      )}
      {error && <p>Sorry...something wrong. Try again.</p>}
    </Main>
  );
};

export default App;
