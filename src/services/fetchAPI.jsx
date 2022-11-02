import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30320349-f886ff3d38376fcc5572a2958';

export async function fetchImages(query, page) {
  const response = await axios(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.data.hits);
  return response;
}

// async function fetchImages() {
//   try {
//   setIsLoading(true)
//   const newImages = await axios(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//   .then(res => res.data.hits)

//   // When using setImagesData as below, react require to include imagesData
//   // to the dependencies, which will lead to an infinite loop.
//   // Therefore we need to use a callback to setImagesData
//   // which receives currentState in arguments automaticly.
//   // setImagesData([...imagesData, ...newImages])
//   setImagesData(currentImages => [...currentImages, ...newImages])
//   setIsLoading(false)

//   } catch (error) {
//     console.log(error);
//   }
// }
