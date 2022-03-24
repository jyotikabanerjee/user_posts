import { useState } from 'react';
import { Container } from 'react-bulma-components';
import TopSection from '../components/TopSection.js';
import ListSection from '../components/ListSection';
import AddUser
  from './AddUser.js';
const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <>
      <Container>
        <TopSection showSection={setShowAddUser} sectionHeading={`My Team`} btnLabel={`Add User`} />
        {!showAddUser && <ListSection />}
        {showAddUser && <AddUser />}
      </Container>
    </>
  );
}

export default Users;
