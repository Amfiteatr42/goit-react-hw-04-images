import { Component } from 'react'
import s from '../../styles.module.css'

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc)
  }

  closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      this.props.toggleModal()
    }
  }

  render() {
  const { largeUrl, desc, toggleModal } = this.props;
  
  return (
    <>
      <div className={s.Overlay} onClick={toggleModal} >
        <div className={s.Modal} >
          <img src={largeUrl} alt={desc} />
        </div>
      </div> 
    </>
  )
  }
}
