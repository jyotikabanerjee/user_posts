import { Button, Container, Heading } from 'react-bulma-components';
// import { Title } from 'react-bulma-components';
import PropTpes from 'prop-types';
const TopSection = ({ btnClickHandler, sectionHeading, btnLabel }) => {
  return (
    <div className="columns bg-slate-600 items-center">
      <Heading className='column is-centered text-white font-bold is-4 is-pulled-left mx-2 my-2'>
        {sectionHeading}
      </Heading>
      <div className='column is-centered is-pulled-right text-white'>
        <Button onClick={btnClickHandler} className='is-info m-2 is-pulled-right text-white border-none'>
          {btnLabel}
        </Button>
      </div>
    </div>
  );
}

TopSection.ReactPropTypes = {
  btnClickHandler: PropTpes.func,
  sectionHeading: PropTpes.string,
  btnLabel: PropTpes.string
}

export default TopSection;
