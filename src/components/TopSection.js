import { Button, Container, Heading } from 'react-bulma-components';
// import { Title } from 'react-bulma-components';
const TopSection = () => {
  return (
    <div className="columns bg-slate-600 items-center">
      <Heading className='column is-centered text-white font-bold is-pulled-left'>
        My Team
      </Heading>
      <div className='column is-centered is-pulled-right text-white'>
        <Button className='is-info m-2 is-pulled-right text-white border-none'>
          Add User
        </Button>
      </div>
    </div>
  );
}

export default TopSection;
