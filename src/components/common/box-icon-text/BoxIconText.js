import { BoxIconTextContainer, IconContainer, Text, TextLink } from './style';
import PropTypes from 'prop-types';

const BoxIconText = ({ text, link = null, children }) => {
  return (
    <BoxIconTextContainer>
      <IconContainer>{children}</IconContainer>
      {link !== null ? (
        <TextLink>
          <a href={link}>{text}</a>
        </TextLink>
      ) : (
        <Text>{text}</Text>
      )}
    </BoxIconTextContainer>
  );
};

BoxIconText.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  children: PropTypes.object,
};

export default BoxIconText;
