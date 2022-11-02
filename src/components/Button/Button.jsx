import PropTypes from 'prop-types';
import s from '../../styles.module.css';

export function Button({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
