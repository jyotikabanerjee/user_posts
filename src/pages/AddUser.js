import { useState } from 'react';
import { Box, Button } from 'react-bulma-components';
import PropTpes from "prop-types";
import { useUsersPost } from '../hooks/post-hooks';

const AddUser = ({ btnClickHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addClicked, setAddClicked] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email
    };
    setName('');
    setEmail('');
    setAddClicked(true);
  }

  return (
    <Box className="bg-gray-200 mt-2 p-5">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input w-3/4" name="name" value={name} onChange={handleNameChange} type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input w-3/4" type="email" name="email" value={email} onChange={handleEmailChange} placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>

      <div className="columns my-2">
        <Button className='m-4 is-success' onClick={onAddUser}>Add</Button>
        <Button className="mx-2 my-4 is-danger" onClick={btnClickHandler}>Cancel</Button>
      </div>
    </Box>
  );
}

AddUser.ReactPropTypes = {
  btnClickHandler: PropTpes.func
}

export default AddUser;
