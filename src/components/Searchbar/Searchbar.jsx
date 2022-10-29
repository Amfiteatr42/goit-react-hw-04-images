import s from '../../styles.module.css'

export function Searchbar({ onSubmit, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault()
    const searchQuery = e.target.elements.query.value

    onSubmit(searchQuery)
    e.target.reset()
  }

  return (
  <header className={s.Searchbar}>
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchFormButton} disabled={isLoading}>
          <span className={s.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        placeholder="Search images and photos"
      />
      </form>
      
  </header>
  )
}