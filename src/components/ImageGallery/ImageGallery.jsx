import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { createRef, useEffect } from 'react';
import s from '../../styles.module.css';

export function ImageGallery({ imagesData, bodyScrollLock }) {
  const itemRef = createRef();

  useEffect(() => {
    console.log('im useEffect');
    if (!itemRef.current || imagesData.length < 13) return;
    window.scrollBy({ top: window.innerHeight - 310, behavior: 'smooth' });
  }, [imagesData, itemRef]);

  return (
    <ul className={s.ImageGallery}>
      {imagesData.map((image, idx) => (
        <ImageGalleryItem
          key={image.id}
          ref={idx % 12 === 0 ? itemRef : null}
          id={image.id}
          smallUrl={image.webformatURL}
          largeUrl={image.largeImageURL}
          desc={image.tags}
          bodyScrollLock={bodyScrollLock}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
