import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import s from '../../styles.module.css';

export function Modal({ largeUrl, desc, toggleModal }) {
  //** Disable scroll lock using library **//

  // const listRef = useRef(null);
  // let targerEl = null;

  // useEffect(() => {
  //   targerEl = listRef.current;
  //   disableBodyScroll(targerEl)
  //   console.log(targerEl, document.body);
  // }, [])

  useEffect(() => {
    const closeOnEsc = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', closeOnEsc);
    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [toggleModal]);

  //** Close modal only by Overlay click, not image. **//
  //
  // closeOnOverlayClick = (e) => {
  //   if (e.target !== e.currentTarget) return;
  //   this.props.toggleModal()
  // }

  return (
    <>
      <div className={s.Overlay} onClick={toggleModal}>
        <div className={s.Modal}>
          <img src={largeUrl} alt={desc} />
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  largeUrl: PropTypes.string.isRequired,
  decs: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
