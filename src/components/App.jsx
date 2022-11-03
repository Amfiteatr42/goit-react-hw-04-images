import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'services/fetchAPI';
import s from '../styles.module.css';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('ukraine'); //shows on first visit
  const [imagesData, setImagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) getImages();

    async function getImages() {
      try {
        setIsLoading(true);
        const newImages = await fetchImages(query, page);

        // When using setImagesData as below, react require to include imagesData
        // to the dependencies, which will lead to an infinite loop.
        // Therefore we need to use a callback to setImagesData
        // which receives currentState in arguments automaticly.
        // setImagesData([...imagesData, ...newImages])
        setImagesData(currentImages => [...currentImages, ...newImages]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [query, page]);

  function onSubmit(searchQuery) {
    setPage(1);
    setQuery(searchQuery);
    setImagesData([]);
    setIsLoading(false);
  }

  function onLoadMore() {
    setPage(page + 1);
  }

  //** Custom disable scroll lock **/
  // const listRef = useRef(null)

  function bodyScrollLock(displayModal) {
    // if (displayModal) {
    //   document.body.style.overflow = 'hidden'
    // } else {
    //   document.body.style.overflow = 'visible'
    // }
    // console.log(document.body);
  }

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} isLoading={isLoading} />
      {!!imagesData.length && (
        <ImageGallery imagesData={imagesData} bodyScrollLock={bodyScrollLock} />
      )}
      {isLoading && <Loader />}
      {!!imagesData.length && <Button onLoadMore={onLoadMore} />}
    </div>
  );
}
