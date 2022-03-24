import { Button, Container, Heading } from 'react-bulma-components';
// import { Title } from 'react-bulma-components';
import PropTpes from 'prop-types';
const TopSection = ({ showSection, sectionHeading, btnLabel }) => {
  return (
    <div className="columns bg-slate-600 items-center">
      <Heading className='column is-centered text-white font-bold is-pulled-left mx-2 my-2'>
        {sectionHeading}
      </Heading>
      <div className='column is-centered is-pulled-right text-white'>
        <Button onClick={() => { showSection(true) }} className='is-info m-2 is-pulled-right text-white border-none'>
          {btnLabel}
        </Button>
      </div>
    </div>
  );
}

TopSection.ReactPropTypes = {
  showSection: PropTpes.func,
  sectionHeading: PropTpes.string,
  btnLabel: PropTpes.string
}

export default TopSection;
