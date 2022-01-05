import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ url, onClick }) {
  return createPortal(
    <Overlay onClick={onClick}>
      <ModalImg>
        <img src={url} alt="" />
      </ModalImg>
    </Overlay>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClick: PropTypes.func,
  url: PropTypes.string,
};
