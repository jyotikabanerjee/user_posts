import { Button, Container, Heading, Box } from 'react-bulma-components';
// import { Title } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
const ListItem = ({ user }) => {
  return (
    <Box className="columns p-0">
      <div className="column is-centered is-pulled-left is-centered text-black font-bold field">
        <Heading className="mx-2 mt-4 is-6"> {user.name} </Heading>
      </div>
      <div className="column is-centered is-pulled-right">
        <Button className='is-danger m-2 is-pulled-right border-none'>
          <TrashIcon className='mx-2 h-5 w-5 p-0 text-white' />
        </Button>
        <Button className='is-warning m-2 is-pulled-right  border-none'>
          <PencilIcon className='mx-2 h-5 w-5 p-0 text-black' />
        </Button>
      </div>
    </Box>
  );
}

ListItem.ReactPropTypes = {
  user: PropTypes.object
}
export default ListItem;
