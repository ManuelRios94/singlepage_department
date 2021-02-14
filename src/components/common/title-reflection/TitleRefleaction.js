import { TitleReflectionContainer, TitleReflectionH1 } from './style';
import PropTypes from 'prop-types';

const TitleRefleaction = ({ text }) => {
  return (
    <TitleReflectionContainer>
      <TitleReflectionH1 aria-label={text} />
    </TitleReflectionContainer>
  );
};

TitleRefleaction.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleRefleaction;
