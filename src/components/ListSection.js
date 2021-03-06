import { useState, useContext } from 'react';
import { Button, Container, Heading, Box } from 'react-bulma-components';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types'
import useGet from '../hooks/useGet';
// import { UsersContext } from '../context/UsersContext';
const ListSection = ({ data }) => {

  const { loading, error, data: users } = useGet('https://mockend.com/jyotikabanerjee/user_posts/users') //useGet('https://jsonplaceholder.typicode.com/users');

  // const { loading, error, data: users } = useContext(UsersContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(users);
  return (
    <div className='mt-10'>
      {users.map((user, index) => <ListItem key={user.id} user={user} />)}
    </div>
  );
}

ListSection.ReactPropTypes = {
  data: PropTypes.array
}

export default ListSection;

