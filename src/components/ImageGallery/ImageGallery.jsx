import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { createRef, useEffect } from 'react';
import s from '../../styles.module.css';

export function ImageGallery({ imagesData, bodyScrollLock }) {
  const itemRef = createRef();
  // const firstRenderCheck = useRef(true);

  //** Auto scroll on Load More press **//
  useEffect(() => {
    // if (firstRenderCheck.current) {
    //   firstRenderCheck.current = false;
    //   return;
    // }
    if (imagesData.length < 13) return;
    window.scrollBy({ top: window.innerHeight - 200, behavior: 'smooth' });
  }, [imagesData]);

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
