import React from 'react';
import PropTypes from 'prop-types';
import { LoadBtn } from './Button.styled';

export default function Button({ onClickProp }) {
  return (
    <LoadBtn type="button" onClick={onClickProp}>
      Load More
    </LoadBtn>
  );
}
Button.propTypes = {
  onClickProp: PropTypes.func,
};
