import React from 'react';
//import PropTypes from 'prop-types';
import { LoadBtn } from './Button.styled';

const Button = ({ onClickProp, label }) => {
  return (
    <LoadBtn type="button" onClick={onClickProp}>
      {label}
    </LoadBtn>
  );
};

// ContactsList.propTypes = {
//   findeContact: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
// };
export default Button;
