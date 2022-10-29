import axios from "axios";
import { ThreeCircles } from 'react-loader-spinner'
import { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import s from '../styles.module.css'

axios.defaults.baseURL = 'https://pixabay.com/api/'

export class App extends Component {
  state = {
    page: 1,
    query: '',
    imagesData: [],
    isLoading: false,
  }

  componentDidUpdate = async (_, prevState) => {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({isLoading: true})
        const images = await axios.get(`?q=${query}&page=${page}&key=30320349-f886ff3d38376fcc5572a2958&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.data.hits)

        this.setState(prevState => ({
        imagesData: [...prevState.imagesData, ...images],
        isLoading: false,
        
      }))
      } catch (error) {
        console.log(error);
  }
    }
  }

  onSubmit = (searchQuery) => {
      this.setState({
        page: 1,
        query: searchQuery,
        imagesData: [],
        isLoading: false,
    }) 
  }

  onLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1
    }))
  }

  render() {
    const { imagesData, isLoading } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} isLoading={isLoading}/>
        <ImageGallery imagesData={imagesData} />
        {isLoading && <ThreeCircles
          height="100"
          width="100"
          color="#0e0e73"
          wrapperStyle={{}}
          wrapperClass={s.spinner}
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor="#2a7488"
          middleCircleColor="#4c8dbe"
        />}
        {!!imagesData.length && <Button onLoadMore={this.onLoadMore} />}
      </div>
    )
  }
}