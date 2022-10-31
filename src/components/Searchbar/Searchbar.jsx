import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles.module.css'

export class Searchbar extends Component {

  state = {
    searchQuery: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.searchQuery)
    e.target.reset()
  }

  onInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() {
   return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={s.SearchFormButton} disabled={this.props.isLoading}>
            <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
           value={this.state.searchQuery}
           onChange={this.onInputChange}
          placeholder="Search images and photos"
        />
        </form>
    </header>
    )
}
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}