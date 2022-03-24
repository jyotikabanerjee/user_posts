import { useState } from 'react';
import { Container } from 'react-bulma-components';
import TopSection from '../components/TopSection.js';
import ListSection from '../components/ListSection';
import AddUser
  from './AddUser.js';
const Users = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  const showSectionFn = () => {
    setShowAddUser(true);
  }

  const hideSectionFn = () => {
    setShowAddUser(false);
  }

  return (
    <Container>
      <TopSection btnClickHandler={showSectionFn} sectionHeading={`My Team`} btnLabel={`Add User`} />
      {!showAddUser && <ListSection />}
      {showAddUser && <AddUser showSection={hideSectionFn} />}
    </Container>
  );
}

export default Users;
