import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import s from '../../styles.module.css'

export function ImageGallery({ imagesData }) {
  return (
    <ul className={s.ImageGallery}>
      {imagesData.map(image => <ImageGalleryItem key={image.id} id={image.id} smallUrl={image.webformatURL} largeUrl={image.largeImageURL} desc={image.tags} />)}
    </ul>
  )
}

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }
  ),).isRequired,
}