import s from '../../styles.module.css'

export function Button({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>Load More</button>
  )
}